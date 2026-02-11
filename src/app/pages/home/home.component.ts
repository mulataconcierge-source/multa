import { CommonModule } from '@angular/common';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  imports:[ CommonModule,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  contactForm: FormGroup;

  constructor(private fb:FormBuilder, private titleService: Title,private metaService: Meta){
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  this.titleService.setTitle('Welcome to Mulata Concierge | Luxury Travel in Cartagena');
  this.metaService.removeTag("name='description'");
  this.metaService.addTag({
    name: 'description',
    content: 'Discover Cartagena with premium concierge services, exclusive rentals, private chefs, yachts, and unforgettable curated experiences.'
  });

  this.metaService.updateTag({ property: 'og:title', content: 'Welcome to Mulata Concierge | Luxury Travel in Cartagena' });
  this.metaService.updateTag({ property: 'og:description', content: 'Discover Cartagena with premium concierge services, exclusive rentals, private chefs, yachts, and unforgettable curated experiences.' });
  this.metaService.updateTag({ property: 'og:url', content: 'https://www.mulataconcierge.com.co/home' });
  
}



  onSubmit() {
    console.log(this.contactForm.value);
  }

}
