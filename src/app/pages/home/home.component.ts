import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { INQUIRY_ENDPOINT, buildWhatsAppFallback, InquiryPayload } from '../../shared/inquiry.config';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  contactForm: FormGroup;

  /** 'idle' | 'sending' | 'sent' | 'error' — drives the submit UI. */
  formState: 'idle' | 'sending' | 'sent' | 'error' = 'idle';
  /** Populated when delivery failed, so the visitor still has a way through. */
  fallbackLink = '';

  private http = inject(HttpClient);

  constructor(private fb: FormBuilder, private titleService: Title, private metaService: Meta) {
    this.contactForm = this.fb.group({
      fullName:    ['', Validators.required],
      email:       ['', [Validators.required, Validators.email]],
      phone:       [''],
      description: ['', Validators.required],
      // Honeypot: hidden from humans, irresistible to bots. Non-empty = spam.
      botcheck:    ['']
    });
  }

  ngOnInit(): void {
    this.titleService.setTitle('Mulata Concierge | Luxury Travel & Private Concierge in Cartagena, Colombia');

    this.metaService.removeTag("name='description'");
    this.metaService.addTag({
      name: 'description',
      content: "Mulata is your private concierge in Cartagena, Colombia. We design unforgettable trips: bachelor & bachelorette parties, honeymoons, island days and group travel. Talk to Margui today."
    });

    this.metaService.updateTag({ property: 'og:title', content: 'Mulata Concierge | Luxury Travel in Cartagena & Colombia' });
    this.metaService.updateTag({ property: 'og:description', content: 'Your private concierge for unforgettable trips in Cartagena. All curated by Margui, a Cartagena local with 11 years of experience.' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.mulataconcierge.com.co/' });
  }

  onSubmit() {
    // Surface validation for anyone who tabbed past a field without touching it.
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    if (this.formState === 'sending') return;

    const payload = this.contactForm.value as InquiryPayload;
    this.fallbackLink = buildWhatsAppFallback(payload);

    // Silently drop bot submissions: the honeypot is invisible to real visitors.
    if (payload.botcheck) {
      this.formState = 'sent';
      this.contactForm.reset();
      return;
    }

    this.formState = 'sending';
    this.http.post<{ success: boolean; message?: string }>(
      INQUIRY_ENDPOINT,
      {
        fullName: payload.fullName,
        email: payload.email,
        phone: payload.phone,
        description: payload.description
      },
      { headers: { 'Content-Type': 'application/json', Accept: 'application/json' } }
    ).subscribe({
      next: (res) => {
        // Only claim delivery if the endpoint actually confirms it.
        if (res && res.success === false) {
          this.formState = 'error';
          return;
        }
        this.formState = 'sent';
        this.contactForm.reset();
      },
      // Covers a 404 locally under `ng serve`, and any 4xx/5xx in production —
      // the visitor always gets the WhatsApp route rather than a dead end.
      error: () => {
        this.formState = 'error';
      }
    });
  }

  resetForm() {
    this.formState = 'idle';
    this.fallbackLink = '';
  }
}
