import { Component, OnInit, AfterViewInit, OnDestroy, HostListener, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-island-experience',
  imports: [RouterLink],
  templateUrl: './island-experience.component.html',
  styleUrl: './island-experience.component.css'
})
export class IslandExperienceComponent implements OnInit, AfterViewInit, OnDestroy {

  showStickyBar = false;
  activeFaq: number | null = null;

  readonly experiences = [
    {
      slug: 'private-boat',
      label: 'Private Boat & Yacht',
      title: 'Private Boat & Yacht',
      desc: 'Your own captain, your own schedule. We charter the right boat or yacht for your group — fully stocked, no strangers, no compromises.',
      img: '/img/island-experience/bora-bora-drone-1.avif',
      cta: 'Charter a Private Boat',
    },
    {
      slug: 'rosario-islands',
      label: 'Rosario Islands',
      title: 'Day Pass — Rosario Islands',
      desc: 'Colombia\'s most protected reef system. Crystal water, white sand, and a Caribbean calm that makes Cartagena feel a world away.',
      img: '/img/island-experience/bora-bora-drone-2.avif',
      cta: 'Plan a Rosario Day',
    },
  ];

  readonly timeline = [
    { time: '8:30 AM', title: 'Hotel Pickup', body: 'Your captain and concierge meet you at the marina. Cold towels, a quick briefing, and you\'re off — no waiting, no confusion.', img: '/img/island-experience/bora-bora-6.avif' },
    { time: '9:30 AM', title: 'Boat Departs', body: 'Cartagena\'s skyline fades behind you. The Caribbean opens up. Someone hands you the first drink of the day.', img: '/img/island-experience/bora-bora-drone-3.avif' },
    { time: '10:30 AM', title: 'First Stop', body: 'A quiet cove, turquoise water, no crowds. Swim, snorkel, or simply float. This is the moment you\'ve been waiting for.', img: '/img/island-experience/pao-pao-6.avif' },
    { time: '12:30 PM', title: 'Beach Club Arrival', body: 'Reserved loungers, cold cocktails, the Caribbean soundtrack. You didn\'t plan any of this — we did. That\'s the point.', img: '/img/island-experience/bora-bora-2.avif' },
    { time: '1:30 PM', title: 'Golden Hour', body: 'The light turns amber. The music slows. You\'re anchored offshore, salt air, cocktail in hand, watching the sun disappear into the sea.', img: '/img/island-experience/bora-bora-4.avif' },
    { time: '3:00 PM', title: 'Back to Cartagena', body: 'Arriving by 4:30 PM, The city glows on the horizon. You\'re tired in the best way — the kind that only perfect days create.', img: '/img/island-experience/bora-bora-drone-4.avif' },
  ];

  readonly gallery = [
    '/img/island-experience/bora-bora-drone-1.avif',
    '/img/island-experience/bora-bora-1.avif',
    '/img/island-experience/pao-pao-2.avif',
    '/img/island-experience/bora-bora-2.avif',
    '/img/island-experience/bora-bora-drone-2.avif',
    '/img/island-experience/bora-bora-4.avif',
    '/img/island-experience/bora-bora-5.avif',
    '/img/island-experience/pao-pao-4.avif',
    '/img/island-experience/bora-bora-6.avif',
    '/img/island-experience/pao-pao-5.avif',
    '/img/island-experience/pao-pao-6.avif',
    '/img/island-experience/bora-bora-3.avif',
    '/img/island-experience/bora-bora-drone-3.avif',
    '/img/island-experience/bora-bora-drone-4.avif',
    '/img/island-experience/pao-pao-1.avif',
  ];

