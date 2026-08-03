export interface BlogSection {
  type: 'p' | 'h2' | 'h3' | 'ul' | 'highlight' | 'tip';
  text?: string;
  items?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  publishedAt: string;
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  sections: BlogSection[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: '10-things-to-do-cartagena',
    title: '10 Must-Do Experiences in Cartagena, Colombia',
    excerpt: 'From sailing to the Rosario Islands to wandering the UNESCO-listed Old City at sunset — here are the experiences that make Cartagena unforgettable.',
    image: '/img/collague_1.jpg',
    category: 'Cartagena Guide',
    readTime: '7 min read',
    publishedAt: '2025-04-10',
    tags: ['cartagena', 'experiences', 'travel guide', 'qué hacer en cartagena'],
    seoTitle: '10 Must-Do Experiences in Cartagena, Colombia | Mulata Concierge',
    seoDescription: 'Discover the top 10 things to do in Cartagena, Colombia. From private island trips to local food tours — your ultimate insider guide from Mulata Concierge.',
    sections: [
      { type: 'p', text: 'Cartagena is one of those rare cities that gets under your skin. The salt air, the painted walls, the cumbia drifting from a doorway at noon — everything conspires to make you want to stay. But between the Instagram highlights and the generic tour packages, it\'s easy to miss what actually makes Cartagena extraordinary.' },
      { type: 'p', text: 'As a concierge who\'s spent 11 years in this city, I\'ve seen thousands of travelers arrive — and I know exactly what separates a good trip from one they\'ll talk about for years. Here are the 10 experiences I recommend to every single person who asks.' },
      { type: 'h2', text: '1. Sail to the Rosario Islands on a Private Catamaran' },
      { type: 'p', text: 'The Rosario Islands are a national park 45 minutes by boat from Cartagena. Turquoise water, coral reefs, no cars — just the Caribbean as nature intended. Skip the crowded tourist boats and charter a private catamaran. You\'ll have the boat to yourself, a cooler full of drinks, and the freedom to anchor wherever the water looks perfect.' },
      { type: 'h2', text: '2. Walk the Walls of the Old City at Golden Hour' },
      { type: 'p', text: 'The murallas — Cartagena\'s massive 16th-century stone walls — are a UNESCO World Heritage Site. Walk them at sunset and you\'ll understand why. The light turns everything amber, the Caribbean glitters below, and the city\'s colonial towers glow like a painting. It takes about 45 minutes to do the full circuit.' },
      { type: 'h2', text: '3. Have Lunch at La Cevichería (and Know the Right Time to Go)' },
      { type: 'p', text: 'La Cevichería is legendary — Anthony Bourdain came here, and the lines haven\'t stopped since. Go for lunch, not dinner, and arrive when they open at noon. The octopus ceviche and the shrimp tostadas are non-negotiable. If you\'d rather skip the wait, I know a reservations trick.' },
      { type: 'h2', text: '4. Spend a Day at Barú Beach' },
      { type: 'p', text: 'Barú is the peninsula south of Cartagena with some of the most stunning beaches in the Caribbean. The water is shallow and impossibly clear. Go on a weekday, hire a private driver, and bring your own cooler. The beach vendors are friendly but persistent — learning "no gracias" will serve you well.' },
      { type: 'h2', text: '5. Take a Chiva Bus at Night' },
      { type: 'p', text: 'The chiva is a wooden open-air bus that turns into a rolling party after dark. Salsa music, aguardiente passed in plastic cups, dancing in the aisles through the streets of Cartagena. It\'s gloriously chaotic and completely unforgettable. Book a private chiva for groups — it\'s worth every peso.' },
      { type: 'h2', text: '6. Visit the Totumo Mud Volcano' },
      { type: 'p', text: 'An hour from Cartagena, a small volcano filled with mineral mud awaits. You climb in, float on the warm mud (it\'s dense enough to hold you up), get rubbed down by the local women who work there, and then wade into the lake to rinse off. Ridiculous, unique, wonderful.' },
      { type: 'h2', text: '7. Take a Cooking Class in the Getsemaní Neighborhood' },
      { type: 'p', text: 'Getsemaní used to be the city\'s forgotten neighborhood. Now it\'s its beating heart — street art, craft cocktail bars, local kitchens. A cooking class here is two hours of learning to make patacones, arepas de huevo, and aji sauce from scratch. The best ones end with lunch and a rum punch.' },
      { type: 'h2', text: '8. Watch the Sunset from Café del Mar' },
      { type: 'p', text: 'Perched on top of the Old City walls, Café del Mar is one of those bars where the location does all the work. Order a mojito, take the corner table facing west, and don\'t touch your phone for 20 minutes. The sunset over the Caribbean from there is something else.' },
      { type: 'h2', text: '9. Snorkel at Playa Blanca' },
      { type: 'p', text: 'The clearest water near Cartagena is at Playa Blanca on the Barú peninsula. Rent snorkel gear from the beach vendors (negotiate the price) and you\'ll find parrotfish, sea turtles, and coral within 50 meters of shore. Go early — by noon, the day-trippers arrive and the beach fills up.' },
      { type: 'h2', text: '10. Experience Cartagena\'s Nightlife at Alquímico' },
      { type: 'p', text: 'Cartagena\'s cocktail scene has exploded in recent years, and Alquímico is its crown jewel. Three floors in a colonial mansion, each with a different vibe — rooftop bar, art gallery, dance floor. Go after 10pm on a Thursday or Friday, dress well, and pace yourself. The cocktails are serious business.' },
      { type: 'highlight', text: 'Local tip: Most of these experiences are significantly better with a local contact who can skip the queues, negotiate the right prices, and get you into places that aren\'t publicly listed. That\'s exactly what Mulata does.' },
      { type: 'tip', text: 'Want Margui to plan your Cartagena itinerary around the experiences that fit your group, travel style and budget? Send her a WhatsApp — she\'ll have a custom plan for you within 24 hours.' },
    ]
  },
  {
    slug: 'bachelor-bachelorette-cartagena-guide',
    title: 'The Ultimate Bachelor & Bachelorette Party Guide to Cartagena',
    excerpt: 'Cartagena has become the go-to destination for epic pre-wedding celebrations. Here\'s everything you need to plan yours — from private boat parties to rooftop dinners.',
    image: '/img/collague_2.jpg',
    category: 'Trip Planning',
    readTime: '9 min read',
    publishedAt: '2025-03-28',
    tags: ['bachelor party cartagena', 'bachelorette cartagena', 'despedida de soltera', 'party'],
    seoTitle: 'Bachelor & Bachelorette Party in Cartagena: The Ultimate Guide | Mulata',
    seoDescription: 'Planning a bachelor or bachelorette party in Cartagena? Our complete guide covers boat parties, beach clubs, private dinners and everything you need for an epic celebration.',
    sections: [
      { type: 'p', text: 'Every year, thousands of groups choose Cartagena for their pre-wedding celebrations — and for good reason. The city has everything: a stunning backdrop, incredible nightlife, boat parties on turquoise water, world-class restaurants, and a vibe that\'s impossible to replicate anywhere else in Latin America.' },
      { type: 'p', text: 'I\'ve organized hundreds of bachelor and bachelorette trips here, and I\'ve seen what works and what doesn\'t. This is the guide I wish every group had before they landed.' },
      { type: 'h2', text: 'Why Cartagena for Your Pre-Wedding Trip?' },
      { type: 'ul', items: [
        'Direct flights from most major US and European cities',
        'Lower cost than Miami or Ibiza — stretch your budget further',
        'Stunning natural settings: islands, beaches, the Old City',
        'Warm weather year-round (low season June–October has the best hotel rates)',
        'Vibrant nightlife that goes until sunrise',
        'Private experiences that feel genuinely luxurious'
      ]},
      { type: 'h2', text: 'The Classic Cartagena Bachelor/Bachelorette Itinerary (3 Days)' },
      { type: 'h3', text: 'Day 1: Arrive & Explore the Old City' },
      { type: 'p', text: 'Check into your villa or hotel in the Old City (Getsemaní is our top neighborhood pick). Walk the walls at golden hour, have cocktails at Alquímico, then dinner at a long table at one of the colonial restaurants in the Centro Histórico. Keep night one relatively low-key — you\'ll need the energy for what\'s coming.' },
      { type: 'h3', text: 'Day 2: Private Boat Day' },
      { type: 'p', text: 'This is the centerpiece of almost every group trip we organize. Charter a private catamaran (we always recommend doing this privately, not on a shared tour) and head to the Rosario Islands or Barú. Open bar, fresh ceviche on board, a floating speaker, and as many hammocks as the boat can hold. Pure magic.' },
      { type: 'h3', text: 'Day 3: Beach Club & Final Night Out' },
      { type: 'p', text: 'Morning at a private beach club (we book the best ones with reserved sections). Afternoon back to the villa to get ready. Then the last night: private dinner in the city followed by Cartagena nightlife — we know the promoters, the back doors, and the places that are worth your time.' },
      { type: 'h2', text: 'Best Accommodations for Groups' },
      { type: 'p', text: 'Private villa rental is, without question, the best option for groups of 6 or more. You get your own pool, a shared living space, and total privacy. Prices for good villas in the Old City or Bocagrande range from $500 to $2,000 per night depending on size and season. We vet and book these directly.' },
      { type: 'h2', text: 'What to Budget' },
      { type: 'ul', items: [
        'Villa rental (8 people, 3 nights): $1,500–$4,500 total',
        'Private catamaran (full day, 10 people): $500–$900',
        'Private dinner for 10: $400–$800',
        'Nightlife per person per night: $60–$150',
        'Airport transfers: $20–$40 per way',
        'Concierge fee (full trip planning): depends on scope'
      ]},
      { type: 'h2', text: 'What Mulata Does for Your Group' },
      { type: 'p', text: 'We handle every single detail: villa selection and booking, private catamaran charter, restaurant reservations, beach club access, nightlife logistics, airport transfers, and on-the-ground support throughout your stay. You just show up and celebrate.' },
      { type: 'highlight', text: '"Margui organized the most perfect bachelorette. Honestly, every detail was thought of — the boat, the flowers, the restaurant. We\'ve been talking about it for months." — Sarah, Atlanta' },
      { type: 'tip', text: 'Planning a bachelor or bachelorette in Cartagena? Send Margui the dates, group size, and your budget — she\'ll put together a full proposal within 48 hours.' },
    ]
  },
  {
    slug: 'rosario-islands-day-trip-guide',
    title: 'Rosario Islands: Your Complete Day Trip Guide from Cartagena',
    excerpt: 'Crystal-clear water, coral reefs, and a national park just 45 minutes from Cartagena. Everything you need to know to have the perfect island day.',
    image: '/img/island.png',
    category: 'Cartagena Guide',
    readTime: '6 min read',
    publishedAt: '2025-03-15',
    tags: ['rosario islands', 'isla del rosario', 'cartagena beaches', 'boat trip cartagena'],
    seoTitle: 'Rosario Islands Day Trip from Cartagena: Complete Guide | Mulata Concierge',
    seoDescription: 'Everything you need to know about visiting the Rosario Islands from Cartagena — how to get there, what to do, where to eat, and how to do it in style.',
    sections: [
      { type: 'p', text: 'Forty-five minutes from the piers of Cartagena, the Caribbean changes. The water goes from murky to clear. The city sounds disappear. And suddenly you\'re in a national park of 27 coral islands — the Rosario Archipelago — where the fish are bigger than your hand and the silence is absolute.' },
      { type: 'p', text: 'The Rosario Islands are the most popular day trip from Cartagena, and for good reason. But how you do it makes all the difference.' },
      { type: 'h2', text: 'Getting There: Your Options' },
      { type: 'h3', text: 'Option 1: The Public Boat (Not Recommended)' },
      { type: 'p', text: 'The public lanchas leave from Muelle Turístico at 8am and return around 5pm. They\'re crowded (30+ people), loud, and land you at a busy dock on Isla Grande where vendors compete for your attention from the moment you arrive. Budget: around $30 per person round trip.' },
      { type: 'h3', text: 'Option 2: Private Catamaran or Speedboat (Recommended)' },
      { type: 'p', text: 'Charter your own vessel — a catamaran for groups of 8–20, a speedboat for smaller groups. You set the schedule, choose your anchoring spots, and bring your own music, food and drinks. No strangers. No fixed itinerary. Cost: $500–$900 for a full day, split across the group.' },
      { type: 'h2', text: 'What to Do at the Islands' },
      { type: 'ul', items: [
        'Snorkeling at the coral reefs (gear rental available at the island or bring your own)',
        'Swimming in the crystal-clear lagoons near Barú',
        'Visiting the Oceanario — Colombia\'s only open-water marine aquarium (unique experience)',
        'Kayaking around the mangroves',
        'Eating fresh lobster and ceviche at one of the stilted restaurant-bars',
        'Hammock-hanging in the Caribbean shallows'
      ]},
      { type: 'h2', text: 'The Best Spots in the Archipelago' },
      { type: 'h3', text: 'Playa Blanca (Barú Island)' },
      { type: 'p', text: 'Technically not part of the Rosario Islands but often visited on the same trip. The clearest and most beautiful beach near Cartagena. Very crowded on weekends — go on a weekday or go early.' },
      { type: 'h3', text: 'Isla Grande' },
      { type: 'p', text: 'The largest island in the archipelago, with a village, restaurants, and coral reefs accessible from shore. More developed but also more facilities.' },
      { type: 'h3', text: 'Isla del Rosario' },
      { type: 'p', text: 'The most exclusive island with luxury private villas. You can\'t stay unless you\'re a guest, but the waters around it are perfect for anchoring and snorkeling.' },
      { type: 'h2', text: 'What to Bring' },
      { type: 'ul', items: [
        'Reef-safe sunscreen (SPF 50+ — the sun here is intense)',
        'Rash guard or long-sleeve UV shirt',
        'Cash in pesos for food and vendors at the islands',
        'Underwater camera or waterproof phone case',
        'Motion sickness medication if you\'re prone (the channel can be choppy)',
        'A bag for wet things on the way back'
      ]},
      { type: 'h2', text: 'Best Time to Go' },
      { type: 'p', text: 'December through March is peak season — calm seas, clear visibility, and perfect weather. April–May has good conditions with fewer crowds. June through October is the green season: more rain, slightly choppier water, but far lower prices. We can advise on conditions before you book.' },
      { type: 'highlight', text: 'The difference between a great island day and a mediocre one is almost entirely about who organizes it. Private boat, the right anchoring spots, good food on board — that\'s the Mulata way.' },
      { type: 'tip', text: 'We organize private island days for couples, families, and groups year-round. Message Margui to check availability and get a quote for your dates.' },
    ]
  },
  {
    slug: 'honeymoon-cartagena-guide',
    title: 'Planning the Perfect Honeymoon in Cartagena, Colombia',
    excerpt: 'Cartagena is the most romantic city in Latin America. Sunset dinners over the Caribbean, private boat trips, colonial hotels — here\'s how to plan a honeymoon that feels truly magical.',
    image: '/img/collague_4.jpg',
    category: 'Romance',
    readTime: '8 min read',
    publishedAt: '2025-02-20',
    tags: ['honeymoon cartagena', 'luna de miel cartagena', 'romantic cartagena', 'couple travel colombia'],
    seoTitle: 'Honeymoon in Cartagena, Colombia: The Ultimate Romantic Guide | Mulata',
    seoDescription: 'Planning your honeymoon in Cartagena? Discover the most romantic hotels, restaurants, experiences and insider tips for a perfect start to married life in Colombia.',
    sections: [
      { type: 'p', text: 'There is nowhere in Latin America more suited for a honeymoon than Cartagena. The colonial architecture, the Caribbean light at sunset, the private rooftop plunge pools, the music that floats through the streets at night — the city is practically designed for romance.' },
      { type: 'p', text: 'I\'ve organized dozens of honeymoon trips here, and I know exactly what creates that particular magic. This guide is everything I tell couples before they arrive.' },
      { type: 'h2', text: 'When to Go' },
      { type: 'p', text: 'December through April is the dry season — perfect weather, calm seas, and the city at its most photogenic. The drawback: it\'s also peak season, so prices are higher and popular restaurants and boats need to be booked further in advance. For the best balance of weather and value, consider late November or early May.' },
      { type: 'h2', text: 'Where to Stay' },
      { type: 'h3', text: 'For full romance: a boutique hotel inside the Old City' },
      { type: 'p', text: 'The Old City has some of the most beautiful small hotels in the world — colonial houses converted into 8–20 room boutiques, often with a rooftop plunge pool, an inner courtyard with a fountain, and staff who know your name within an hour of arrival. Rates from $200–$600 per night. We vet and book these for our couples.' },
      { type: 'h3', text: 'For privacy: a private villa' },
      { type: 'p', text: 'If you want total seclusion — your own pool, your own kitchen, your own rooftop — a private villa in the Old City or Bocagrande gives you that. We know the best properties and can negotiate rates directly with the owners.' },
      { type: 'h2', text: 'The Experiences That Make Cartagena Honeymoons Special' },
      { type: 'h3', text: 'Private sunset dinner on a sailboat' },
      { type: 'p', text: 'We organize private sailing dinners in the bay of Cartagena: a table for two on a sailboat at sunset, a chef who prepares fresh seafood, champagne, and the city lights appearing on the horizon as the sky turns pink. It\'s the thing couples remember 20 years later.' },
      { type: 'h3', text: 'Spa day at one of the Old City hotels' },
      { type: 'p', text: 'Several of Cartagena\'s boutique hotels have extraordinary spas with Caribbean-inspired treatments. A morning of massages, body wraps, and a rooftop pool is the perfect way to decompress from the wedding week.' },
      { type: 'h3', text: 'Private island day — just the two of you' },
      { type: 'p', text: 'A speedboat, a cooler of champagne and ceviche, and a strip of white sand beach to yourselves. We can organize private island experiences for couples where you\'re the only ones there. No other tourists, no vendors — just the two of you and the Caribbean.' },
      { type: 'h3', text: 'A slow morning in Getsemaní' },
      { type: 'p', text: 'The best mornings in Cartagena are unscheduled ones. Walk to Getsemaní — the neighborhood of street art and neighborhood bakeries — find a café on a corner, order a tinto and a pan de bono, and let the city wake up around you. No itinerary, no rush.' },
      { type: 'h2', text: 'The Most Romantic Restaurants in Cartagena' },
      { type: 'ul', items: [
        'El Santísimo — rooftop terrace inside a 400-year-old convent',
        'Alma — farm-to-table Colombian cuisine in a stunning colonial house',
        'Quipu — intimate and sophisticated, 12 tables maximum',
        'La Vitrola — Cuban music, white tablecloths, and the best mojito in the city',
        'Carmen — modern Colombian cuisine in the most beautiful dining room in Cartagena'
      ]},
      { type: 'highlight', text: 'The secret to a truly romantic trip in Cartagena is having someone take care of every logistical detail so that you never have to think about anything except each other. That\'s what Mulata is for.' },
      { type: 'tip', text: 'Tell Margui your travel dates and the kind of experience you\'re after — adventure, relaxation, food, privacy — and she\'ll build your honeymoon from scratch. It\'s one of her favorite things to plan.' },
    ]
  },
  {
    slug: 'best-restaurants-cartagena',
    title: 'Best Restaurants in Cartagena: Where to Eat Like a Local',
    excerpt: 'Past the tourist menus and the obvious picks — here are the restaurants and food experiences in Cartagena that actually matter, from a local who eats at all of them.',
    image: '/img/savor_moment.jpg',
    category: 'Food & Culture',
    readTime: '7 min read',
    publishedAt: '2025-01-30',
    tags: ['restaurants cartagena', 'food cartagena', 'where to eat cartagena', 'best food colombia'],
    seoTitle: 'Best Restaurants in Cartagena Colombia 2025 | Insider Guide by Mulata',
    seoDescription: 'Skip the tourist traps. Here are the best restaurants in Cartagena, Colombia in 2025 — recommended by a local concierge who eats at all of them.',
    sections: [
      { type: 'p', text: 'Cartagena\'s food scene has transformed in the last decade. It used to mean fried fish on the beach and overpriced menus for tourists near the clock tower. Now it\'s one of the most exciting culinary cities in Latin America, with chefs who trained in Bogotá and Barcelona bringing serious technique to Caribbean ingredients.' },
      { type: 'p', text: 'But you still need to know where to go. This is my current list — updated regularly, based on personal visits.' },
      { type: 'h2', text: 'The Non-Negotiables (Go Here No Matter What)' },
      { type: 'h3', text: 'La Cevichería' },
      { type: 'p', text: 'Still the best ceviche in Cartagena after more than a decade. Anthony Bourdain\'s visit put it on the global map but it was already extraordinary. The octopus ceviche is the thing to order. Go for lunch, arrive at noon when they open, and expect to wait. It\'s worth it.' },
      { type: 'h3', text: 'El Santísimo' },
      { type: 'p', text: 'A rooftop restaurant inside a restored colonial convent with a view over the Old City rooftops. The food is modern Colombian — fresh, beautifully presented, deeply satisfying. Go for dinner on a Friday when there\'s live music. Reservations essential.' },
      { type: 'h3', text: 'Carmen' },
      { type: 'p', text: 'The most technically impressive kitchen in Cartagena. Chef Rob Pevitts has built something special here — tasting menus that read like a love letter to Colombian ingredients. The space is stunning (a converted colonial mansion) and the wine list is serious. For a special night out, this is the answer.' },
      { type: 'h2', text: 'For a Long Lunch' },
      { type: 'h3', text: 'La Vitrola' },
      { type: 'p', text: 'Cuban music, colonial ceilings, white tablecloths and mojitos made with real mint. La Vitrola has been the most atmospheric restaurant in Cartagena for 25 years and it hasn\'t slipped. Order the seafood rice, a whole fried red snapper, and stay for three hours.' },
      { type: 'h3', text: 'Alma' },
      { type: 'p', text: 'Inside the Hotel Casa San Agustín, Alma does farm-to-table Colombian cuisine with ingredients sourced from regional producers. The inner courtyard with the fountain is one of the most beautiful places to eat in the city. Go for Sunday brunch.' },
      { type: 'h2', text: 'Street Food You Can\'t Miss' },
      { type: 'ul', items: [
        'Arepa de huevo — deep-fried corn dough stuffed with egg, from any street cart near the market',
        'Patacón — twice-fried plantain topped with hogao sauce and shrimp',
        'Cocadas — coconut sweets made by the Afro-Colombian women in the Old City',
        'Chicha de maíz — fermented corn drink, served cold on hot days near San Pedro Claver',
        'Fresh juice from the market — tamarind, lulo, corozo — drink them all'
      ]},
      { type: 'h2', text: 'Best Neighborhood for Food: Getsemaní' },
      { type: 'p', text: 'The Getsemaní neighborhood has the most interesting and affordable food in Cartagena. Wander the streets around Parque del Centenario in the evenings and follow your nose. The restaurants change quickly but the quality stays high — and nothing is overpriced because locals eat here too.' },
      { type: 'highlight', text: 'Restaurant reservations in Cartagena during high season can be difficult to get on short notice. Part of what Mulata offers is guaranteed access to the most sought-after tables — relationships built over 11 years.' },
      { type: 'tip', text: 'Want a custom restaurant guide for your specific travel dates and group? Message Margui with your preferences (cuisine type, price range, atmosphere) and she\'ll put together a personalized list.' },
    ]
  },
  {
    slug: 'group-travel-colombia-guide',
    title: 'Group Travel in Colombia: How to Plan an Unforgettable Trip',
    excerpt: 'Organizing a trip for 10, 20 or even 50 people is a logistical challenge — but Colombia rewards the effort. Here\'s how to do it right, from someone who\'s done it hundreds of times.',
    image: '/img/collague_6.jpg',
    category: 'Trip Planning',
    readTime: '8 min read',
    publishedAt: '2025-01-10',
    tags: ['group travel colombia', 'viaje grupos cartagena', 'group trips colombia', 'travel planning'],
    seoTitle: 'Group Travel in Colombia: The Complete Planning Guide | Mulata Concierge',
    seoDescription: 'Planning a group trip to Colombia? From logistics to accommodation to group activities — our complete guide to organizing unforgettable group travel in Cartagena and Colombia.',
    sections: [
      { type: 'p', text: 'Colombia has become one of the top destinations for group travel — corporate retreats, friend getaways, family reunions, birthdays, anniversaries. And Cartagena is almost always the centerpiece.' },
      { type: 'p', text: 'But groups are hard. Different expectations, dietary restrictions, budget ranges, energy levels. The logistics alone can be a full-time job. After organizing trips for groups of 8 to 80 people, here\'s what I\'ve learned.' },
      { type: 'h2', text: 'Start With the Non-Negotiables' },
      { type: 'p', text: 'Before you plan anything, get three things clear with your group: the total budget per person, the travel dates (getting everyone to agree takes longer than you think), and what the trip is actually for — celebration, relaxation, adventure, or a mix.' },
      { type: 'h2', text: 'Best Destinations for Groups in Colombia' },
      { type: 'h3', text: 'Cartagena (Most Popular)' },
      { type: 'p', text: 'Perfect for: beach days, boat parties, nightlife, colonial city exploration. Easy to reach internationally, wide range of accommodation options for groups, warm year-round.' },
      { type: 'h3', text: 'Medellín' },
      { type: 'p', text: 'Perfect for: urban culture, day trips to coffee farms, Guatapé (El Peñol rock), the most underrated nightlife in Colombia. Cooler weather, stunning mountain setting.' },
      { type: 'h3', text: 'Cartagena + Medellín (Two-City Trip)' },
      { type: 'p', text: 'The classic Colombia group itinerary: 3 nights in Cartagena for beaches and Caribbean vibes, then 3 nights in Medellín for city culture and coffee country. Flights between the two cities are cheap and frequent (30 minutes).' },
      { type: 'h2', text: 'Accommodation for Groups' },
      { type: 'ul', items: [
        'Private villa rental: best for 8–20 people, gives you a shared space and often a pool',
        'Boutique hotel block booking: good for larger groups (20+) who want individual rooms',
        'Airbnb-style house: works for smaller groups (6–10), more informal feel',
        'Avoid: splitting the group across multiple properties — it kills the group dynamic'
      ]},
      { type: 'h2', text: 'Logistics That Make or Break a Group Trip' },
      { type: 'h3', text: 'Airport Transfers' },
      { type: 'p', text: 'Don\'t leave this to chance. With 10+ people arriving from different flights, having private vehicles organized in advance (with phone numbers for the drivers shared with everyone) eliminates the most common source of group friction — arrival chaos.' },
      { type: 'h3', text: 'Meals' },
      { type: 'p', text: 'Large group restaurant reservations in Cartagena need to be made 2–4 weeks in advance during high season. Some restaurants cap group sizes at 12; others can accommodate 30 with notice. We know which ones, and we book them.' },
      { type: 'h3', text: 'Group Activities' },
      { type: 'p', text: 'Private activities are almost always better for groups. A private boat charter rather than joining a tour, a private cooking class rather than a mixed group session. The extra cost per person is usually minimal when divided across the group.' },
      { type: 'h2', text: 'Budget Guidance for Group Trips' },
      { type: 'ul', items: [
        'Budget: $100–$150/person/day (shared villa, local restaurants, group tours)',
        'Mid-range: $200–$300/person/day (good boutique hotel, mix of private and group experiences)',
        'Luxury: $400+/person/day (premium villa, all private experiences, fine dining every night)'
      ]},
      { type: 'highlight', text: 'The biggest mistake groups make is trying to organize everything themselves. One person ends up doing all the work and arrives exhausted. That\'s exactly what a concierge is for.' },
      { type: 'tip', text: 'Tell Margui your group size, dates, destination preferences and budget — she\'ll send you a complete proposal covering accommodation, activities, transport, and dining. No obligation, no commitment required to get the plan.' },
    ]
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(p => p.slug === slug);
}
