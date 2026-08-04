import { Routes } from '@angular/router';

/** Slugs of every published post. Mirrors BLOG_POSTS in blog.data.ts; kept as
 *  plain strings so the routing table does not pull blog content into the
 *  initial bundle. */
const BLOG_SLUGS = [
  '10-things-to-do-cartagena',
  'bachelor-bachelorette-cartagena-guide',
  'rosario-islands-day-trip-guide',
  'honeymoon-cartagena-guide',
  'best-restaurants-cartagena',
  'group-travel-colombia-guide'
];

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent)
  },
  {
    path: 'experiences',
    loadComponent: () => import('./pages/experiences/experiences.component').then(m => m.ExperiencesComponent)
  },
  {
    path: 'boats',
    loadComponent: () => import('./pages/boats/boats.component').then(m => m.BoatsComponent)
  },
  {
    path: 'properties',
    loadComponent: () => import('./pages/property/property.component').then(m => m.PropertyComponent)
  },
  {
    // Retired page — the villas listings now live on /properties.
    path: 'private-villa',
    redirectTo: 'properties',
    pathMatch: 'full'
  },
  {
    path: 'experiences/island-experience',
    loadComponent: () => import('./pages/island-experience/island-experience.component').then(m => m.IslandExperienceComponent)
  },
  {
    path: 'experiences/cool-tour',
    loadComponent: () => import('./pages/cool-tour/cool-tour.component').then(m => m.CoolTourComponent)
  },
  {
    path: 'experiences/eat-and-explore',
    loadComponent: () => import('./pages/eat-and-explore/eat-and-explore.component').then(m => m.EatAndExploreComponent)
  },
  {
    path: 'experiences/city-tour',
    loadComponent: () => import('./pages/city-tour/city-tour.component').then(m => m.CityTourComponent)
  },
  {
    path: 'experiences/vintage-car-tour',
    loadComponent: () => import('./pages/vintage-car-tour/vintage-car-tour.component').then(m => m.VintageCarTourComponent)
  },
  {
    path: 'experiences/palenque-tour',
    loadComponent: () => import('./pages/palenque-tour/palenque-tour.component').then(m => m.PalenqueTourComponent)
  },
  {
    path: 'experiences/cooking-class',
    loadComponent: () => import('./pages/cooking-class/cooking-class.component').then(m => m.CookingClassComponent)
  },
  {
    path: 'experiences/rum-tasting',
    loadComponent: () => import('./pages/rum-tasting/rum-tasting.component').then(m => m.RumTastingComponent)
  },
  {
    path: 'experiences/salsa-classes',
    loadComponent: () => import('./pages/salsa-classes/salsa-classes.component').then(m => m.SalsaClassesComponent)
  },
  {
    path: 'experiences/craft-your-own-sip',
    loadComponent: () => import('./pages/craft-your-own-sip/craft-your-own-sip.component').then(m => m.CraftYourOwnSipComponent)
  },
  {
    path: 'experiences/coffee-tasting',
    loadComponent: () => import('./pages/coffee-tasting/coffee-tasting.component').then(m => m.CoffeeTastingComponent)
  },
  {
    path: 'experiences/cartagena-corner',
    loadComponent: () => import('./pages/cartagena-corner/cartagena-corner.component').then(m => m.CartagenaCornerComponent)
  },
  {
    path: 'experiences/atv-tierra-bomba',
    loadComponent: () => import('./pages/atv-tierra-bomba/atv-tierra-bomba.component').then(m => m.AtvTierraBombaComponent)
  },
  {
    path: 'experiences/sport-fishing',
    loadComponent: () => import('./pages/sport-fishing/sport-fishing.component').then(m => m.SportFishingComponent)
  },
  {
    path: 'experiences/traditional-fishing',
    loadComponent: () => import('./pages/traditional-fishing/traditional-fishing.component').then(m => m.TraditionalFishingComponent)
  },
  {
    path: 'travel-guide',
    loadComponent: () => import('./pages/travel-guide/travel-guide.component').then(m => m.TravelGuideComponent)
  },
  {
    path: 'travel-guide/mulata-fav-spots',
    loadComponent: () => import('./pages/fav-spots/fav-spots.component').then(m => m.FavSpotsComponent)
  },
  // Each blog post is a concrete route rather than 'travel-guide/:slug'. A
  // parameterised route cannot be enumerated by the prerenderer, so those pages
  // would ship as an empty shell. Keep this list in sync with BLOG_POSTS.
  ...BLOG_SLUGS.map((slug) => ({
    path: `travel-guide/${slug}`,
    data: { slug },
    loadComponent: () => import('./pages/blog-post/blog-post.component').then(m => m.BlogPostComponent)
  })),
  {
    // Catch-all — must stay last. Without it, unknown URLs threw NG04002 and
    // rendered an empty shell (nav + footer only).
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];
