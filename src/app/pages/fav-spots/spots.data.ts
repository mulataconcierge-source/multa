export interface Spot {
  name: string;
  concept: string;
  details: string[];
  /** Three image paths. Leave empty to fall back to rotating placeholders. */
  images: string[];
  /** Optional explicit Google Maps URL. Falls back to a name-based search. */
  mapsUrl?: string;
}

export interface SpotSection {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  spots: Spot[];
}

export const SPOT_SECTIONS: SpotSection[] = [
  {
    id: 'fine-restaurants',
    eyebrow: 'Mulata Fav Spots',
    title: 'Fine Restaurants',
    subtitle: 'Elegant cuisine, unforgettable settings and flavors that tell a story',
    intro: 'In Cartagena, dining can be more than just a meal — it can be an experience. These handpicked restaurants offer refined atmospheres, creative menus and impeccable service. Ideal for romantic dinners, celebrations or simply treating yourself to the best.',
    spots: [
      {
        name: 'Alma',
        concept: 'Located inside the boutique Casa San Agustín hotel, Alma is a refined space celebrating coastal Colombian cuisine with a gourmet twist.',
        details: [
          'Beautiful colonial-style ambiance',
          '12:00 - 15:00 and 18:00 - 23:00 Hrs.',
          'Smart Casual',
          'Centro Histórico, Cll de La Universidad',
        ],
        images: [
          '/img/fav-spots/alma-1.avif',
          '/img/fav-spots/alma-2.avif',
          '/img/fav-spots/alma-3.avif',
        ],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=ALMA%20Restaurante%20-%20Bar%2C%20Cartagena',
      },
      {
        name: '1621',
        concept: 'Located inside the luxurious Sofitel Legend Santa Clara, 1621 offers a fine dining experience between French technique and Colombian ingredients.',
        details: [
          'Award-winning tasting menu',
          '18:30 - 22:30 Hrs. (W - S)',
          'Elegant Casual',
          'Santa Clara Hotel',
        ],
        images: [
          '/img/fav-spots/1621-1.avif',
          '/img/fav-spots/1621-2.avif',
          '/img/fav-spots/1621-3.avif',
        ],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Restaurante%201621%2C%20Cartagena',
      },
      {
        name: 'NIKÚ',
        concept: 'Asian food with a Caribbean touch — a menu taken to the modern without losing its essence, fun and good service from the moment you arrive.',
        details: [
          'Live DJ on weekends',
          '12:00 - 23:50 Hrs.',
          'Smart Casual',
          'Centro Histórico, Calle San Juan de Dios',
        ],
        images: [
          '/img/fav-spots/niku-1.avif',
          '/img/fav-spots/niku-2.avif',
          '/img/fav-spots/niku-3.avif',
        ],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=NIKU%20COCINA%20NIKKEI%20-%20Sushi%2C%20Cartagena',
      },
      {
        name: 'Celele',
        concept: '100% Colombian cuisine that blends flavors and influences from different regions of the country, reimagined through a contemporary approach. Ranked among the 50 best restaurants.',
        details: [
          'Colombian food',
          '12:00 - 23:50 Hrs.',
          'Smart Casual',
          'Getsemaní, Cll Espíritu Santo',
        ],
        images: [
          '/img/fav-spots/celele-1.avif',
          '/img/fav-spots/celele-2.avif',
          '/img/fav-spots/celele-3.avif',
        ],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Celele%2C%20Cartagena',
      },
      {
        name: 'Candé',
        concept: 'Candé is a love letter to Cartagena. It offers a full cultural immersion through traditional costeño recipes, live folkloric music, and warm colonial decor. Dining here is like being invited into a local home.',
        details: [
          'Live music and traditional dance every night',
          '07:00 - 23:00 Hrs.',
          'Smart Casual',
          'San Diego, Cll de la Serrezuela',
        ],
        images: [
          '/img/fav-spots/cande-1.avif',
          '/img/fav-spots/cande-2.avif',
          '/img/fav-spots/cande-3.avif',
        ],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=RESTAURANTE%20CAND%C3%89%20Cocina%20100%25%20Cartagenera',
      },
      {
        name: 'Mar y Zielo',
        concept: 'Mar y Zielo is a rooftop restaurant offering panoramic views of Cartagena\'s historic rooftops and Caribbean sunsets. The menu features contemporary Caribbean cuisine, crafted cocktails, and a relaxed, elegant vibe.',
        details: [
          'Rooftop terrace with sunset views',
          '17:00 - 23:00 Hrs.',
          'Smart Casual',
          'Centro Histórico - Casa de la Escribana',
        ],
        images: [
          '/img/fav-spots/mar-y-zielo-1.avif',
          '/img/fav-spots/mar-y-zielo-2.avif',
          '/img/fav-spots/mar-y-zielo-3.avif',
        ],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mar%20y%20Zielo%2C%20Cartagena',
      },
      {
        name: 'Mistura',
        concept: 'Mistura blends Peruvian Nikkei cuisine with Caribbean flair in a chic and modern setting. It\'s ideal for those who want to enjoy seafood, sushi and a stylish night out with amazing flavors.',
        details: [
          'Signature sushi rolls and ceviches',
          '12:30 - 23:00 Hrs.',
          'Smart Casual',
          'Centro Histórico - Calle Segunda de Badillo',
        ],
        images: [
          '/img/fav-spots/mistura-1.avif',
          '/img/fav-spots/mistura-2.avif',
          '/img/fav-spots/mistura-3.avif',
        ],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Mistura%2C%20Cartagena',
      },
      {
        name: 'Uma',
        concept: 'UMA offers a high-end Peruvian fine dining experience, with a contemporary take on Caribbean and national ingredients. Sophistication, creativity and tradition blend in every dish.',
        details: [
          'Elevated Peruvian cuisine with a Colombian touch',
          '12:00 - 23:00 Hrs.',
          'Elegant Casual',
          'Santo Domingo - Calle del Curato',
        ],
        images: [
          '/img/fav-spots/uma-1.avif',
          '/img/fav-spots/uma-2.avif',
          '/img/fav-spots/uma-3.avif',
        ],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Uma%20Cantina%20Peruana%2C%20Cartagena',
      },
      {
        name: 'Ana',
        concept: 'Ana is a hidden gem in the heart of the walled city, known for its contemporary cuisine and elegant atmosphere. With seasonal ingredients and artistic plating, every dish is designed to surprise.',
        details: [
          'Intimate, stylish atmosphere',
          '12:00 - 23:30 Hrs.',
          'Smart Casual',
          'Centro Histórico - Calle del Colegio',
        ],
        images: [
          '/img/fav-spots/ana-1.avif',
          '/img/fav-spots/ana-2.avif',
          '/img/fav-spots/ana-3.avif',
        ],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Ana%20Restaurante%20Bar%2C%20Cartagena',
      },
    ],
  },
  {
    id: 'casual-restaurants',
    eyebrow: 'Mulata Fav Spots',
    title: 'Casual Restaurants',
    subtitle: 'Fresh flavors, relaxed settings, and the essence of Cartagena\'s vibrant lifestyle',
    intro: 'Casual dining in Cartagena blends authenticity with comfort, creating the perfect atmosphere to enjoy delicious meals in a laid-back yet stylish way. These restaurants offer a mix of local and international dishes, friendly service, and spaces where you can unwind. Ideal for everyday dining, gatherings with friends, or savoring the city\'s flavors in a more relaxed environment.',
    spots: [
      {
        name: 'Salón Tropical',
        concept: 'Located on Calle Lomba, a vibrant local spot in Getsemaní known for its lively atmosphere and Caribbean flavors. It\'s casual, colorful, and perfect for enjoying music, drinks, and a fun, authentic Cartagena vibe.',
        details: [
          'Fusion cuisine',
          '12:00 - 23:00 Hrs.',
          'Smart Casual',
          'Getsemaní - Calle Lomba',
        ],
        images: [
          '/img/fav-spots/salon-tropical-1.avif',
          '/img/fav-spots/salon-tropical-2.avif',
          '/img/fav-spots/salon-tropical-3.avif',
        ],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sal%C3%B3n%20Tropical%2C%20Cartagena',
      },
      {
        name: '1811',
        concept: 'A casual-chic spot in the heart of the walled city, perfect for cocktails and easygoing dining before or after exploring Cartagena.',
        details: [
          'Colombian & International plates',
          '9:00 - 23:00 Hrs.',
          'Casual',
          'Centro Histórico - Cll Primera de Badillo',
        ],
        images: [
          '/img/fav-spots/1811-1.avif',
          '/img/fav-spots/1811-2.avif',
          '/img/fav-spots/1811-3.avif',
        ],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=1811%20RESTAURANTE%20BAR%2C%20Cartagena',
      },
      {
        name: 'Buena Vida',
        concept: 'A colorful rooftop restaurant celebrating Caribbean flavors and local joy. Known for its lively ambiance, seafood specialties and signature cocktails that perfectly capture the spirit of Cartagena.',
        details: [
          'Rooftop bar',
          '11:30 - 23:30 Hrs.',
          'Smart Casual',
          'Centro Histórico, Calle del Porvenir',
        ],
        images: [
          '/img/fav-spots/buena-vida-1.avif',
          '/img/fav-spots/buena-vida-2.avif',
          '/img/fav-spots/buena-vida-3.avif',
        ],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Buena%20Vida%20Marisquer%C3%ADa%2C%20Cartagena',
      },
      {
        name: 'Pezetarian',
        concept: 'Asian food with a Caribbean touch — a menu taken to the modern without losing its essence, fun, and good service from the moment you arrive.',
        details: [
          'Signature sushi',
          '12:00 - 23:00 Hrs.',
          'Casual',
          'Centro Histórico, Calle San Agustín',
        ],
        images: [
          '/img/fav-spots/pezetarian-1.avif',
          '/img/fav-spots/pezetarian-2.avif',
          '/img/fav-spots/pezetarian-3.avif',
        ],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Pezetarian%20Asian-Caribbean%20Food%2C%20Cartagena',
      },
      {
        name: 'Cocina de Pepina',
        concept: 'La Cocina de Pepina is a small and authentic restaurant known for celebrating traditional Caribbean and Colombian home-style cooking. Inspired by "Pepina," a classic matriarch figure, the place feels warm and nostalgic, like eating at someone\'s home.',
        details: [
          'Intimate, stylish atmosphere',
          '12:00 - 16:00 | 19:00 - 22:00 Hrs.',
          'Casual',
          'Getsemaní, Callejón Vargas',
        ],
        images: [
          '/img/fav-spots/cocina-de-pepina-1.avif',
          '/img/fav-spots/cocina-de-pepina-2.avif',
          '/img/fav-spots/cocina-de-pepina-3.avif',
        ],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=La%20Cocina%20de%20Pepina%2C%20Cartagena',
      },
      {
        name: 'De Indias',
        concept: 'A cozy, local spot serving traditional Colombian and Caribbean dishes. It\'s simple, authentic, and full of bold, comforting flavors that reflect the spirit of the neighborhood.',
        details: [
          'Live DJ on weekends',
          '12:00 - 15:00 | 19:00 - 22:30 Hrs.',
          'Casual',
          'Getsemaní, Parque Centenario',
        ],
        images: [
          '/img/fav-spots/de-indias-1.avif',
          '/img/fav-spots/de-indias-2.avif',
          '/img/fav-spots/de-indias-3.avif',
        ],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=deIndias%20Comedor%20%26%20Copas%2C%20Cartagena',
      },
      {
        name: 'El Rincón del Sushi',
        concept: 'A cozy Japanese-Caribbean fusion spot, offering sushi rolls and seafood dishes prepared with local ingredients and creativity.',
        details: [
          'Poke bowls',
          '12:30 - 23:00 Hrs.',
          'Casual',
          'Centro Histórico - Calle del Arzobispado',
        ],
        images: [
          '/img/fav-spots/el-rincon-del-sushi-1.avif',
          '/img/fav-spots/el-rincon-del-sushi-2.avif',
          '/img/fav-spots/el-rincon-del-sushi-3.avif',
        ],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=EL%20RINC%C3%93N%2C%20Cartagena',
      },
      {
        name: 'Cancha',
        concept: 'A local favorite serving creative ceviches and coastal classics with a modern twist. Colorful, fun and ideal for group lunches.',
        details: [
          'Ceviches',
          '12:00 - 23:00 Hrs.',
          'Casual',
          'Centro Histórico - Cll Segunda de Badillo',
        ],
        images: [
          '/img/fav-spots/cancha-1.avif',
          '/img/fav-spots/cancha-2.avif',
          '/img/fav-spots/cancha-3.avif',
        ],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=CANCHA%20RESTAURANTE%20CEVICHES%20SUSHI%2C%20Cartagena',
      },
    ],
  },
  {
    id: 'brunch-spots',
    eyebrow: 'Mulata Fav Spots',
    title: 'Brunch Spots',
    subtitle: 'Slow mornings, fresh flavors and the perfect balance between indulgence and ease in Cartagena\'s vibrant lifestyle',
    intro: 'Brunch in Cartagena is all about taking your time and enjoying the moment. From charming cafés to stylish hidden gems, these spots offer thoughtfully prepared dishes, great coffee and inviting atmospheres. Perfect for relaxed mornings, casual meetups, or easing into the day while savoring the city\'s laid-back energy.',
    spots: [
      {
        name: 'Casona',
        concept: 'A cozy brunch spot known for its beautiful colonial setting and fresh, thoughtfully prepared dishes. It\'s the perfect place to enjoy a relaxed morning with great coffee and a laid-back vibe.',
        details: [
          'Signature brunch plates',
          '08:30 - 23:00 Hrs.',
          'Casual',
          'Centro Histórico - Calle del Curato',
        ],
        images: [
          '/img/fav-spots/casona-1.avif',
          '/img/fav-spots/casona-2.avif',
          '/img/fav-spots/casona-3.avif',
        ],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Casona%20Caf%C3%A9%20Bar%2C%20Cartagena',
      },
      {
        name: 'Nia',
        concept: 'A trendy bakery and restaurant in Cartagena, known for its creative menu, beautifully presented dishes, and stylish atmosphere. Highlights include its pastries, brunch options, and vibrant ambiance.',
        details: [
          'Bakery',
          '08:00 - 20:00 Hrs.',
          'Casual',
          'Centro Histórico - Cll Segunda de Badillo',
        ],
        images: [
          '/img/fav-spots/nia-1.avif',
          '/img/fav-spots/nia-2.avif',
          '/img/fav-spots/nia-3.avif',
        ],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Nia%20Bakery%20Coffee%20Shop%20%26%20Cocktails%2C%20Cartagena',
      },
      {
        name: 'Al Alma',
        concept: 'Known for its artisanal coffee, fresh pastries and laid-back atmosphere. It\'s a great spot to slow down and enjoy a relaxed morning or afternoon.',
        details: [
          'Dishes specially crafted for brunch',
          '08:00 - 17:00 Hrs.',
          'Casual',
          'Centro Histórico - Calle Baloco',
        ],
        images: [
          '/img/fav-spots/al-alma-1.avif',
          '/img/fav-spots/al-alma-2.avif',
          '/img/fav-spots/al-alma-3.avif',
        ],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Al%20Alma%20Caf%C3%A9%20Restaurante%2C%20Cartagena',
      },
      {
        name: 'Época',
        concept: 'Well-known café in Cartagena, recognized for its specialty coffee, in-house roasted beans and modern, laid-back atmosphere. It\'s a go-to spot for quality coffee and a relaxed break in the city.',
        details: [
          'Specialty coffee',
          '07:00 - 18:00 Hrs.',
          'Casual',
          'Centro Histórico - Cll del Arzobispado',
        ],
        images: [
          '/img/fav-spots/epoca-1.avif',
          '/img/fav-spots/epoca-2.avif',
          '/img/fav-spots/epoca-3.avif',
        ],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=%C3%89poca%20Caf%C3%A9%20Bar%2C%20Cartagena',
      },
      {
        name: 'Meeza',
        concept: 'A cozy brunch spot in Getsemaní, known for its fresh, feel-good menu and relaxed atmosphere. Highlights include its healthy options, great coffee, and beautifully presented dishes.',
        details: [
          'Fresh and healthy options',
          '08:00 - 17:30 Hrs.',
          'Casual',
          'Getsemaní - Plaza del Pozo',
        ],
        images: [
          '/img/fav-spots/meeza-1.avif',
          '/img/fav-spots/meeza-2.avif',
          '/img/fav-spots/meeza-3.avif',
        ],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Meeza%20Caf%C3%A9%2C%20Brunch%20%26%20Bar%20Sal%C3%B3n%2C%20Cartagena',
      },
      {
        name: 'Carta Ajena',
        concept: 'A stylish restaurant located in Getsemaní, known for its creative cuisine, bold flavors and intimate atmosphere. Highlights include its tasting-style dishes and beautifully crafted cocktails.',
        details: [
          'Tasting-style dishes',
          '07:00 - 23:00 Hrs.',
          'Casual',
          'Getsemaní - Cll La Magdalena',
        ],
        images: [
          '/img/fav-spots/carta-ajena-1.avif',
          '/img/fav-spots/carta-ajena-2.avif',
          '/img/fav-spots/carta-ajena-3.avif',
        ],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Carta%20Ajena%20Restaurante%2C%20Cartagena',
      },
    ],
  },
  {
    id: 'night-life',
    eyebrow: 'Mulata Fav Spots',
    title: 'Night Life',
    subtitle: 'The rhythm, lights and flavor of Cartagena\'s nights',
    intro: 'When the sun sets, Cartagena transforms into a playground of rhythm and sophistication. From chic rooftops overlooking the old city to intimate lounges and lively salsa bars, every corner reflects the city\'s tropical charm and cosmopolitan energy. Whether for sunset cocktails, live music, or dancing the night away, Cartagena\'s nightlife invites you to celebrate life with style.',
    spots: [
      {
        name: 'La Movida',
        concept: 'Cartagena\'s trendiest nightlife spot, blending elegance and energy. Known for its stylish crowd, great DJs, and vibrant dance floor until late.',
        details: [
          'DJs & live sets',
          '21:00 - 03:00 Hrs.',
          'Trendy Smart',
          'Centro Histórico - Cll San Juan de Dios',
        ],
        images: [
          '/img/fav-spots/la-movida-1.avif',
          '/img/fav-spots/la-movida-2.avif',
          '/img/fav-spots/la-movida-3.avif',
        ],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=La%20Movida%2C%20Cartagena',
      },
      {
        name: 'Alquímico',
        concept: 'Iconic three-floor cocktail bar and one of Latin America\'s 50 Best. Each level offers a different mood — from classic cocktails downstairs to rooftop beats under the stars.',
        details: [
          'Signature mixology and rooftop',
          '12:00 - 02:00 Hrs.',
          'Casual',
          'Centro Histórico - Cll del Colegio',
        ],
        images: [
          '/img/fav-spots/alquimico-1.avif',
          '/img/fav-spots/alquimico-2.avif',
          '/img/fav-spots/alquimico-3.avif',
        ],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Alquimico%2C%20Cartagena',
      },
      {
        name: 'La Jugada',
        concept: 'La Jugada is a stylish rooftop bar in Cartagena, known for its lively vibe, great views, and creative cocktails, perfect for a fun night out.',
        details: [
          'Rooftop',
          '18:00 - 03:00 Hrs.',
          'Smart Casual',
          'Centro Histórico - Cll del Colegio',
        ],
        images: [
          '/img/fav-spots/la-jugada-1.avif',
          '/img/fav-spots/la-jugada-2.avif',
          '/img/fav-spots/la-jugada-3.avif',
        ],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=La%20Jugada%20Club%20House%20Gastrobar%2C%20Cartagena',
      },
      {
        name: 'Café Havana',
        concept: 'Legendary salsa bar capturing the heart and rhythm of Getsemaní. Authentic live bands, mojitos, and a lively crowd that dances all night long.',
        details: [
          'Live Salsa',
          '20:00 - 03:00 Hrs.',
          'Casual',
          'Getsemaní - Calle de la Media Luna',
        ],
        images: [
          '/img/fav-spots/cafe-havana-1.avif',
          '/img/fav-spots/cafe-havana-2.avif',
          '/img/fav-spots/cafe-havana-3.avif',
        ],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Caf%C3%A9%20Havana%2C%20Cartagena',
      },
      {
        name: 'El Pasquín de Joaco',
        concept: 'El Pasquín de Joaco is a casual local spot in Cartagena, known for its lively, energetic party vibe and bold, street-style flavors.',
        details: [
          'Local ambiance - full energy - rooftop',
          '18:00 - 03:00 Hrs.',
          'Smart Casual',
          'Centro Histórico - Cll de la Mantilla',
        ],
        images: [
          '/img/fav-spots/el-pasquin-de-joaco-1.avif',
          '/img/fav-spots/el-pasquin-de-joaco-2.avif',
          '/img/fav-spots/el-pasquin-de-joaco-3.avif',
        ],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=El%20Pasqu%C3%ADn%20de%20Joaco%2C%20Cartagena',
      },
      {
        name: 'Casa Bohème',
        concept: 'Casa Bohème is a stylish, bohemian-inspired spot in Cartagena, known for its laid-back atmosphere, creative cocktails and vibrant energy. Perfect for a relaxed yet lively night out.',
        details: [
          'DJ sets',
          '21:00 - 03:00 Hrs.',
          'Casual chic',
          'Centro Histórico - Santo Domingo square',
        ],
        images: [
          '/img/fav-spots/casa-boheme-1.avif',
          '/img/fav-spots/casa-boheme-2.avif',
          '/img/fav-spots/casa-boheme-3.avif',
        ],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Casa%20Boh%C3%AAme%2C%20Cartagena',
      },
      {
        name: 'El Barón',
        concept: 'A refined cocktail bar in Cartagena\'s historic center, known for its creative mixology, elegant atmosphere and attention to detail.',
        details: [
          'Award-winning cocktails',
          '17:00 - 01:00 Hrs.',
          'Casual',
          'Centro Histórico - San Pedro square',
        ],
        images: [
          '/img/fav-spots/el-baron-1.avif',
          '/img/fav-spots/el-baron-2.avif',
          '/img/fav-spots/el-baron-3.avif',
        ],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=El%20Bar%C3%B3n%2C%20Cartagena',
      },
      {
        name: 'Manglar',
        concept: 'A laid-back, open-air spot inspired by the Caribbean, offering a relaxed vibe, tropical drinks, and a more local, easygoing feel.',
        details: [
          'Signature cocktails',
          '15:00 - 22:00 Hrs.',
          'Casual chic',
          'Centro Histórico - San Diego square',
        ],
        images: [
          '/img/fav-spots/manglar-1.avif',
          '/img/fav-spots/manglar-2.avif',
          '/img/fav-spots/manglar-3.avif',
        ],
        mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Manglar%20Bar%20de%20Selva%20y%20Mar%2C%20Cartagena',
      },
    ],
  },
];
