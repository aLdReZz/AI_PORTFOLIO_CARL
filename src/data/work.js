// ============================================================
// WORK — the filterable reel grid.
//
// HOW TO EDIT:
//  - Grid order = array order. To feature a new AI piece, add its
//    object at the TOP of `items`.
//  - Show/hide any piece with `enabled: true | false`.
//  - `category` must match one of the `filters` keys below.
//  - Each item: { id, title, category, poster, src, enabled }
//    poster = still frame shown in the grid; src = video played on click.
//
// Restaurant/food reels are kept here but disabled (off-brand for
// eCommerce). Old graphic-design work has been removed entirely.
// ============================================================

export const work = {
  label: 'Selected work',
  title: 'Short-form work I’ve shipped for brands.',
  intro:
    'Real client pieces — product ads, brand campaigns, and social edits. New AI-made work lands at the top as it ships.',

  filters: [
    { key: 'all', label: 'All' },
    { key: 'product', label: 'Product' },
    { key: 'brand', label: 'Brand' },
    { key: 'social', label: 'Social' },
  ],

  items: [
    // ---- Product ads (featured first — strongest eCommerce proof) ----
    { id: 'product-01', title: 'Under-eye beauty device', category: 'product', poster: '/assets/work/posters/product-01.jpg', src: '/assets/work/clips/product-01.mp4', enabled: true },
    { id: 'product-02', title: 'Recovery wearable', category: 'product', poster: '/assets/work/posters/product-02.jpg', src: '/assets/work/clips/product-02.mp4', enabled: true },
    { id: 'product-03', title: 'Eye-bag treatment', category: 'product', poster: '/assets/work/posters/product-03.jpg', src: '/assets/work/clips/product-03.mp4', enabled: true },
    { id: 'product-04', title: 'Home pull-up bar', category: 'product', poster: '/assets/work/posters/product-04.jpg', src: '/assets/work/clips/product-04.mp4', enabled: true },
    { id: 'product-05', title: 'Slim-can cooler', category: 'product', poster: '/assets/work/posters/product-05.jpg', src: '/assets/work/clips/product-05.mp4', enabled: true },

    // ---- Brand campaigns ----
    { id: 'brand-livechi', title: 'LiveChi × Cirrus', category: 'brand', poster: '/assets/work/posters/brand-livechi.jpg', src: '/assets/work/clips/brand-livechi.mp4', enabled: true },
    { id: 'brand-nar', title: 'NAR explainer', category: 'brand', poster: '/assets/work/posters/brand-nar.jpg', src: '/assets/work/clips/brand-nar.mp4', enabled: true },
    { id: 'brand-vesta', title: 'Vesta episode', category: 'brand', poster: '/assets/work/posters/brand-vesta.jpg', src: '/assets/work/clips/brand-vesta.mp4', enabled: true },
    { id: 'brand-cifc', title: 'CIFC showroom', category: 'brand', poster: '/assets/work/posters/brand-cifc.jpg', src: '/assets/work/clips/brand-cifc.mp4', enabled: true },

    // ---- Social / short-form edits (toggle off any that feel off-brand) ----
    { id: 'social-sports-1', title: 'NBA highlight edit', category: 'social', poster: '/assets/work/posters/social-sports-1.jpg', src: '/assets/work/clips/social-sports-1.mp4', enabled: true },
    { id: 'social-sports-4', title: 'Steph Curry edit', category: 'social', poster: '/assets/work/posters/social-sports-4.jpg', src: '/assets/work/clips/social-sports-4.mp4', enabled: true },
    { id: 'social-sports-5', title: 'LeBron playoff edit', category: 'social', poster: '/assets/work/posters/social-sports-5.jpg', src: '/assets/work/clips/social-sports-5.mp4', enabled: true },
    { id: 'social-sports-3', title: 'NFL highlight edit', category: 'social', poster: '/assets/work/posters/social-sports-3.jpg', src: '/assets/work/clips/social-sports-3.mp4', enabled: true },
    { id: 'social-sports-2', title: 'Game-day highlight', category: 'social', poster: '/assets/work/posters/social-sports-2.jpg', src: '/assets/work/clips/social-sports-2.mp4', enabled: true },
    { id: 'social-coach-2', title: 'Baseball catching drill', category: 'social', poster: '/assets/work/posters/social-coach-2.jpg', src: '/assets/work/clips/social-coach-2.mp4', enabled: true },
    { id: 'social-coach-3', title: 'Baseball fielding drill', category: 'social', poster: '/assets/work/posters/social-coach-3.jpg', src: '/assets/work/clips/social-coach-3.mp4', enabled: true },
    { id: 'social-coach-4', title: 'Baseball hitting drill', category: 'social', poster: '/assets/work/posters/social-coach-4.jpg', src: '/assets/work/clips/social-coach-4.mp4', enabled: true },

    // ---- Hidden: edgy caption, off-brand for a premium portfolio ----
    { id: 'social-coach-1', title: 'Coaching hook reel', category: 'social', poster: '/assets/work/posters/social-coach-1.jpg', src: '/assets/Video/Coach.mp4', enabled: false },

    // ---- Hidden: restaurant / food reels (off-brand for eCommerce) ----
    { id: 'food-01', title: 'Smash burger mukbang', category: 'food', src: '/assets/Video/Another day. Another Mukbang Burger. 🍔🔥Smash on one side. Soft rolls. Big bites.🔥 This is you.mp4', enabled: false },
    { id: 'food-02', title: 'Empanadas delivery', category: 'food', src: '/assets/Video/Delivery or Takeout! @empanadasunited is a Latin American, Dominican and Puerto Rican virtual di.mp4', enabled: false },
    { id: 'food-03', title: 'Chop cheese sliders', category: 'food', src: '/assets/Video/Mukbang Chop Cheese sliders topped with American cheese, onions, and secret sauce slayed between.mp4', enabled: false },
    { id: 'food-04', title: '6x6 smash burger', category: 'food', src: '/assets/Video/You must try this 6x6 Smash Burger. 🍔🔥Melted cheese doing the most.🔥 Feed the craving and get.mp4', enabled: false },
    { id: 'food-05', title: 'Free t-shirt promo', category: 'food', src: '/assets/Video/you get a shirt and you get a shirt! everyone gets a shirt! get a free t-shirt when you spend $3.mp4', enabled: false },
    { id: 'food-06', title: 'Get beasted', category: 'food', src: '/assets/Video/get beasted 🍔😎 @jesser.mp4', enabled: false },
    { id: 'food-07', title: 'Game-night order', category: 'food', src: '/assets/Video/That gathering, that superbowl party, that game night, make it easier by placing an order with a.mp4', enabled: false },
    { id: 'food-08', title: 'Restaurant reel 1', category: 'food', src: '/assets/Video/restaurant 1.mp4', enabled: false },
    { id: 'food-09', title: 'Restaurant reel 2', category: 'food', src: '/assets/Video/restaurant 4.mp4', enabled: false },
    { id: 'food-10', title: 'Restaurant reel 3', category: 'food', src: '/assets/Video/restaurant 7.mp4', enabled: false },
  ],
}
