import { Component, OnInit, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-palenque-tour',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './palenque-tour.component.html',
  styleUrl: './palenque-tour.component.css'
})
export class PalenqueTourComponent implements OnInit, AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  readonly included = [
    { icon: 'transport', label: 'Private Transportation from the hotel' },
    { icon: 'guide',     label: 'Local Tour Guide' },
    { icon: 'concierge', label: 'Concierge from Cartagena' },
    { icon: 'hydration', label: 'Hydration throughout the day' },
    { icon: 'culture',   label: 'Tour and insights into the Pillars of Palenque\'s Culture' },
    { icon: 'dance',     label: 'Show at the local dancing school' },
    { icon: 'doctor',    label: 'Visit to the natural doctor' },
    { icon: 'candy',     label: 'Visit to the typical candy maker' },
    { icon: 'lunch',     label: 'Traditional lunch' },
  ];

  readonly details = [
    { label: 'Duration',       value: '6 hours' },
    { label: 'Suggested Time', value: '8:00 AM' },
    { label: 'Max Capacity',   value: '35 people' },
    { label: 'Language',       value: 'EN / ES' },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Palenque Tour — The First Free Town in the Americas | Mulata Concierge');
    this.metaService.removeTag("name='description'");
    this.metaService.addTag({
      name: 'description',
      content: 'Visit San Basilio de Palenque, the first free town in the Americas. An immersive day of Afro-Colombian culture, music, dance, cuisine and ancestral traditions — curated by Mulata Concierge.'
    });
    this.metaService.updateTag({ property: 'og:title', content: 'Palenque Tour — The First Free Town in the Americas | Mulata Concierge' });
    this.metaService.updateTag({ property: 'og:description', content: 'Discover history, identity and resilience in San Basilio de Palenque. Local guide, traditional lunch, dance show and more — all included.' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.mulataconcierge.com.co/experiences/palenque-tour' });
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
    const msg = `Hi! I'm very interested in the Palenque Tour. Could you give me more details and availability?`;
    window.open(`https://wa.me/573013132423?text=${encodeURIComponent(msg)}`, '_blank');
  }
}
