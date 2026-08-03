import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { BLOG_POSTS, BlogPost } from './blog.data';

@Component({
  selector: 'app-travel-guide',
  imports: [RouterLink],
  templateUrl: './travel-guide.component.html',
  styleUrl: './travel-guide.component.css'
})
export class TravelGuideComponent implements OnInit {
  posts: BlogPost[] = BLOG_POSTS;
  categories: string[] = [];
  selectedCategory = 'All';
  filteredPosts: BlogPost[] = BLOG_POSTS;

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Luxury Travel Blog | Cartagena & Colombia Guide | Mulata Concierge');
    this.meta.removeTag("name='description'");
    this.meta.addTag({
      name: 'description',
      content: 'Insider travel guides for Cartagena and Colombia — bachelor parties, honeymoons, island trips, restaurants, and more. Written by Mulata, your local concierge.'
    });

    const cats = [...new Set(BLOG_POSTS.map(p => p.category))];
    this.categories = ['All', ...cats];
  }

  filterByCategory(cat: string) {
    this.selectedCategory = cat;
    this.filteredPosts = cat === 'All'
      ? BLOG_POSTS
      : BLOG_POSTS.filter(p => p.category === cat);
  }

  formatDate(iso: string): string {
    return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
}
