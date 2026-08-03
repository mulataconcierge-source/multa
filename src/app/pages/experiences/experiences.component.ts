import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-experiences',
  imports: [RouterLink],
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

  openWhatsApp(): void {
    const msg = `Hi Margui! I'd love to plan an experience in Cartagena. Could you help me?`;
    window.open(`https://wa.me/573013132423?text=${encodeURIComponent(msg)}`, '_blank');
  }

}
