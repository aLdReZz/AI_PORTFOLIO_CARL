// ============================================================
// SITE CONTENT — edit copy here, no component code needed.
// ============================================================

export const site = {
  name: 'Carl Sanchez',

  // Links reused across the site
  links: {
    upwork: 'https://www.upwork.com/freelancers/carlsanchez',
    email: 'sanchez.carljun@gmail.com',
    whatsapp: 'https://api.whatsapp.com/send?phone=639760020211&text=Hi%20Carl%2C%20I%27d%20like%20to%20talk%20about%20a%20project.',
    phone: '+63 976 002 0211',
    linkedin: 'https://www.linkedin.com/in/carl-jun-sanchez-4b201316b/',
    cv: '/assets/pdf/CarlSanchez_CV.pdf',
  },

  // ---- HERO (cinematic split) ----
  hero: {
    kicker: 'AI video ads · eCommerce',
    headline: 'Product ads with a cinematic finish.',
    subhead:
      'AI product visuals and short-form ads for TikTok, Reels, and Shorts — generated, shot, and edited end to end. Built to stop the scroll and sell.',
    primaryCta: { label: 'Work with me', href: 'https://www.upwork.com/freelancers/carlsanchez' },
    secondaryCta: { label: 'View work', href: '#work' },
    // The autoplaying hero reel. Swap src/poster to feature a different piece.
    reel: {
      src: '/assets/hero/hero-reel.mp4',
      poster: '/assets/hero/hero-poster.jpg',
      label: 'Reel 01',
      caption: 'LiveChi × Cirrus — brand campaign',
    },
    // Subtle AI-stack strip shown under the pitch.
    tools: ['Veo 3.1', 'Kling', 'Higgsfield', 'Nano Banana', 'CapCut'],
  },
};
