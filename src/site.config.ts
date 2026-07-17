export const toolCategories = [
  {
    label: 'Compress',
    tools: [
      { name: 'Compress Image',     href: '/compress-image',        description: 'Reduce image file size while keeping quality as high as possible.', badge: 'Free' },
      { name: 'Compress to 20 KB',  href: '/compress-image-to-20kb', description: 'Compress to 20 KB — common SSC photo upload limit.', badge: 'Free' },
      { name: 'Compress to 50 KB',  href: '/compress-image-to-50kb', description: 'Compress to under 50 KB — required by many govt & job portals.', badge: 'Free' },
      { name: 'Compress to 100 KB', href: '/compress-image-to-100kb', description: 'Compress image to under 100 KB.', badge: 'Free' },
      { name: 'Compress to 200 KB', href: '/compress-image-to-200kb', description: 'Compress image to under 200 KB.', badge: 'Free' },
    ],
  },
  {
    label: 'Resize',
    tools: [
      { name: 'Resize Image',          href: '/resize-image',                    description: 'Resize to any custom width and height in pixels.', badge: 'Free' },
      { name: 'Passport Size Photo',   href: '/resize-image-to-passport-size',   description: 'Resize to 413×531 px (35×45 mm) — standard Indian passport size.', badge: 'Free' },
      { name: 'SSC Signature Resize',  href: '/signature-resizer-for-ssc',       description: 'Resize signature to SSC exam dimensions (276×118 px, max 12 KB).', badge: 'Free' },
      { name: 'Resize to 600×600',     href: '/resize-image-to-600x600',         description: 'Square resize to 600×600 px — social profiles & forms.', badge: 'Free' },
      { name: 'Resize to 200×200',     href: '/resize-image-to-200x200',         description: 'Resize to 200×200 px — avatars and thumbnails.', badge: 'Free' },
    ],
  },
  {
    label: 'Convert',
    tools: [
      { name: 'JPG to WebP', href: '/jpg-to-webp', description: 'Convert JPEG to WebP for smaller, faster web images.', badge: 'Free' },
      { name: 'PNG to WebP', href: '/png-to-webp', description: 'Convert PNG to WebP (preserves transparency).', badge: 'Free' },
      { name: 'WebP to JPG', href: '/webp-to-jpg', description: 'Convert WebP to universally supported JPEG.', badge: 'Free' },
      { name: 'WebP to PNG', href: '/webp-to-png', description: 'Convert WebP to PNG (lossless, with transparency).', badge: 'Free' },
      { name: 'JPG to PNG',  href: '/jpg-to-png',  description: 'Convert JPEG to lossless PNG.', badge: 'Free' },
      { name: 'PNG to JPG',  href: '/png-to-jpg',  description: 'Convert PNG to JPEG (smaller file size).', badge: 'Free' },
    ],
  },
] as const;

export const allTools = toolCategories.flatMap((c) => c.tools);

const siteConfig = {
  siteName: 'Snap Image Tools',
  domain: 'https://snapimagetools.com',
  tagline: 'Free image tools — compress, resize, and convert images in your browser. No uploads, 100% private.',
  primaryColor: '#7c3aed',
  gaId: '',
  adsenseId: '',
  navLinks: [
    { label: 'All Tools', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy', href: '/privacy-policy' },
    { label: 'Terms', href: '/terms' },
  ],
  toolCategories,
  tools: allTools,
} as const;

export default siteConfig;
