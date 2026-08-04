import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { BLOG_POSTS, BlogPost, getPostBySlug } from '../travel-guide/blog.data';

@Component({
  selector: 'app-blog-post',
  imports: [RouterLink],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent implements OnInit {
  post: BlogPost | undefined;
  relatedPosts: BlogPost[] = [];
  notFound = false;

  constructor(
    private route: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    // Each post is its own concrete route carrying `data.slug`, so the build can
    // enumerate and prerender them. The paramMap fallback keeps the component
    // working if it is ever mounted from a parameterised route again.
    this.route.data.subscribe(data => {
      const slug = (data['slug'] as string) ?? this.route.snapshot.paramMap.get('slug') ?? '';
      this.post = getPostBySlug(slug);

      if (!this.post) {
        this.notFound = true;
        return;
      }

      this.titleService.setTitle(this.post.seoTitle);
      this.metaService.removeTag("name='description'");
      this.metaService.addTag({ name: 'description', content: this.post.seoDescription });
      this.metaService.addTag({ name: 'keywords', content: this.post.tags.join(', ') });

      this.relatedPosts = BLOG_POSTS
        .filter(p => p.slug !== slug && p.category === this.post!.category)
        .slice(0, 2);

      if (this.relatedPosts.length < 2) {
        const others = BLOG_POSTS.filter(p => p.slug !== slug && !this.relatedPosts.find(r => r.slug === p.slug));
        this.relatedPosts = [...this.relatedPosts, ...others].slice(0, 2);
      }
    });
  }

  formatDate(iso: string): string {
    return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }
}
