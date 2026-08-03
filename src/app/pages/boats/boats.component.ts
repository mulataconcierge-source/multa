import { Component, OnInit, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { DomSanitizer, SafeHtml, Meta, Title } from '@angular/platform-browser';

interface BoatFeature {
  icon: string;
  label: string;
}

interface Boat {
  id: string;
  name: string;
  feet: string;
  capacity: number;
  features: BoatFeature[];
  images: string[];
}

@Component({
  selector: 'app-boats',
  standalone: true,
  imports: [],
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.css']
})
export class BoatsComponent implements OnInit, AfterViewInit, OnDestroy {
  private carouselState: Record<string, number> = {};
  private observer?: IntersectionObserver;

  readonly boats: Boat[] = [
    {
      id: 'marlet',
      name: 'MARLET',
      feet: '82 ft',
      capacity: 20,


      features: [
        { icon: 'bed', label: '4 Rooms' },
        { icon: 'bath', label: '3 Bathrooms' },
        { icon: 'kitchen', label: 'Full Kitchen' },
        { icon: 'sofa', label: 'Living Room' },
        { icon: 'dining', label: 'Dining Room' },
        { icon: 'jacuzzi', label: 'Jacuzzi' },
        { icon: 'crew', label: 'Full Crew' },
        { icon: 'cooler', label: 'Cooler + Ice' },
        { icon: 'motor', label: '2 Motors' },
        { icon: 'fuel', label: 'Fuel Included' },
        { icon: 'tub', label: 'Bathtub' },
      ],
      images: ['/img/marlet/1.jpg', '/img/marlet/2.jpg', '/img/marlet/3.jpg', '/img/marlet/4.jpg', '/img/marlet/5.jpg']
    },
    {
      id: 'seeland',
      name: 'SEE LAND',
      feet: '70 ft',
      capacity: 35,


      features: [
        { icon: 'bed', label: '4 Rooms' },
        { icon: 'bath', label: '4 Bathrooms' },
        { icon: 'kitchen', label: 'Full Kitchen' },
        { icon: 'sofa', label: 'Living Room' },
        { icon: 'crew', label: 'Full Crew' },
        { icon: 'cooler', label: 'Cooler + Ice' },
        { icon: 'motor', label: '2 Motors' },
        { icon: 'fuel', label: 'Fuel Included' },
      ],
      images: ['/img/sea_land/1.jpg', '/img/sea_land/2.jpg', '/img/sea_land/3.jpg', '/img/sea_land/4.jpg', '/img/sea_land/5.jpg']
    },
    {
      id: 'skyland',
      name: 'SKY LAND',
      feet: '62 ft',
      capacity: 30,


      features: [
        { icon: 'bed', label: '4 Rooms' },
        { icon: 'bath', label: '3 Bathrooms' },
        { icon: 'kitchen', label: 'Full Kitchen' },
        { icon: 'sofa', label: 'Living Room' },
        { icon: 'dining', label: 'Dining Room' },
        { icon: 'crew', label: 'Full Crew' },
        { icon: 'cooler', label: 'Cooler + Ice' },
        { icon: 'motor', label: '2 Motors' },
        { icon: 'fuel', label: 'Fuel Included' },
      ],
      images: ['/img/sky_land/1.jpeg', '/img/sky_land/2.jpeg', '/img/sky_land/3.jpeg', '/img/sky_land/4.jpeg', '/img/sky_land/5.jpeg', '/img/sky_land/6.jpeg']
    },
    {
      id: 'freeland',
      name: 'FREE LAND',
      feet: '55 ft',
      capacity: 20,


      features: [
        { icon: 'bed', label: '3 Rooms' },
        { icon: 'bath', label: '2 Bathrooms' },
        { icon: 'kitchen', label: 'Full Kitchen' },
        { icon: 'sofa', label: 'Living Room' },
        { icon: 'dining', label: 'Dining Room' },
        { icon: 'crew', label: 'Full Crew' },
        { icon: 'cooler', label: 'Cooler + Ice' },
        { icon: 'motor', label: '2 Motors' },
        { icon: 'fuel', label: 'Fuel Included' },
      ],
      images: ['/img/free_land/1.jpg', '/img/free_land/2.jpg', '/img/free_land/3.jpg']
    },
    {
      id: 'valhalla',
      name: 'VALHALLA',
      feet: '55 ft',
      capacity: 30,


      features: [
        { icon: 'bed', label: '4 Rooms' },
        { icon: 'bath', label: '4 Bathrooms' },
        { icon: 'kitchen', label: 'Full Kitchen' },
        { icon: 'sofa', label: 'Living Room' },
        { icon: 'dining', label: 'Dining Room' },
        { icon: 'crew', label: 'Full Crew' },
        { icon: 'cooler', label: 'Cooler + Ice' },
        { icon: 'motor', label: '2 Motors' },
        { icon: 'fuel', label: 'Fuel Included' },
      ],
      images: ['/img/vahalla/1.jpg', '/img/vahalla/2.jpg', '/img/vahalla/3.jpg', '/img/vahalla/4.jpg', '/img/vahalla/5.jpg']
    },
    {
      id: 'hope',
      name: 'HOPE',
      feet: '47 ft',
      capacity: 30,


      features: [
        { icon: 'bed', label: '4 Rooms' },
        { icon: 'bath', label: '4 Bathrooms' },
        { icon: 'kitchen', label: 'Full Kitchen' },
        { icon: 'sofa', label: 'Living Room' },
        { icon: 'dining', label: 'Dining Room' },
        { icon: 'crew', label: 'Full Crew' },
        { icon: 'cooler', label: 'Cooler + Ice' },
        { icon: 'motor', label: '2 Motors' },
        { icon: 'fuel', label: 'Fuel Included' },
      ],
      images: ['/img/hope/1.jpg', '/img/hope/2.jpg', '/img/hope/3.jpg', '/img/hope/4.jpg', '/img/hope/5.jpg']
    },
    {
      id: 'odysea',
      name: 'ODYSEA',
      feet: '43 ft',
      capacity: 20,


      features: [
        { icon: 'bed', label: '3 Rooms' },
        { icon: 'bath', label: '2 Bathrooms' },
        { icon: 'kitchen', label: 'Full Kitchen' },
        { icon: 'sofa', label: 'Living Room' },
        { icon: 'dining', label: 'Dining Room' },
        { icon: 'crew', label: 'Full Crew' },
        { icon: 'cooler', label: 'Cooler + Ice' },
        { icon: 'motor', label: '2 Motors' },
        { icon: 'fuel', label: 'Fuel Included' },
      ],
      images: ['/img/odysea/1.jpg', '/img/odysea/2.jpg', '/img/odysea/3.jpg', '/img/odysea/4.jpg', '/img/odysea/5.jpg']
    },
    {
      id: 'chicote',
      name: 'CHICOTE',
      feet: '44 ft',
      capacity: 20,


      features: [
        { icon: 'bed', label: '4 Rooms' },
        { icon: 'bath', label: '4 Bathrooms' },
        { icon: 'kitchen', label: 'Full Kitchen' },
        { icon: 'sofa', label: 'Living Room' },
        { icon: 'dining', label: 'Dining Room' },
        { icon: 'crew', label: 'Full Crew' },
        { icon: 'cooler', label: 'Cooler + Ice' },
        { icon: 'motor', label: '2 Motors' },
        { icon: 'fuel', label: 'Fuel Included' },
      ],
      images: ['/img/chicote/1.jpg', '/img/chicote/2.jpg', '/img/chicote/3.jpg', '/img/chicote/4.jpg', '/img/chicote/5.jpg']
    },
    {
      id: 'xman',
      name: 'X MAN',
      feet: '40 ft',
      capacity: 18,


      features: [
        { icon: 'bed', label: '4 Rooms' },
        { icon: 'bath', label: '4 Bathrooms' },
        { icon: 'kitchen', label: 'Full Kitchen' },
        { icon: 'sofa', label: 'Living Room' },
        { icon: 'dining', label: 'Dining Room' },
        { icon: 'crew', label: 'Full Crew' },
        { icon: 'cooler', label: 'Cooler + Ice' },
        { icon: 'motor', label: '2 Motors' },
        { icon: 'fuel', label: 'Fuel Included' },
      ],
      images: ['/img/x-man/1.jpg', '/img/x-man/2.jpg', '/img/x-man/3.jpg', '/img/x-man/4.jpg', '/img/x-man/5.jpg']
    },
    {
      id: 'warrior',
      name: 'SEA WARRIOR',
      feet: '55 ft',
      capacity: 40,


      features: [
        { icon: 'bed', label: '4 Rooms' },
        { icon: 'bath', label: '4 Bathrooms' },
        { icon: 'kitchen', label: 'Full Kitchen' },
        { icon: 'sofa', label: 'Living Room' },
        { icon: 'dining', label: 'Dining Room' },
        { icon: 'crew', label: 'Full Crew' },
        { icon: 'cooler', label: 'Cooler + Ice' },
        { icon: 'motor', label: '2 Motors' },
        { icon: 'fuel', label: 'Fuel Included' },
      ],
      images: ['/img/warrior/1.jpeg', '/img/warrior/2.jpeg', '/img/warrior/3.jpeg', '/img/warrior/4.jpeg', '/img/warrior/5.jpeg']
    },
  ];

  private readonly ICON_SVG: Record<string, string> = {
    bed: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>`,
    bath: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/><line x1="10" x2="8" y1="5" y2="7"/><line x1="2" x2="22" y1="12" y2="12"/><line x1="7" x2="7" y1="19" y2="21"/><line x1="17" x2="17" y1="19" y2="21"/></svg>`,
    kitchen: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg>`,
    sofa: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"/><path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z"/><path d="M4 18v2"/><path d="M20 18v2"/><path d="M12 4v9"/></svg>`,
    dining: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>`,
    jacuzzi: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12h20"/><path d="M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6"/><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6"/><path d="M10 2c0 1.5-2 2-2 4"/><path d="M14 2c0 1.5-2 2-2 4"/></svg>`,
    crew: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    cooler: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="m17 5-5 5-5-5"/><path d="m17 19-5-5-5 5"/><line x1="2" x2="22" y1="12" y2="12"/><path d="m5 7 5 5-5 5"/><path d="m19 7-5 5 5 5"/></svg>`,
    motor: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v4"/><path d="m16.24 7.76 2.83-2.83"/><path d="M22 12h-4"/><path d="m16.24 16.24 2.83 2.83"/><path d="M12 22v-4"/><path d="m7.76 16.24-2.83 2.83"/><path d="M2 12h4"/><path d="m7.76 7.76-2.83-2.83"/></svg>`,
    fuel: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>`,
    tub: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-2 2L7 9"/><path d="M22 17v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"/><path d="M2 12h20v5H2z"/><path d="M7 19v2"/><path d="M17 19v2"/></svg>`,
    people: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    tag: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg>`,
  };

  iconHtml(key: string): SafeHtml {
    const svg = this.ICON_SVG[key] ?? this.ICON_SVG['crew'];
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  getIndex(id: string): number {
    return this.carouselState[id] ?? 0;
  }

  prev(id: string, total: number): void {
    const cur = this.carouselState[id] ?? 0;
    this.carouselState[id] = (cur - 1 + total) % total;
  }

  next(id: string, total: number): void {
    const cur = this.carouselState[id] ?? 0;
    this.carouselState[id] = (cur + 1) % total;
  }

  setIdx(id: string, index: number): void {
    this.carouselState[id] = index;
  }

  inquire(boatName?: string): void {
    const msg = boatName
      ? `Hi, I'm interested in chartering the ${boatName}. Could you send me more details?`
      : `Hi, I'd like information about your boat charter fleet. Could you help me?`;
    window.open(`https://wa.me/573013132423?text=${encodeURIComponent(msg)}`, '_blank');
  }

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private sanitizer: DomSanitizer,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Luxury Boats & Yachts in Cartagena | Mulata Concierge');
    this.metaService.removeTag("name='description'");
    this.metaService.addTag({
      name: 'description',
      content: 'Charter luxury boats and yachts in Cartagena. Enjoy full-service rentals, private islands, and unforgettable sailing experiences in the Caribbean.'
    });
    this.metaService.updateTag({ property: 'og:title', content: 'Luxury Boats & Yachts in Cartagena | Mulata Concierge' });
    this.metaService.updateTag({ property: 'og:description', content: 'Charter luxury boats and yachts in Cartagena. Enjoy full-service rentals, private islands, and unforgettable sailing experiences in the Caribbean.' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.mulataconcierge.com.co/boats' });
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
}
