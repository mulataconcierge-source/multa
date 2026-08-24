import { Component, OnInit, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-city-tour',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './city-tour.component.html',
  styleUrl: './city-tour.component.css'
})
export class CityTourComponent implements OnInit, AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  readonly included = [
    'Private Transportation',
    'Professional Tour Guide',
    'Walking tour through the Historic Center and Getsemaní',
    'Visit to San Felipe Castle or La Popa Convent',
  ];

  readonly details = [
    { label: 'Duration', value: '4 hours' },
    { label: 'Suggested Time', value: '9 AM – 2 PM' },
    { label: 'Max Capacity', value: 'Open group' },
    { label: 'Language', value: 'EN / ES' },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('City Tour Cartagena — Iconic Sites & Hidden Stories | Mulata Concierge');
    this.metaService.removeTag("name='description'");
    this.metaService.addTag({
      name: 'description',
      content: 'Explore Cartagena\'s most iconic sites with a private guide. Visit the Historic Center, Getsemaní, and the Castillo de San Felipe or Convento de La Popa — curated by Mulata Concierge.'
    });
    this.metaService.updateTag({ property: 'og:title', content: 'City Tour Cartagena — Iconic Sites & Hidden Stories | Mulata Concierge' });
    this.metaService.updateTag({ property: 'og:description', content: 'A full experience of Cartagena — history, art, and the city\'s two greatest gems. Private transportation and expert guide included.' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.mulataconcierge.com.co/experiences/city-tour' });
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
    const msg = `Hi! I'm interested in the City Tour in Cartagena. Could you give me more details?`;
    window.open(`https://wa.me/573150173841?text=${encodeURIComponent(msg)}`, '_blank');
  }
}
