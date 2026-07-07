// ============================================================
// WORK - the filterable reel grid.
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
  title: 'AI-generated work + organic edits.',
  intro:
    'AI video ads sit alongside organic social edits I\'ve cut myself. Two sides of the same skill, content that actually performs.',

  filters: [
    { key: 'all', label: 'All' },
    { key: 'ai', label: 'AI Videos' },
    { key: 'product', label: 'Product' },
    { key: 'brand', label: 'Brand' },
    { key: 'social', label: 'Social' },
  ],

  items: [
    // ---- AI-generated videos (top - newest AI work first) ----
    { id: 'ai-video-01', title: 'AI product showcase', category: 'ai', poster: '/assets/work/posters/ai-video-01.jpg', src: '/assets/work/clips/ai-video-01.mp4', enabled: true, stats: { views: '1.8M', ctr: '4.2%', engagement: '6.1%', retention: '68%', platform: 'TikTok, Meta' } },
    { id: 'ai-video-02', title: 'AI Bootcamp - wins', category: 'ai', poster: '/assets/work/posters/ai-video-02.jpg', src: '/assets/work/clips/ai-video-02.mp4', enabled: true, stats: { views: '890K', ctr: '3.8%', engagement: '5.4%', retention: '72%', platform: 'TikTok' } },
    { id: 'ai-video-03', title: 'AI Bootcamp - wins 2', category: 'ai', poster: '/assets/work/posters/ai-video-03.jpg', src: '/assets/work/clips/ai-video-03.mp4', enabled: true, stats: { views: '2.1M', ctr: '4.5%', engagement: '7.2%', retention: '65%', platform: 'Meta, TikTok' } },
    { id: 'ai-video-05', title: 'AI Bootcamp - competitions', category: 'ai', poster: '/assets/work/posters/ai-video-05.jpg', src: '/assets/work/clips/ai-video-05.mp4', enabled: true, stats: { views: '750K', ctr: '2.9%', engagement: '5.8%', retention: '74%', platform: 'TikTok' } },
    { id: 'ai-video-06', title: 'AI Bootcamp - feedback session', category: 'ai', poster: '/assets/work/posters/ai-video-06.jpg', src: '/assets/work/clips/ai-video-06.mp4', enabled: true, stats: { views: '3.4M', ctr: '5.1%', engagement: '8.3%', retention: '62%', platform: 'Meta, TikTok' } },
    { id: 'ai-video-07', title: 'AI Bootcamp - feedback 2', category: 'ai', poster: '/assets/work/posters/ai-video-07.jpg', src: '/assets/work/clips/ai-video-07.mp4', enabled: true, stats: { views: '560K', ctr: '2.4%', engagement: '4.1%', retention: '78%', platform: 'TikTok' } },
    { id: 'ai-video-08', title: 'AI Bootcamp - feedback 3', category: 'ai', poster: '/assets/work/posters/ai-video-08.jpg', src: '/assets/work/clips/ai-video-08.mp4', enabled: true, stats: { views: '1.5M', ctr: '3.6%', engagement: '5.5%', retention: '69%', platform: 'Meta' } },
    { id: 'ai-video-09', title: 'AI Bootcamp - feedback 4', category: 'ai', poster: '/assets/work/posters/ai-video-09.jpg', src: '/assets/work/clips/ai-video-09.mp4', enabled: true, stats: { views: '920K', ctr: '4.0%', engagement: '6.7%', retention: '73%', platform: 'TikTok, Meta' } },
    { id: 'ai-video-10', title: 'AI UGC testing 1', category: 'ai', poster: '/assets/work/posters/ai-video-10.jpg', src: '/assets/work/clips/ai-video-10.mp4', enabled: true, stats: { views: '2.8M', ctr: '4.8%', engagement: '7.5%', retention: '66%', platform: 'TikTok' } },
    { id: 'ai-video-11', title: 'AI UGC testing 2', category: 'ai', poster: '/assets/work/posters/ai-video-11.jpg', src: '/assets/work/clips/ai-video-11.mp4', enabled: true, stats: { views: '1.1M', ctr: '3.3%', engagement: '5.2%', retention: '70%', platform: 'Meta, TikTok' } },

    // ---- Product ads (featured first - strongest eCommerce proof) ----
    { id: 'product-01', title: 'Under-eye beauty device', category: 'product', poster: '/assets/work/posters/product-01.jpg', src: '/assets/work/clips/product-01.mp4', enabled: true, stats: { views: '4.2M', ctr: '6.8%', convRate: '2.3%', retention: '64%', platform: 'Meta, TikTok' } },
    { id: 'product-02', title: 'Recovery wearable', category: 'product', poster: '/assets/work/posters/product-02.jpg', src: '/assets/work/clips/product-02.mp4', enabled: true, stats: { views: '3.1M', ctr: '5.2%', convRate: '1.8%', retention: '71%', platform: 'TikTok, Meta' } },
    { id: 'product-03', title: 'Eye-bag treatment', category: 'product', poster: '/assets/work/posters/product-03.jpg', src: '/assets/work/clips/product-03.mp4', enabled: true, stats: { views: '5.7M', ctr: '7.1%', convRate: '3.1%', retention: '58%', platform: 'Meta' } },
    { id: 'product-04', title: 'Home pull-up bar', category: 'product', poster: '/assets/work/posters/product-04.jpg', src: '/assets/work/clips/product-04.mp4', enabled: true, stats: { views: '2.3M', ctr: '4.5%', convRate: '1.5%', retention: '74%', platform: 'TikTok' } },
    { id: 'product-05', title: 'Slim-can cooler', category: 'product', poster: '/assets/work/posters/product-05.jpg', src: '/assets/work/clips/product-05.mp4', enabled: true, stats: { views: '6.8M', ctr: '8.2%', convRate: '3.8%', retention: '61%', platform: 'Meta, TikTok' } },

    // ---- Brand campaigns ----
    { id: 'brand-livechi', title: 'LiveChi × Cirrus', category: 'brand', poster: '/assets/work/posters/brand-livechi.jpg', src: '/assets/work/clips/brand-livechi.mp4', enabled: true, stats: { views: '12.4M', engagement: '5.7%', ctr: '3.2%', retention: '76%', platform: 'Meta, TikTok, YT Shorts' } },
    { id: 'brand-nar', title: 'NAR explainer', category: 'brand', poster: '/assets/work/posters/brand-nar.jpg', src: '/assets/work/clips/brand-nar.mp4', enabled: true, stats: { views: '8.1M', engagement: '4.5%', ctr: '2.8%', retention: '82%', platform: 'Meta, LinkedIn' } },
    { id: 'brand-vesta', title: 'Vesta episode', category: 'brand', poster: '/assets/work/posters/brand-vesta.jpg', src: '/assets/work/clips/brand-vesta.mp4', enabled: true, stats: { views: '15.2M', engagement: '6.1%', ctr: '3.5%', retention: '79%', platform: 'TikTok, Meta, YT Shorts' } },
    { id: 'brand-cifc', title: 'CIFC showroom', category: 'brand', poster: '/assets/work/posters/brand-cifc.jpg', src: '/assets/work/clips/brand-cifc.mp4', enabled: true, stats: { views: '6.7M', engagement: '7.3%', ctr: '4.1%', retention: '68%', platform: 'Meta, TikTok' } },

    // ---- Social / short-form edits (toggle off any that feel off-brand) ----
    { id: 'social-sports-1', title: 'NBA highlight edit', category: 'social', poster: '/assets/work/posters/social-sports-1.jpg', src: '/assets/work/clips/social-sports-1.mp4', enabled: true, stats: { views: '18.5M', engagement: '12.4%', retention: '54%', platform: 'TikTok, Instagram' } },
    { id: 'social-sports-4', title: 'Steph Curry edit', category: 'social', poster: '/assets/work/posters/social-sports-4.jpg', src: '/assets/work/clips/social-sports-4.mp4', enabled: true, stats: { views: '22.1M', engagement: '14.8%', retention: '48%', platform: 'TikTok' } },
    { id: 'social-sports-5', title: 'LeBron playoff edit', category: 'social', poster: '/assets/work/posters/social-sports-5.jpg', src: '/assets/work/clips/social-sports-5.mp4', enabled: true, stats: { views: '31.6M', engagement: '16.2%', retention: '52%', platform: 'TikTok, Instagram' } },
    { id: 'social-sports-3', title: 'NFL highlight edit', category: 'social', poster: '/assets/work/posters/social-sports-3.jpg', src: '/assets/work/clips/social-sports-3.mp4', enabled: true, stats: { views: '14.2M', engagement: '11.5%', retention: '58%', platform: 'Instagram, TikTok' } },
    { id: 'social-sports-2', title: 'Game-day highlight', category: 'social', poster: '/assets/work/posters/social-sports-2.jpg', src: '/assets/work/clips/social-sports-2.mp4', enabled: true, stats: { views: '9.8M', engagement: '9.8%', retention: '61%', platform: 'TikTok' } },
    { id: 'social-coach-2', title: 'Baseball catching drill', category: 'social', poster: '/assets/work/posters/social-coach-2.jpg', src: '/assets/work/clips/social-coach-2.mp4', enabled: true, stats: { views: '4.5M', engagement: '7.2%', retention: '73%', platform: 'Instagram, TikTok' } },
    { id: 'social-coach-3', title: 'Baseball fielding drill', category: 'social', poster: '/assets/work/posters/social-coach-3.jpg', src: '/assets/work/clips/social-coach-3.mp4', enabled: true, stats: { views: '3.2M', engagement: '6.8%', retention: '76%', platform: 'TikTok, Instagram' } },
    { id: 'social-coach-4', title: 'Baseball hitting drill', category: 'social', poster: '/assets/work/posters/social-coach-4.jpg', src: '/assets/work/clips/social-coach-4.mp4', enabled: true, stats: { views: '5.1M', engagement: '8.1%', retention: '70%', platform: 'TikTok' } },

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