  readonly faqs = [
    {
      q: 'What is the best beach club in Cartagena?',
      a: 'It depends entirely on your vibe — and that\'s exactly why we ask before recommending. Here\'s a quick breakdown:\n\n🌊 Party & energy: Bora Bora and Pao Pao are the liveliest — music, dancing, crowds, and that electric Caribbean atmosphere. Perfect for bachelor/bachelorette groups or anyone who wants to feel the full Cartagena party energy.\n\n☀️ Chill & social: Sabai and Bona vida strike the balance — great music and beautiful people, without the overwhelming crowd. Best for friend groups who want a good time but also want to actually relax.\n\n🌿 Intimate & local: Pa\' ue and Atolon have a more relaxed, local character — fewer tourists, more authentic, ideal for couples or smaller groups looking for something off the beaten path.\n\n🍾 Upscale & elegant: Capri and Eteka lean more boutique and refined — better for those who want comfort, attentive service, and a more curated atmosphere over pure party energy.\n\nWe\'ll match you to the right club based on your group, the day of the week, and what you\'re after. That local knowledge is half the value of booking with us.'
    },
    {
      q: 'What are the best islands near Cartagena?',
      a: 'The Rosario Islands (Islas del Rosario) are the crown jewel — a national park protecting one of the Caribbean\'s most vibrant coral reefs, with crystal-clear water and untouched beaches.'
    },
    {
      q: 'Is a private island tour worth it in Cartagena?',
      a: 'Without question. A private boat gives you your own schedule, your own stops, and zero strangers. You choose when to leave, how long to stay, and what\'s stocked on board. It\'s the difference between a tour and your day — and the price difference is smaller than most people expect.'
    },
    {
      q: 'What should I bring to an island day in Cartagena?',
      a: 'Reef-safe sunscreen, cash in pesos for extras, a light cover-up, comfortable sandals, and a camera. We handle everything else — logistics, snacks, drinks, local access, and whatever surprises you didn\'t know you needed.'
    },
    {
      q: 'Are island experiences completely private?',
      a: 'They can be. We offer fully private boat days for couples, families, and groups. If you\'d prefer a shared setting, we can also recommend beach clubs with a genuinely intimate feel even during peak season — places most tourists never find on their own.'
    },
    {
      q: 'Can you organize bachelor or bachelorette parties on the islands?',
      a: 'It\'s one of our specialties. We\'ve organized hundreds of them. Private boats with open bars, VIP beach club reservations, live music, themed setups, Cholon floater parties, and sunset celebrations. Tell us your group size and date — we\'ll design exactly the day you\'ve been imagining.'
    },
    {
      q: 'Can you customize the entire island itinerary?',
      a: 'Everything we do is customized. There is no standard package. We build each experience around your group size, your dates, your preferences, and your pace. That\'s what concierge means — and it\'s why people come back.'
    },
    {
      q: 'Do you organize honeymoon and proposal island experiences?',
      a: 'Yes — and they\'re some of our most personal and meaningful days. From private sunrise sails to floating breakfasts at anchor, champagne at sea, and sunset proposals on the water. If you\'re planning something special, speak with us and we\'ll make it unforgettable.'
    },
  ];

  readonly testimonials = [
    {
      name: 'Sarah & James',
      origin: 'New York, USA',
      text: 'We booked a private boat for our honeymoon and Margui organized everything perfectly. The beach club, the champagne, the captain — it was the most beautiful day of our entire trip. Not a single thing to figure out ourselves.',
      role: 'Honeymoon Couple',
    },
    {
      name: 'Marcus G.',
      origin: 'Miami, USA',
      text: 'I organized a bachelor party for 14 guys and had no idea where to start. Mulata took care of everything — the boat, the bar, Cholon, the whole day. It was legendary. Every single one of us said it was the best day of the trip.',
      role: 'Bachelor Group · 14 guests',
    },
    {
      name: 'Camille & Laurent',
      origin: 'Paris, France',
      text: 'Margui recommended Sabai on a Tuesday — she said the weekend crowds ruin the vibe. She was right. We had the most beautiful, calm, perfect beach day. The kind that makes you forget you were ever stressed about anything.',
      role: 'Couples Trip',
    },
  ];

  private observer: IntersectionObserver | null = null;

  constructor(
    private meta: Meta,
    private title: Title,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    this.title.setTitle('Cartagena Island Experiences — Beach Clubs, Rosario Islands & Private Boats | Mulata');
    this.meta.updateTag({ name: 'description', content: 'Discover Cartagena\'s most beautiful islands with Mulata Concierge. Private boat days, luxury beach clubs (Bora Bora, Sabai, Pao Pao), Rosario Islands day trips, and curated island experiences for couples, honeymoons, bachelor parties, and groups.' });
    this.meta.updateTag({ property: 'og:title', content: 'Cartagena Island Experiences — Mulata Concierge' });
    this.meta.updateTag({ property: 'og:description', content: 'Private island days, luxury beach clubs, and curated Caribbean experiences in Cartagena. Rosario Islands, Cholon, Bora Bora and beyond.' });

  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initScrollAnimations();
    }
  }

  @HostListener('window:scroll')
  onScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.showStickyBar = window.scrollY > window.innerHeight * 0.75;
    }
  }

  toggleFaq(i: number) {
    this.activeFaq = this.activeFaq === i ? null : i;
  }

  inquire(context = '') {
    const msg = context
      ? `Hi Margui! I'd love to organize an island experience in Cartagena: ${context}`
      : `Hi Margui! I'd love to plan an island day in Cartagena.`;
    if (isPlatformBrowser(this.platformId)) {
      window.open(`https://wa.me/573013132423?text=${encodeURIComponent(msg)}`, '_blank');
    }
  }

  private initScrollAnimations() {
    this.observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.fade-up, .fade-left, .fade-right').forEach(el => this.observer!.observe(el));
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
