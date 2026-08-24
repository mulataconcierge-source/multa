import { Component, OnInit, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-salsa-classes',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './salsa-classes.component.html',
  styleUrl: './salsa-classes.component.css'
})
export class SalsaClassesComponent implements OnInit, AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  readonly included = [
    'Professional Dancer & Instructor',
    'Private location at the Old City',
    'Hydration',
    'Welcome drink',
  ];

  readonly options = [
    {
      type: 'Shared Class',
      desc: 'Join a fun group session on a fixed weekly schedule — perfect for solo travelers and couples who want to meet new people on the dance floor.',
    },
    {
      type: 'Private Class',
      desc: 'Exclusive session for your group — your pace, your music, your vibe. Ideal for larger groups or anyone who wants the full spotlight.',
    },
  ];

  readonly details = [
    { label: 'Duration',        value: '1 hour' },
    { label: 'Rhythms',         value: 'Salsa & Champeta' },
    { label: 'Shared Classes',  value: 'Fixed schedule' },
    { label: 'Private Classes', value: 'Min. 3 guests' },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Salsa & Champeta Classes Cartagena — Dance Experience | Mulata Concierge');
    this.metaService.removeTag("name='description'");
    this.metaService.addTag({
      name: 'description',
      content: 'Learn salsa and champeta from passionate local instructors in the heart of Cartagena. Shared or private classes available. High energy, zero excuses. Curated by Mulata Concierge.'
    });
    this.metaService.updateTag({ property: 'og:title', content: 'Salsa & Champeta Classes Cartagena | Mulata Concierge' });
    this.metaService.updateTag({ property: 'og:description', content: 'Two rhythms. One hour. Zero excuses. Learn salsa and champeta from passionate local instructors in Cartagena\'s Old City.' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://mulataconcierge.com.co/experiences/salsa-classes' });
  }

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(el => this.observer!.observe(el));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  book(): void {
    const msg = `Hi! I'm interested in the Salsa & Champeta Classes in Cartagena. Could you give me more details and availability?`;
    window.open(`https://wa.me/573150173841?text=${encodeURIComponent(msg)}`, '_blank');
  }
}
