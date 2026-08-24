import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit {
  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit(): void {
    this.titleService.setTitle('Page Not Found | Mulata Concierge');
    this.metaService.removeTag("name='description'");
    this.metaService.addTag({ name: 'description', content: 'This page could not be found. Explore Mulata Concierge experiences, properties and boats in Cartagena, Colombia.' });
    // Keep dead URLs out of the index.
    this.metaService.updateTag({ name: 'robots', content: 'noindex, follow' });
  }

  openWhatsApp(): void {
    const msg = `Hi Margui! I was looking at the Mulata site and couldn't find the page I wanted. Could you help me?`;
    window.open(`https://wa.me/573150173841?text=${encodeURIComponent(msg)}`, '_blank');
  }
}
