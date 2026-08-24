import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit{

constructor(private titleService: Title,private metaService: Meta){}
  
 ngOnInit(): void {
  this.titleService.setTitle('Luxury Concierge Services in Cartagena | Mulata Concierge');
  this.metaService.removeTag("name='description'");
  this.metaService.addTag({
    name: 'description',
    content: 'Enjoy personalized concierge services in Cartagena. We take care of reservations, private chefs, events, transportation, and premium hospitality.'
  });

  this.metaService.updateTag({ property: 'og:title', content: 'Luxury Concierge Services in Cartagena | Mulata Concierge' });
  this.metaService.updateTag({ property: 'og:description', content: 'Enjoy personalized concierge services in Cartagena. We take care of reservations, private chefs, events, transportation, and premium hospitality.' });
  this.metaService.updateTag({ property: 'og:url', content: 'https://mulataconcierge.com.co/services' });
  
}


}
