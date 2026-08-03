import { Component, OnInit, OnDestroy, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

interface Property {
  slug: string;
  name: string;
  neighborhood: string;
  images: string[];
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  beds: string[];
  amenities: string[];
}

@Component({
  selector: 'app-property',
  imports: [],
  templateUrl: './property.component.html',
  styleUrl: './property.component.css'
})
export class PropertyComponent implements OnInit, OnDestroy {

  galleryProp: Property | null = null;
  galleryIndex = 0;

  readonly properties: Property[] = [
    {
      slug: 'alejandria',
      name: 'Alejandria',
      neighborhood: 'Centro Histórico',
      images: ['/img/alejandria/1.jpg', '/img/alejandria/2.jpg', '/img/alejandria/3.jpg', '/img/alejandria/4.jpg', '/img/alejandria/5.jpg', '/img/alejandria/6.jpg'],
      maxGuests: 7, bedrooms: 3, bathrooms: 3,
      beds: ['3 King'],
      amenities: ['Private Pool at the rooftop', 'WiFi', 'Air Conditioning', 'Full Kitchen', 'Mayordomo 24h', 'Rooftop']
    },
    {
      slug: 'casaogetse',
      name: 'Casa O Getsemaní',
      neighborhood: 'Getsemaní',
      images: ['/img/casaogetse/1.avif', '/img/casaogetse/2.avif', '/img/casaogetse/3.avif', '/img/casaogetse/4.avif', '/img/casaogetse/5.avif', '/img/casaogetse/6.avif', '/img/casaogetse/7.avif', '/img/casaogetse/8.avif', '/img/casaogetse/9.avif', '/img/casaogetse/10.avif', '/img/casaogetse/11.avif'],
      maxGuests: 6, bedrooms: 3, bathrooms: 3,
      beds: ['1 King', '1 Queen', '2 Single'],
      amenities: ['Private Pool at the rooftop', 'WiFi', 'Air Conditioning', 'Full Kitchen', 'Mayordomo 24h', 'Rooftop', 'Housekeeper 8h']
    },
    {
      slug: 'palenque',
      name: 'Palenque',
      neighborhood: 'Centro Histórico',
      images: ['/img/palenque/1.jpg', '/img/palenque/2.jpg', '/img/palenque/3.jpg', '/img/palenque/4.jpg', '/img/palenque/5.jpg', '/img/palenque/6.jpg'],
      maxGuests: 11, bedrooms: 4, bathrooms: 4,
      beds: ['1 King', '2 Queen', '3 Single', '2 Sofa Bed'],
      amenities: ['Private Pool at the rooftop', 'WiFi', 'Air Conditioning', 'Full Kitchen', 'Mayordomo 24h', 'Rooftop', 'Housekeeper 8h']
    },
    {
      slug: 'casaocochera',
      name: 'Casa O Cochera',
      neighborhood: 'Centro Histórico',
      images: ['/img/casaocochera/1.avif', '/img/casaocochera/2.avif', '/img/casaocochera/3.avif', '/img/casaocochera/4.avif', '/img/casaocochera/5.avif', '/img/casaocochera/6.avif', '/img/casaocochera/7.avif', '/img/casaocochera/8.avif', '/img/casaocochera/9.avif', '/img/casaocochera/10.avif', '/img/casaocochera/11.avif', '/img/casaocochera/12.avif', '/img/casaocochera/13.avif', '/img/casaocochera/14.avif', '/img/casaocochera/15.avif', '/img/casaocochera/16.avif', '/img/casaocochera/17.avif', '/img/casaocochera/18.avif', '/img/casaocochera/19.avif', '/img/casaocochera/20.avif'],
      maxGuests: 8, bedrooms: 4, bathrooms: 7,
      beds: ['6 King'],
      amenities: ['Private Pool on the first floor and at the rooftop', 'WiFi', 'Air Conditioning', 'Full Kitchen', 'Mayordomo 24h', 'Rooftop', 'Housekeeper 8h']
    },
    {
      slug: 'catleya',
      name: 'Catleya',
      neighborhood: 'Centro Histórico',
      images: ['/img/catleya/1.jpg', '/img/catleya/2.jpg'],
      maxGuests: 12, bedrooms: 5, bathrooms: 5,
      beds: ['4 King', '2 Queen'],
      amenities: ['Private Pool at the first floor', 'WiFi', 'Air Conditioning', 'Full Kitchen', 'Mayordomo 24h', 'Housekeeper 8h']
    },
    {
      slug: 'vittoria',
      name: 'Vittoria',
      neighborhood: 'Centro Histórico',
      images: ['/img/vittoria/1.jpg', '/img/vittoria/2.jpg', '/img/vittoria/3.jpg', '/img/vittoria/4.jpg', '/img/vittoria/5.jpg', '/img/vittoria/6.jpg', '/img/vittoria/7.jpg', '/img/vittoria/8.jpg', '/img/vittoria/9.jpg', '/img/vittoria/10.jpg', '/img/vittoria/11.jpg', '/img/vittoria/12.jpg', '/img/vittoria/13.jpg', '/img/vittoria/14.jpg', '/img/vittoria/15.jpg', '/img/vittoria/16.jpg', '/img/vittoria/17.jpg', '/img/vittoria/18.jpg', '/img/vittoria/19.jpg'],
      maxGuests: 10, bedrooms: 5, bathrooms: 5,
      beds: ['4 King', '2 Queen'],
      amenities: ['Private Pool at the first floor', 'WiFi', 'Air Conditioning', 'Full Kitchen', 'Mayordomo 24h', 'Housekeeper 8h']
    },
    {
      slug: 'casaocarbonera',
      name: 'Casa O Carbonera',
      neighborhood: 'Centro Histórico',
      images: ['/img/casaocarbonera/1.avif', '/img/casaocarbonera/2.avif', '/img/casaocarbonera/3.avif', '/img/casaocarbonera/4.avif', '/img/casaocarbonera/5.avif', '/img/casaocarbonera/6.avif', '/img/casaocarbonera/7.avif', '/img/casaocarbonera/8.avif', '/img/casaocarbonera/9.avif', '/img/casaocarbonera/10.avif', '/img/casaocarbonera/11.avif', '/img/casaocarbonera/12.avif', '/img/casaocarbonera/13.avif', '/img/casaocarbonera/14.avif', '/img/casaocarbonera/15.avif', '/img/casaocarbonera/16.avif', '/img/casaocarbonera/17.avif', '/img/casaocarbonera/18.avif', '/img/casaocarbonera/19.avif', '/img/casaocarbonera/20.avif', '/img/casaocarbonera/21.avif'],
      maxGuests: 12, bedrooms: 5, bathrooms: 6,
      beds: ['5 King', '2 Queen'],
      amenities: ['Private Pool at the first floor', 'WiFi', 'Air Conditioning', 'Full Kitchen', 'Mayordomo 24h', 'Housekeeper 8h']
    },
    {
      slug: 'casaocurato',
      name: 'Casa O Curato',
      neighborhood: 'Centro Histórico',
      images: ['/img/casaocurato/1.avif', '/img/casaocurato/2.avif', '/img/casaocurato/3.avif', '/img/casaocurato/4.avif', '/img/casaocurato/5.avif', '/img/casaocurato/6.avif', '/img/casaocurato/7.avif', '/img/casaocurato/8.avif', '/img/casaocurato/9.avif', '/img/casaocurato/10.avif', '/img/casaocurato/11.avif', '/img/casaocurato/12.avif', '/img/casaocurato/13.avif', '/img/casaocurato/14.avif', '/img/casaocurato/15.avif', '/img/casaocurato/16.avif', '/img/casaocurato/17.avif', '/img/casaocurato/18.avif', '/img/casaocurato/19.avif', '/img/casaocurato/20.avif', '/img/casaocurato/21.avif', '/img/casaocurato/22.avif', '/img/casaocurato/23.avif', '/img/casaocurato/24.avif', '/img/casaocurato/25.avif', '/img/casaocurato/26.avif'],
      maxGuests: 12, bedrooms: 6, bathrooms: 7,
      beds: ['6 King'],
      amenities: ['Private Pool at the first floor', 'WiFi', 'Air Conditioning', 'Full Kitchen', 'Mayordomo 24h', 'Housekeeper 8h']
    },
    {
      slug: 'santagua',
      name: 'Santagua',
      neighborhood: 'Centro Histórico',
      images: ['/img/santagua/1.jpeg', '/img/santagua/2.jpeg', '/img/santagua/3.jpeg', '/img/santagua/4.jpeg', '/img/santagua/5.jpeg', '/img/santagua/6.jpeg', '/img/santagua/7.jpeg', '/img/santagua/8.jpeg', '/img/santagua/9.jpeg', '/img/santagua/10.jpeg', '/img/santagua/11.jpeg', '/img/santagua/12.jpeg', '/img/santagua/13.jpeg', '/img/santagua/14.jpeg', '/img/santagua/15.jpeg', '/img/santagua/16.jpeg', '/img/santagua/17.jpeg', '/img/santagua/18.jpeg', '/img/santagua/19.jpeg', '/img/santagua/20.jpeg', '/img/santagua/21.jpeg', '/img/santagua/22.jpeg', '/img/santagua/23.jpeg', '/img/santagua/24.jpeg', '/img/santagua/25.jpeg'],
      maxGuests: 12, bedrooms: 6, bathrooms: 7,
      beds: ['3 Queen', '6 Single'],
      amenities: ['Private Pool at the first floor', 'WiFi', 'Air Conditioning', 'Full Kitchen', 'Mayordomo 24h', 'Housekeeper 8h']
    },
    {
      slug: 'casalm',
      name: 'Casa LM',
      neighborhood: 'Centro Histórico',
      images: ['/img/casa_lm/1.jpg', '/img/casa_lm/2.jpg', '/img/casa_lm/3.jpg', '/img/casa_lm/4.jpg', '/img/casa_lm/5.jpg', '/img/casa_lm/6.jpg', '/img/casa_lm/7.jpg', '/img/casa_lm/8.jpg', '/img/casa_lm/9.jpg', '/img/casa_lm/10.jpg', '/img/casa_lm/11.jpg', '/img/casa_lm/12.jpg', '/img/casa_lm/13.jpg', '/img/casa_lm/14.jpg', '/img/casa_lm/15.jpg', '/img/casa_lm/16.jpg', '/img/casa_lm/17.jpg', '/img/casa_lm/18.jpg', '/img/casa_lm/19.jpg', '/img/casa_lm/20.jpg', '/img/casa_lm/21.jpg', '/img/casa_lm/22.jpg', '/img/casa_lm/23.jpg', '/img/casa_lm/24.jpg', '/img/casa_lm/25.jpg'],
      maxGuests: 16, bedrooms: 7, bathrooms: 8,
      beds: ['6 King', '2 Queen',],
      amenities: ['Private Pool at the first floor', 'WiFi', 'Air Conditioning', 'Full Kitchen', 'Rooftop with jacuzzi', 'American Breakfast included', 'Mayordomo 24h', 'Housekeeper 8h']
    },
    {
      slug: 'casao7infantes',
      name: 'Casa O 7 Infantes',
      neighborhood: 'Centro Histórico',
      images: ['/img/casao7infantes/1.avif', '/img/casao7infantes/2.avif', '/img/casao7infantes/3.avif', '/img/casao7infantes/4.avif', '/img/casao7infantes/5.avif', '/img/casao7infantes/6.avif', '/img/casao7infantes/7.avif', '/img/casao7infantes/8.avif', '/img/casao7infantes/9.avif', '/img/casao7infantes/10.avif', '/img/casao7infantes/11.avif', '/img/casao7infantes/12.avif', '/img/casao7infantes/13.avif', '/img/casao7infantes/14.avif', '/img/casao7infantes/15.avif', '/img/casao7infantes/16.avif', '/img/casao7infantes/17.avif', '/img/casao7infantes/18.avif', '/img/casao7infantes/19.avif', '/img/casao7infantes/20.avif'],
      maxGuests: 16, bedrooms: 7, bathrooms: 10,
      beds: ['6 King', '2 Queen',],
      amenities: ['Private Pool at the first floor', 'WiFi', 'Air Conditioning', 'Full Kitchen', 'Rooftop with jacuzzi', 'American Breakfast included', 'Mayordomo 24h', 'Housekeeper 8h']
    },
    {
      slug: 'estrella',
      name: 'Estrella De San Pedro',
      neighborhood: 'Centro Histórico',
      images: ['/img/estrella/1.webp', '/img/estrella/2.webp', '/img/estrella/3.jpeg', '/img/estrella/4.webp', '/img/estrella/5.jpeg'],
      maxGuests: 14, bedrooms: 7, bathrooms: 7,
      beds: ['1 King', '1 Queen', '5 Twin'],
      amenities: ['Private Pool', 'WiFi', 'Air Conditioning', 'Full Kitchen', 'Rooftop', 'Mayordomo 24h', 'Housekeeper 8h']
    },
    {
      slug: 'deindias',
      name: 'De Indias',
      neighborhood: 'Centro Histórico',
      images: ['/img/deindias/1.jpg', '/img/deindias/2.jpg', '/img/deindias/3.jpg', '/img/deindias/4.jpg', '/img/deindias/5.jpg', '/img/deindias/6.jpg', '/img/deindias/7.jpg', '/img/deindias/8.jpg', '/img/deindias/9.jpg', '/img/deindias/10.jpg', '/img/deindias/11.jpg', '/img/deindias/12.jpg', '/img/deindias/13.jpg', '/img/deindias/14.jpg', '/img/deindias/15.jpg', '/img/deindias/16.jpg', '/img/deindias/17.jpg', '/img/deindias/18.jpg', '/img/deindias/19.jpg', '/img/deindias/20.jpg', '/img/deindias/21.jpg', '/img/deindias/22.jpg', '/img/deindias/23.jpg', '/img/deindias/24.jpg', '/img/deindias/25.jpg', '/img/deindias/26.jpg', '/img/deindias/27.jpg', '/img/deindias/28.jpg', '/img/deindias/29.jpeg', '/img/deindias/30.jpeg', '/img/deindias/31.jpeg', '/img/deindias/32.jpeg'],
      maxGuests: 20, bedrooms: 10, bathrooms: 12,
      beds: ['10 King'],
      amenities: ['Private Pool at the first floor and at the rooftop', 'WiFi', 'Air Conditioning', 'Full Kitchen', 'Rooftop', 'Mayordomo 24h', 'Housekeeper 8h']
    }
  ];

  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Private Properties in Cartagena | Mulata Concierge');
    this.metaService.removeTag("name='description'");
    this.metaService.addTag({
      name: 'description',
      content: 'Browse 15 handpicked vacation properties in Cartagena — from boutique suites in the Old City to oceanfront penthouses in Bocagrande. Curated by Mulata Concierge.'
    });
    this.metaService.updateTag({ property: 'og:title', content: 'Private Properties in Cartagena | Mulata Concierge' });
    this.metaService.updateTag({ property: 'og:description', content: 'Browse 15 handpicked vacation properties in Cartagena. Curated by Mulata Concierge.' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.mulataconcierge.com.co/properties' });
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (!this.galleryProp) return;
    if (event.key === 'Escape') this.closeGallery();
    if (event.key === 'ArrowRight') this.nextImage();
    if (event.key === 'ArrowLeft') this.prevImage();
  }

  openGallery(prop: Property, event: Event): void {
    event.stopPropagation();
    this.galleryProp = prop;
    this.galleryIndex = 0;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = 'hidden';
    }
  }

  closeGallery(): void {
    this.galleryProp = null;
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }

  nextImage(): void {
    if (this.galleryProp) {
      this.galleryIndex = (this.galleryIndex + 1) % this.galleryProp.images.length;
    }
  }

  prevImage(): void {
    if (this.galleryProp) {
      this.galleryIndex = (this.galleryIndex - 1 + this.galleryProp.images.length) % this.galleryProp.images.length;
    }
  }

  inquire(propertyName: string): void {
    const msg = `Hi Margui! I'm interested in the property "${propertyName}". Could you share more details and availability?`;
    window.open(`https://wa.me/573013132423?text=${encodeURIComponent(msg)}`, '_blank');
  }
}
