import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})


export class ExperiencesComponent implements OnInit {
  
 constructor(private titleService: Title,private metaService: Meta){}
  
 ngOnInit(): void {
  this.titleService.setTitle('Exclusive Experiences in Cartagena | Mulata Concierge');
  this.metaService.removeTag("name='description'");
  this.metaService.addTag({
    name: 'description',
    content: 'Live unforgettable experiences in Cartagena with Mulata Concierge. From VIP nightlife to private chefs and wellness retreats—tailored for you.'
  });

  this.metaService.updateTag({ property: 'og:title', content: 'Exclusive Experiences in Cartagena | Mulata Concierge' });
  this.metaService.updateTag({ property: 'og:description', content: 'Live unforgettable experiences in Cartagena with Mulata Concierge. From VIP nightlife to private chefs and wellness retreats—tailored for you.' });
  this.metaService.updateTag({ property: 'og:url', content: 'https://www.mulataconcierge.com.co/experiences' });
  
}

  enviarWhatsApp(destino:string) {
      const mensaje = `Hola, estoy interesado en la experiencia de ${destino}. ¿Podrías darme más información?`;
      const url = `https://wa.me/573013132423?text=${encodeURIComponent(mensaje)}`;
      window.open(url, '_blank');
  }


}
