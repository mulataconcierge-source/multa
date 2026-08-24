import { Component, OnInit, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sport-fishing',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './sport-fishing.component.html',
  styleUrl: './sport-fishing.component.css'
})
export class SportFishingComponent implements OnInit, AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  readonly included = [
    'Private boat',
    'Fishing gear',
    'Hydration',
    'Lunch',
    'Expert crew',
  ];

  readonly notes = [
    { icon: 'car',   text: 'Ground transportation is not included' },
    { icon: 'clock', text: 'Arrive 15 minutes before departure — late arrivals are a no-show' },
    { icon: 'sun',   text: 'Bring sunscreen, a hat, and sunglasses for a full day at sea' },
  ];

  readonly details = [
    { label: 'Duration',      value: '4 hours' },
    { label: 'Suggested Time', value: '07:00 AM' },
    { label: 'Max Capacity',  value: '6 people' },
    { label: 'Language',      value: 'EN / ES' },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Sport Fishing — Barú Caribbean Charter Cartagena | Mulata Concierge');
    this.metaService.removeTag("name='description'");
    this.metaService.addTag({
      name: 'description',
      content: 'A 4-hour private sport fishing charter in the waters of Barú. Private boat, fishing gear, lunch, and expert crew included. Perfect for beginners and seasoned anglers. Curated by Mulata Concierge.'
    });
    this.metaService.updateTag({ property: 'og:title', content: 'Sport Fishing — Barú Caribbean Charter Cartagena | Mulata Concierge' });
    this.metaService.updateTag({ property: 'og:description', content: 'Embark on a 4-hour adventure in the waters of Barú, where the thrill of fishing meets unforgettable Caribbean landscapes.' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.mulataconcierge.com.co/experiences/sport-fishing' });
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
    const msg = `Hi! I'm interested in the Sport Fishing experience. Could you give me more details and availability?`;
    window.open(`https://wa.me/573150173841?text=${encodeURIComponent(msg)}`, '_blank');
  }
}
