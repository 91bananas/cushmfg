// Product catalog.
//
// To add real images, drop files into:
//   public/images/products/   (photos)
//   public/images/sketches/   (scans of your hand drawings)
// and set `image` / `sketch` to their paths, e.g. 'images/products/no1-blade.jpg'.
// Paths are relative to `public/` (no leading slash) and resolved via `asset()`.
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
      ['Neck', 'Plumber\'s or Flow'],
      ['Toe hang', '¼'],
    ],
    image: 'images/products/big-cat/big-cat1.jpg',
    sketch: 'images/sketches/bigcat.jpg',
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
      ['Neck', 'Flow or Plumber\'s'],
      ['Toe hang', '3/4'],
    ],
    image: 'images/products/c-and-c/candc1.jpg',
    sketch: 'images/sketches/candc.jpg',
    sketchKind: 'blade',
    featured: true,
  },
  {
    slug: 'gribble',
    name: 'Gribble',
    category: 'putter',
    price: 425,
    tagline: 'Another blade...',
    description:
      'Another classic blade design that was requested by a client, so on to the books it goes! I can\'t lie, this is my least favorite shape :D',
    note: '',
    specs: [
      ['Material', '1018 carbon'],
      ['Head weight', '~350-370 g'],
      ['Loft / Lie', '3° / 69.69°'],
      ['Neck', 'Any'],
      ['Toe hang', 'Depends on neck'],
    ],
    image: 'images/products/gribble/gribble1.webp',
    sketch: 'images/sketches/gribble.jpg',
    sketchKind: 'fang',
    featured: true,
  },
  {
    slug: 'crosby',
    name: 'Crosby',
    category: 'putter',
    price: 450,
    tagline: 'A hockey stick-inspired blade.',
    description:
      'The most classic club head, high toe, low heel, reminiscent of a hockey stick. Imagine yourself as Sid the Kid going heel-to-heel on your way to a cup while stroking this bad boy.',
    note: 'more toe hang',
    specs: [
      ['Material', '1018 carbon'],
      ['Head weight', '310-350 g'],
      ['Loft / Lie', '3° / 69.69°'],
      ['Neck', 'Fixed with BB&Fco ferrule'],
      ['Toe hang', '3/4 to full'],
    ],
    image: 'images/products/crosby/crosby1.jpg',
    sketch: 'images/sketches/crosby.jpg',
    sketchKind: 'blade',
    featured: false,
  },
  {
    slug: 'hoover',
    name: 'Hoover',
    category: 'putter',
    price: 450,
    tagline: 'Another. Freaking. Blade...',
    description:
      'This one has always reminded me of two quarter pipes with a gap between them. That gap is where the magic happens on the green.',
    note: 'A golf club for rippers',
    specs: [
      ['Material', '1018 carbon'],
      ['Head weight', '330-360 g'],
      ['Loft / Lie', '3° / 69.69°'],
      ['Neck', 'Plumber\'s'],
      ['Toe hang', '1/2 to 3/4'],
    ],
    image: null,
    sketch: 'images/sketches/hoover.png',
    sketchKind: 'blade',
    featured: false,
  },
  {
    slug: '2-step',
    name: '2-Step',
    category: 'putter',
    price: 475,
    tagline: 'A two-step blade, two perfectly aligned steps',
    description:
      'A heavier more squared blade with two distinct curved and offset steps to give the toe some weight to account for the neck',
    note: 'A golf club for rippers',
    specs: [
      ['Material', '1018 carbon, 110 copper'],
      ['Head weight', '340-380 g'],
      ['Loft / Lie', '3° / 69.69°'],
      ['Neck', 'Plumber\'s'],
      ['Toe hang', '1/2 to 3/4'],
    ],
    image: 'images/products/2step/2step2.webp',
    sketch: 'images/sketches/2-step.jpg',
    sketchKind: 'blade',
    featured: false,
  },
  {
    slug: 'malone',
    name: 'Malone',
    category: 'putter',
    price: 475,
    tagline: 'Our first mid-mallet',
    description:
      'A smooth rounded mid-mallet design with a balanced weight distribution, providing stability and control on the green.',
    note: 'A golf club for rippers',
    specs: [
      ['Material', '1018 carbon'],
      ['Head weight', '340-380 g'],
      ['Loft / Lie', '3° / 69.69°'],
      ['Neck', 'Plumber\'s'],
      ['Toe hang', 'Face-Balanced to 3/4'],
    ],
    image: 'images/products/malone/malone1.webp',
    sketch: 'images/sketches/malone.jpg',
    sketchKind: 'blade',
    featured: false,
  },
  {
    slug: 'headcover',
    name: 'Hand-Stitched Headcover',
    category: 'accessory',
    price: 85,
    tagline: 'Leather, waxed thread, and all the patience in the world.',
    description:
      'Full-grain leather headcover with a magnetic closure, cut and stitched by hand. Fits blades and most mid-mallets.',
    note: 'every cut and stitch by hand',
    specs: [
      ['Material', 'Full-grain leather'],
      ['Closure', 'Magnetic'],
      ['Fits', 'Blade / mid-mallet'],
    ],
    image: null,
    sketch: 'images/sketches/headcover.png',
    sketchKind: 'headcover',
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
