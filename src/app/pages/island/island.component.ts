import { Component,OnInit} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-island',
  imports: [],
  templateUrl: './island.component.html',
  styleUrl: './island.component.css'
})
export class IslandComponent implements OnInit{

  constructor(private titleService: Title,private metaService: Meta){}
  
ngOnInit(): void {
  this.titleService.setTitle('Private Islands for Rent | Cartagena Luxury by Mulata Concierge');
  this.metaService.removeTag("name='description'");
  this.metaService.addTag({
    name: 'description',
    content: 'Escape to a private island near Cartagena. Rent full-service luxury islands in the Rosario Islands for the ultimate Caribbean experience.'
  });

  this.metaService.updateTag({ property: 'og:title', content: 'Private Islands for Rent | Cartagena Luxury by Mulata Concierge' });
  this.metaService.updateTag({ property: 'og:description', content: 'Escape to a private island near Cartagena. Rent full-service luxury islands in the Rosario Islands for the ultimate Caribbean experience.' });
  this.metaService.updateTag({ property: 'og:url', content: 'https://www.mulataconcierge.com.co/island' });
  
}


   enviarWhatsApp(destino:string) {
    const mensaje = `Hola, estoy interesado en la experiencia de ${destino}. ¿Podrías darme más información?`;
    const url = `https://wa.me/573013132423?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }
  
}
