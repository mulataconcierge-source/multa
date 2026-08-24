import { Component, OnInit, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cool-tour',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cool-tour.component.html',
  styleUrl: './cool-tour.component.css'
})
export class CoolTourComponent implements OnInit, AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  readonly included = [
    'Professional Tour Guide',
    'Walking tour through the Historic Center and Getsemaní',
    'Dance show in the main square (depending on day and time)',
  ];

  readonly details = [
    { label: 'Duration', value: '2 hours' },
    { label: 'Suggested Time', value: '3:00 PM' },
    { label: 'Max Capacity', value: 'Open group' },
    { label: 'Language', value: 'EN / ES' },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Cool Tour — Local Cartagena Experience | Mulata Concierge');
    this.metaService.removeTag("name='description'");
    this.metaService.addTag({
      name: 'description',
      content: 'Explore Cartagena\'s Historic Center and Getsemaní with a local guide. Hidden flavors, artistic alleys, and a dance show in the main square — the city as locals live it.'
    });
    this.metaService.updateTag({ property: 'og:title', content: 'Cool Tour — Local Cartagena Experience | Mulata Concierge' });
    this.metaService.updateTag({ property: 'og:description', content: 'Explore the Historic Center and Getsemaní alongside a local from Cartagena. A cultural experience of hidden flavors, artistic alleys and the true essence of the city.' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://mulataconcierge.com.co/experiences/cool-tour' });
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
    const msg = `Hi! I'm interested in booking the Cool Tour experience in Cartagena. Could you give me more details?`;
    window.open(`https://wa.me/573150173841?text=${encodeURIComponent(msg)}`, '_blank');
  }
}
