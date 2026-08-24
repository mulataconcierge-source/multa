import { Component, OnInit, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-vintage-car-tour',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './vintage-car-tour.component.html',
  styleUrl: './vintage-car-tour.component.css'
})
export class VintageCarTourComponent implements OnInit, AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  readonly included = [
    'Professional Tour Guide',
    'Restored vintage vehicle',
    'Tour through the Historic Center and Getsemaní',
  ];

  readonly details = [
    { label: 'Duration', value: '1 hour' },
    { label: 'Time Slots', value: '9 AM · 11 AM · 3 PM · 5 PM' },
    { label: 'Max Capacity', value: 'Up to 7 guests' },
    { label: 'Language', value: 'EN / ES' },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Vintage Car Tour Cartagena — Classic Convertible City Ride | Mulata Concierge');
    this.metaService.removeTag("name='description'");
    this.metaService.addTag({
      name: 'description',
      content: 'Cruise Cartagena\'s Historic Center and Getsemaní in a beautifully restored vintage car, with a local guide bringing the city\'s history and architecture to life.'
    });
    this.metaService.updateTag({ property: 'og:title', content: 'Vintage Car Tour Cartagena | Mulata Concierge' });
    this.metaService.updateTag({ property: 'og:description', content: 'Discover the timeless charm of Cartagena aboard a beautifully restored vintage car, accompanied by a knowledgeable local guide.' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://mulataconcierge.com.co/experiences/vintage-car-tour' });
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
    const msg = `Hi! I'm interested in booking the Vintage Car Tour experience in Cartagena. Could you give me more details?`;
    window.open(`https://wa.me/573150173841?text=${encodeURIComponent(msg)}`, '_blank');
  }
}
