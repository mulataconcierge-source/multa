import { Component,OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-villas',
  imports: [],
  templateUrl: './villas.component.html',
  styleUrl: './villas.component.css'
})
export class VillasComponent implements OnInit{

  constructor(private titleService: Title,private metaService: Meta){}

  ngOnInit(): void {
  this.titleService.setTitle('Luxury Villas in Cartagena | Private Stays by Mulata Concierge');
  this.metaService.removeTag("name='description'");
  this.metaService.addTag({
    name: 'description',
    content: 'Book stunning private villas in Cartagena. Enjoy colonial elegance, modern luxury, private chefs, and full concierge service during your stay.'
  });

  this.metaService.updateTag({ property: 'og:title', content: 'Luxury Villas in Cartagena | Private Stays by Mulata Concierge' });
  this.metaService.updateTag({ property: 'og:description', content: 'Book stunning private villas in Cartagena. Enjoy colonial elegance, modern luxury, private chefs, and full concierge service during your stay.' });
  this.metaService.updateTag({ property: 'og:url', content: 'https://www.mulataconcierge.com.co/private-villa' });
}

  enviarWhatsApp(destino:string) {
      const mensaje = `Hola, estoy interesado en la experiencia de ${destino}. ¿Podrías darme más información?`;
      const url = `https://wa.me/573013132423?text=${encodeURIComponent(mensaje)}`;
      window.open(url, '_blank');
  }


}
