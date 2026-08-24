import { Component, OnInit, AfterViewInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cooking-class',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cooking-class.component.html',
  styleUrl: './cooking-class.component.css'
})
export class CookingClassComponent implements OnInit, AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  readonly included = [
    'Professional Chef',
    'Welcome drink',
    'Introduction to Gastronomy',
    'Ingredients',
    'Preparation of appetizer, main course and dessert',
    'Beverage included with lunch',
  ];

  readonly details = [
    { label: 'Duration',       value: '3 hours' },
    { label: 'Suggested Time', value: '10:30 AM – 4 PM' },
    { label: 'Max Capacity',   value: '50 people' },
    { label: 'Min. Group',     value: '6 guests' },
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle('Cooking Class Cartagena — Caribbean Cuisine Experience | Mulata Concierge');
    this.metaService.removeTag("name='description'");
    this.metaService.addTag({
      name: 'description',
      content: 'Learn to cook authentic Caribbean dishes with a professional chef in Cartagena. Seafood, coconut rice, appetizers and dessert — hands-on and delicious. Curated by Mulata Concierge.'
    });
    this.metaService.updateTag({ property: 'og:title', content: 'Cooking Class Cartagena — Caribbean Cuisine Experience | Mulata Concierge' });
    this.metaService.updateTag({ property: 'og:description', content: 'A hands-on culinary experience guided by an expert chef. Learn to prepare Cartagena\'s most iconic dishes and take those flavors home with you.' });
    this.metaService.updateTag({ property: 'og:url', content: 'https://www.mulataconcierge.com.co/experiences/cooking-class' });
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

  book(): void {
    const msg = `Hi! I'm interested in the Cooking Class experience in Cartagena. Could you give me more details?`;
    window.open(`https://wa.me/573150173841?text=${encodeURIComponent(msg)}`, '_blank');
  }
}
