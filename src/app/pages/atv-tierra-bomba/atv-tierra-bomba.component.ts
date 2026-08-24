import { Component, OnInit, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-atv-tierra-bomba',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './atv-tierra-bomba.component.html',
  styleUrl: './atv-tierra-bomba.component.css'
})
export class AtvTierraBombaComponent implements OnInit, AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  readonly included = [
    'Boat transfer: Dock → Island → Dock',
    'ATV + Helmet + Insurance',
    'ATV Island Tour',
    'Hydration',
    'Bilingual guide',
  ];

  readonly notes = [
    { icon: 'people', text: 'Minimum 2 ATVs per booking' },
    { icon: 'clock',  text: 'Arrive 30 minutes before departure — late arrivals are a no-show' },
    { icon: 'car',    text: 'Ground transportation to the dock is not included' },
  ];

  readonly details = [
    { label: 'Duration',     value: '2 hours' },
    { label: 'Time Slots',   value: '10 AM · 1 PM · 4 PM' },
    { label: 'Max Capacity', value: '10 ATVs' },
    { label: 'Min. Group',   value: '2 ATVs' },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('ATV Tierra Bomba — Island Adventure Cartagena | Mulata Concierge');
    this.metaService.removeTag("name='description'");
    this.metaService.addTag({
      name: 'description',
      content: 'Ride ATVs across the raw terrain of Tierra Bomba Island, just 10 minutes from Cartagena by boat. Helmet, insurance, and bilingual guide included. Curated by Mulata Concierge.'
    });
    this.metaService.updateTag({ property: 'og:title', content: 'ATV Tierra Bomba — Island Adventure Cartagena | Mulata Concierge' });
    this.metaService.updateTag({ property: 'og:description', content: '10 minutes from Cartagena. A world away. Ride through the rugged island terrain of Tierra Bomba on an adrenaline-fuelled ATV tour unlike anything else in the Caribbean.' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.mulataconcierge.com.co/experiences/atv-tierra-bomba' });
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
    const msg = `Hi! I'm interested in the ATV Tierra Bomba experience. Could you give me more details and availability?`;
    window.open(`https://wa.me/573150173841?text=${encodeURIComponent(msg)}`, '_blank');
  }
}
