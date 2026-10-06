// Product catalog.
//
// To add real images, drop files into:
//   public/images/products/   (photos)
//   public/images/sketches/   (scans of your hand drawings)
// and set `image` / `sketch` to their paths, e.g. '/images/products/no1-blade.jpg'.
// While `image` or `sketch` is null, a placeholder is shown.
//
// `sketchKind` picks the placeholder drawing: blade, mallet, fang, headcover, grip, marker, tool.

export const products = [
  {
    slug: 'big-cat',
    name: 'Big Cat',
    category: 'putter',
    price: 450,
    tagline: 'The one that started it all.',
    description:
      'A classic heel-toe weighted Anser style blade, milled from a block of 1018 carbon steel and finished by hand. Soft, quiet feel that accepts a variety of different necks and sits square every time.',
    note: 'First one I ever made',
    specs: [
      ['Material', '1018 carbon'],
      ['Head weight', '~350-370 g'],
      ['Stock Loft / Lie', '3° / 69.69°'],
      ['Neck', 'Plumber\'s, flow'],
      ['Toe hang', '¼'],
    ],
    image: '/images/products/big-cat/big-cat1.jpg',
    sketch: '/images/sketches/bigcat.jpg',
    sketchKind: 'blade',
    featured: true,
  },
  {
    slug: 'c-and-c',
    name: 'C & C',
    category: 'putter',
    price: 475,
    tagline: 'Smooth curves for smooth strokes.',
    description:
      'Sleek laguna style blade that lacks all of the straight lines of traditional designs, this is a club for an artsy putter not a robot. Pairs best with short flowneck imo, suited to a slightly more "arced" stroke',
    note: 'extra weight out back = stable',
    specs: [
      ['Material', '1018 carbon'],
      ['Head weight', '~320-340 g'],
      ['Loft / Lie', '3° / 69.69°'],
      ['Neck', 'Single bend'],
      ['Toe hang', '3/4'],
    ],
    image: '/images/products/c-and-c/candc1.jpg',
    sketch: '/images/sketches/candc.jpg',
    sketchKind: 'blade',
    featured: true,
  },
  {
    slug: 'sawhorse',
    name: 'Sawhorse',
    category: 'putter',
    price: 495,
    tagline: 'Two legs. Zero wobble.',
    description:
      'A fang-style high-MOI design named after the sawhorses it was first sketched on. Twin sightlines frame the ball for easy alignment.',
    note: 'drew this on a sawhorse, honestly',
    specs: [
      ['Material', '303 stainless'],
      ['Head weight', '370 g'],
      ['Loft / Lie', '2.5° / 70°'],
      ['Neck', 'Short slant'],
      ['Toe hang', 'Slight arc'],
    ],
    image: null,
    sketch: null,
    sketchKind: 'fang',
    featured: true,
  },
  {
    slug: 'flow-neck-blade',
    name: 'Flow Neck Blade',
    category: 'putter',
    price: 445,
    tagline: 'A blade for strong-arc strokes.',
    description:
      'Our blade body with a flow neck for more toe hang. Built for players who like to feel the face open and close.',
    note: 'more toe hang',
    specs: [
      ['Material', '303 stainless'],
      ['Head weight', '350 g'],
      ['Loft / Lie', '3° / 70°'],
      ['Neck', 'Flow'],
      ['Toe hang', '½'],
    ],
    image: null,
    sketch: null,
    sketchKind: 'blade',
    featured: false,
  },
  {
    slug: 'stitched-headcover',
    name: 'Hand-Stitched Headcover',
    category: 'accessory',
    price: 85,
    tagline: 'Leather, waxed thread, and patience.',
    description:
      'Full-grain leather headcover with a magnetic closure, cut and stitched by hand. Fits blades and most mallets.',
    note: 'every stitch by hand',
    specs: [
      ['Material', 'Full-grain leather'],
      ['Closure', 'Magnetic'],
      ['Fits', 'Blade / mid-mallet'],
    ],
    image: null,
    sketch: null,
    sketchKind: 'headcover',
    featured: true,
  },
  {
    slug: 'leather-wrap-grip',
    name: 'Leather Wrap Grip',
    category: 'accessory',
    price: 60,
    tagline: 'Old-school feel, spiral wrapped.',
    description:
      'A spiral-wrapped leather grip over a tapered underlisting. Tacky when new, better with age.',
    note: 'gets better with age',
    specs: [
      ['Material', 'Leather'],
      ['Profile', 'Pistol'],
      ['Weight', '75 g'],
    ],
    image: null,
    sketch: null,
    sketchKind: 'grip',
    featured: true,
  },
  {
    slug: 'brass-ball-marker',
    name: 'Brass Ball Marker',
    category: 'accessory',
    price: 25,
    tagline: 'Stamped by hand, one hammer strike at a time.',
    description:
      'Solid brass ball marker, hand-stamped with the shop mark. Develops its own patina in your pocket.',
    note: 'each stamp is a little different',
    specs: [
      ['Material', 'Solid brass'],
      ['Diameter', '1 in'],
    ],
    image: null,
    sketch: null,
    sketchKind: 'marker',
    featured: false,
  },
  {
    slug: 'divot-tool',
    name: 'Divot Tool',
    category: 'accessory',
    price: 35,
    tagline: 'Fix your marks. Look good doing it.',
    description:
      'Milled from the offcuts of our putter heads, so nothing in the garage goes to waste.',
    note: 'made from putter offcuts',
    specs: [
      ['Material', '303 stainless offcut'],
      ['Length', '2.75 in'],
    ],
    image: null,
    sketch: null,
    sketchKind: 'tool',
    featured: false,
  },
]

export const categories = [
  { id: 'all', label: 'Everything' },
  { id: 'putter', label: 'Putters' },
  { id: 'accessory', label: 'Accessories' },
]

export function getProduct(slug) {
  return products.find((p) => p.slug === slug)
}

export function formatPrice(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}
