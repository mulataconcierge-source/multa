import { Component, AfterViewInit, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryModule, Gallery, GalleryItem, ImageItem } from 'ng-gallery';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-boats',
  standalone: true,
  imports: [CommonModule, GalleryModule],
  templateUrl: './boats.component.html',
  styleUrls: ['./boats.component.css']
})
export class BoatsComponent implements AfterViewInit,OnInit {
  boats = [
    {
      id: 'marlet',
      name: 'MARLET (82 Fts)',
      capacity: 20,
      price: '1 - 15 people: 21´000.000',
      extra: 'Price for each extra person $200.000',
      featuresLeft: ['bed:4 Room', 'bathroom:3 bathrooms', 'flatware:1 full Kitchen', 'chair:1 Living room', 'table_restaurant:1 Dinning room', 'bath_private:1 Jacuzzi'],
      featuresRight: ['anchor:Tripulation', 'ac_unit:Cooler + Ice', 'mode_fan:2 Motors', 'local_gas_station:Fuel', 'bathtub:1 Tub'],
      images: ['/img/marlet/1.jpg', '/img/marlet/2.jpg', '/img/marlet/3.jpg', '/img/marlet/4.jpg', '/img/marlet/5.jpg']
    },
    {
      id: 'seeland',
      name: 'SEE LAND (70 Fts)',
      capacity: 35,
      price: '1 - 15 people: 15´500.000',
      extra: 'Price for each extra person $200.000',
      featuresLeft: ['bed:4 Room', 'bathroom:4 bathrooms', 'flatware:1 full Kitchen', 'chair:1 Living room'],
      featuresRight: ['anchor:Tripulation', 'ac_unit:Cooler + Ice', 'mode_fan:2 Motors', 'local_gas_station:Fuel'],
      images: ['/img/sea_land/1.jpg', '/img/sea_land/2.jpg', '/img/sea_land/3.jpg', '/img/sea_land/4.jpg', '/img/sea_land/5.jpg']
    },
    {
      id: 'skyland',
      name: 'SKY LAND (62 Fts)',
      capacity: 30,
      price: '1 - 15 people: 14´000.000',
      extra: 'Price for each extra person $150.000',
      featuresLeft: ['bed:4 Room', 'bathroom:3 bathrooms', 'flatware:1 full Kitchen', 'chair:1 Living room', 'table_restaurant:1 Dinning room'],
      featuresRight: ['anchor:Tripulation', 'ac_unit:Cooler + Ice', 'mode_fan:2 Motors', 'local_gas_station:Fuel'],
      images: ['/img/sky_land/1.jpeg', '/img/sky_land/2.jpeg', '/img/sky_land/3.jpeg','/img/sky_land/4.jpeg','/img/sky_land/5.jpeg','/img/sky_land/6.jpeg']
    },
    {
      id: 'freeland',
      name: 'FREE LAND (55 Fts)',
      capacity: 20,
      price: '1 - 15 people: 12´000.000',
      extra: 'Price for each extra person $150.000',
      featuresLeft: ['bed:3 Room', 'bathroom:2 bathrooms', 'flatware:1 full Kitchen', 'chair:1 Living room', 'table_restaurant:1 Dinning room'],
      featuresRight: ['anchor:Tripulation', 'ac_unit:Cooler + Ice', 'mode_fan:2 Motors', 'local_gas_station:Fuel'],
      images: ['/img/free_land/1.jpg', '/img/free_land/2.jpg', '/img/free_land/3.jpg']
    },
    {
      id: 'valhalla',
      name: 'VALHALLA (55 Fts)',
      capacity: 30,
      price: '1 - 15 people: 14´000.000',
      extra: 'Price for each extra person $200.000',
      featuresLeft: ['bed:4 Room', 'bathroom:4 bathrooms', 'flatware:1 full Kitchen', 'chair:1 Living room', 'table_restaurant:1 Dinning room'],
      featuresRight: ['anchor:Tripulation', 'ac_unit:Cooler + Ice', 'mode_fan:2 Motors', 'local_gas_station:Fuel'],
      images: ['/img/vahalla/1.jpg', '/img/vahalla/2.jpg', '/img/vahalla/3.jpg', '/img/vahalla/4.jpg', '/img/vahalla/5.jpg']
    },
    {
      id: 'hope',
      name: 'HOPE (47 Fts)',
      capacity: 30,
      price: '1 - 15 people: 12´500.000',
      extra: 'Price for each extra person $200.000',
      featuresLeft: ['bed:4 Room', 'bathroom:4 bathrooms', 'flatware:1 full Kitchen', 'chair:1 Living room', 'table_restaurant:1 Dinning room'],
      featuresRight: ['anchor:Tripulation', 'ac_unit:Cooler + Ice', 'mode_fan:2 Motors', 'local_gas_station:Fuel'],
      images: ['/img/hope/1.jpg', '/img/hope/2.jpg', '/img/hope/3.jpg', '/img/hope/4.jpg', '/img/hope/5.jpg']
    },
    {
      id: 'odysea',
      name: 'ODYSEA (43 Fts)',
      capacity: 20,
      price: '1 - 15 people: 11´500.000',
      extra: 'Price for each extra person $200.000',
      featuresLeft: ['bed:3 Room', 'bathroom:2 bathrooms', 'flatware:1 full Kitchen', 'chair:1 Living room', 'table_restaurant:1 Dinning room'],
      featuresRight: ['anchor:Tripulation', 'ac_unit:Cooler + Ice', 'mode_fan:2 Motors', 'local_gas_station:Fuel'],
      images: ['/img/odysea/1.jpg', '/img/odysea/2.jpg', '/img/odysea/3.jpg', '/img/odysea/4.jpg', '/img/odysea/5.jpg']
    },
    {
      id: 'chicote',
      name: 'CHICOTE (44 Fts)',
      capacity: 20,
      price: '1 - 15 people: 7´500.000',
      extra: 'Price for each extra person $200.000',
      featuresLeft: ['bed:4 Room', 'bathroom:4 bathrooms', 'flatware:1 full Kitchen', 'chair:1 Living room', 'table_restaurant:1 Dinning room'],
      featuresRight: ['anchor:Tripulation', 'ac_unit:Cooler + Ice', 'mode_fan:2 Motors', 'local_gas_station:Fuel'],
      images: ['/img/chicote/1.jpg', '/img/chicote/2.jpg', '/img/chicote/3.jpg', '/img/chicote/4.jpg', '/img/chicote/5.jpg']
    },
    {
      id: 'xman',
      name: 'X MAN (40 Fts)',
      capacity: 18,
      price: '1 - 15 people: 7´000.000',
      extra: 'Price for each extra person $200.000',
      featuresLeft: ['bed:4 Room', 'bathroom:4 bathrooms', 'flatware:1 full Kitchen', 'chair:1 Living room', 'table_restaurant:1 Dinning room'],
      featuresRight: ['anchor:Tripulation', 'ac_unit:Cooler + Ice', 'mode_fan:2 Motors', 'local_gas_station:Fuel'],
      images: ['/img/x-man/1.jpg', '/img/x-man/2.jpg', '/img/x-man/3.jpg', '/img/x-man/4.jpg', '/img/x-man/5.jpg']
    },
    {
      id: 'warrior',
      name: 'SEA WARRIOR (55 Fts)',
      capacity: 40,
      price: '14´000.000',
      extra: 'Dj: $50.000',
      featuresLeft: ['bed:4 Room', 'bathroom:4 bathrooms', 'flatware:1 full Kitchen', 'chair:1 Living room', 'table_restaurant:1 Dinning room'],
      featuresRight: ['anchor:Tripulation', 'ac_unit:Cooler + Ice', 'mode_fan:2 Motors', 'local_gas_station:Fuel'],
      images: ['/img/warrior/1.jpeg', '/img/warrior/2.jpeg', '/img/warrior/3.jpeg', '/img/warrior/4.jpeg', '/img/warrior/5.jpeg']
    }
  ];

  constructor(private gallery: Gallery, private titleService: Title,private metaService: Meta) {}

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
    this.boats.forEach(boat => {
      const items: GalleryItem[] = boat.images.map(img => new ImageItem({ src: img, thumb: img }));
      this.gallery.ref(`boats-${boat.id}`).load(items);
    });
  }

  openGallery(boatId: string, index: number) {
    this.gallery.ref(`boats-${boatId}`).set(index);
  }

  enviarWhatsApp(destino:string) {
      const mensaje = `Hola, estoy interesado en la experiencia de ${destino}. ¿Podrías darme más información?`;
      const url = `https://wa.me/573013132423?text=${encodeURIComponent(mensaje)}`;
      window.open(url, '_blank');
  }
}
