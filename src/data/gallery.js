// Gallery contents.
//
// By default every product photo and hand sketch already referenced in
// `products.js` is collected automatically, so anything you add to the shop
// shows up here too. Add a file to `public/images/products/<slug>/` and point
// `image` (or `sketch`) at it and it appears below with no further edits.
//
// To show images that aren't tied to a product (shop shots, events, etc.),
// drop them in `public/images/gallery/` and list them in `extraImages` below.
// Paths are relative to `public/` (no leading slash) and resolved via `asset()`.

import { products } from './products'

// Loose images not attached to a product. Example:
//   { src: 'images/gallery/bench.jpg', alt: 'The bench mid-build', label: 'Bench' }
export const extraImages = [
  { src: 'images/products/big-cat/big-cat2.jpg', alt: 'Big cat photo', label: 'Big Cat', keys: ['big-cat', 'putter', 'picture'] },
  { src: 'images/products/big-cat/big-cat3.jpg', alt: 'Big cat photo', label: 'Big Cat', keys: ['big-cat', 'putter', 'picture'] },
  { src: 'images/products/big-cat/big-cat4.jpg', alt: 'Big cat photo', label: 'Big Cat', keys: ['big-cat', 'putter', 'picture'] },
  { src: 'images/products/big-cat/big-cat5.jpg', alt: 'Big cat photo', label: 'Big Cat', keys: ['big-cat', 'putter', 'picture'] },
  { src: 'images/products/big-cat/big-cat6.jpg', alt: 'Big cat photo', label: 'Big Cat', keys: ['big-cat', 'putter', 'picture'] },
  { src: 'images/products/big-cat/big-cat7.jpg', alt: 'Big cat photo', label: 'Big Cat', keys: ['big-cat', 'putter', 'picture'] },
  { src: 'images/products/big-cat/big-cat8.jpg', alt: 'Big cat photo', label: 'Big Cat', keys: ['big-cat', 'putter', 'picture'] },
  { src: 'images/products/big-cat/big-cat9.webp', alt: 'Big cat photo', label: 'Big Cat', keys: ['big-cat', 'putter', 'picture'] },
  { src: 'images/products/big-cat/big-cat10.jpg', alt: 'Big cat photo', label: 'Big Cat', keys: ['big-cat', 'putter', 'picture'] },
  { src: 'images/products/big-cat/big-cat11.jpg', alt: 'Big cat photo', label: 'Big Cat', keys: ['big-cat', 'putter', 'picture'] },
  { src: 'images/products/big-cat/big-cat12.webp', alt: 'Big cat photo', label: 'Big Cat', keys: ['big-cat', 'putter', 'picture'] },
  { src: 'images/products/big-cat/big-cat13.webp', alt: 'Big cat photo', label: 'Big Cat', keys: ['big-cat', 'putter', 'picture'] },
  { src: 'images/products/big-cat/big-cat14.webp', alt: 'Big cat photo', label: 'Big Cat', keys: ['big-cat', 'putter', 'picture'] },
  { src: 'images/products/big-cat/big-cat15.jpg', alt: 'Big cat photo', label: 'Big Cat', keys: ['big-cat', 'putter', 'picture'] },
  { src: 'images/products/big-cat/big-cat16.jpg', alt: 'Big cat photo', label: 'Big Cat', keys: ['big-cat', 'putter', 'picture'] },
  { src: 'images/products/big-cat/big-cat17.jpg', alt: 'Big cat photo', label: 'Big Cat', keys: ['big-cat', 'putter', 'picture'] },
  { src: 'images/products/big-cat/big-cat18.webp', alt: 'Big cat photo', label: 'Big Cat', keys: ['big-cat', 'putter', 'picture'] },
  { src: 'images/products/big-cat/big-cat19.webp', alt: 'Big cat photo', label: 'Big Cat', keys: ['big-cat', 'putter', 'picture'] },
  { src: 'images/products/big-cat/big-cat20.webp', alt: 'Big cat photo', label: 'Big Cat', keys: ['big-cat', 'putter', 'picture'] },
  { src: 'images/products/big-cat/big-cat21.webp', alt: 'Big cat photo', label: 'Big Cat', keys: ['big-cat', 'putter', 'picture'] },
  { src: 'images/products/c-and-c/candc1.jpg', alt: 'C and C photo', label: 'C&C', keys: ['c-and-c', 'putter', 'picture'] },
  { src: 'images/products/c-and-c/candc2.jpg', alt: 'C and C photo', label: 'C&C', keys: ['c-and-c', 'putter', 'picture'] },
  { src: 'images/products/c-and-c/candc3.jpg', alt: 'C and C photo', label: 'C&C', keys: ['c-and-c', 'putter', 'picture'] },
  { src: 'images/products/c-and-c/candc4.jpg', alt: 'C and C photo', label: 'C&C', keys: ['c-and-c', 'putter', 'picture'] },
  { src: 'images/products/c-and-c/candc5.jpg', alt: 'C and C photo', label: 'C&C', keys: ['c-and-c', 'putter', 'picture'] },
  { src: 'images/products/c-and-c/candc6.jpg', alt: 'C and C photo', label: 'C&C', keys: ['c-and-c', 'putter', 'picture'] },
  { src: 'images/products/c-and-c/candc7.jpg', alt: 'C and C photo', label: 'C&C', keys: ['c-and-c', 'putter', 'picture'] },
  { src: 'images/products/c-and-c/candc8.webp', alt: 'C and C photo', label: 'C&C', keys: ['c-and-c', 'putter', 'picture'] },
  { src: 'images/products/c-and-c/candc9.webp', alt: 'C and C photo', label: 'C&C', keys: ['c-and-c', 'putter', 'picture'] },
  { src: 'images/products/c-and-c/candc10.jpg', alt: 'C and C photo', label: 'C&C', keys: ['c-and-c', 'putter', 'picture'] },
  { src: 'images/products/c-and-c/candc11.jpg', alt: 'C and C photo', label: 'C&C', keys: ['c-and-c', 'putter', 'picture'] },
  { src: 'images/products/c-and-c/candc12.webp', alt: 'C and C photo', label: 'C&C', keys: ['c-and-c', 'putter', 'picture'] },
  { src: 'images/products/c-and-c/candc13.webp', alt: 'C and C photo', label: 'C&C', keys: ['c-and-c', 'putter', 'picture'] },
  { src: 'images/products/c-and-c/candc14.webp', alt: 'C and C photo', label: 'C&C', keys: ['c-and-c', 'putter', 'picture'] },
  { src: 'images/products/crosby/crosby1.jpg', alt: 'Crosby photo', label: 'Crosby', keys: ['crosby', 'putter', 'picture'] },
  { src: 'images/products/crosby/crosby2.jpg', alt: 'Crosby photo', label: 'Crosby', keys: ['crosby', 'putter', 'picture'] },
  { src: 'images/products/crosby/crosby3.webp', alt: 'Crosby photo', label: 'Crosby', keys: ['crosby', 'putter', 'picture'] },
  { src: 'images/products/crosby/crosby4.webp', alt: 'Crosby photo', label: 'Crosby', keys: ['crosby', 'putter', 'picture'] },
  { src: 'images/products/crosby/crosby5.webp', alt: 'Crosby photo', label: 'Crosby', keys: ['crosby', 'putter', 'picture'] },
  { src: 'images/products/crosby/crosby6.webp', alt: 'Crosby photo', label: 'Crosby', keys: ['crosby', 'putter', 'picture'] },
  { src: 'images/products/2step/2step1.webp', alt: '2 Step photo', label: '2 Step', keys: ['2step', 'putter', 'picture'] },
  { src: 'images/products/2step/2step2.webp', alt: '2 Step photo', label: '2 Step', keys: ['2step', 'putter', 'picture'] },
  { src: 'images/products/2step/2step3.jpg', alt: '2 Step photo', label: '2 Step', keys: ['2step', 'putter', 'picture'] },
  { src: 'images/products/2step/2step4.jpg', alt: '2 Step photo', label: '2 Step', keys: ['2step', 'putter', 'picture'] },
  { src: 'images/products/2step/2step5.jpg', alt: '2 Step photo', label: '2 Step', keys: ['2step', 'putter', 'picture'] },
  { src: 'images/products/2step/2step6.webp', alt: '2 Step photo', label: '2 Step', keys: ['2step', 'putter', 'picture'] },
  { src: 'images/products/2step/2step7.jpg', alt: '2 Step photo', label: '2 Step', keys: ['2step', 'putter', 'picture'] },
  { src: 'images/products/gribble/gribble1.webp', alt: 'Gribble photo', label: 'Gribble', keys: ['gribble', 'putter', 'picture'] },
  { src: 'images/products/gribble/gribble2.webp', alt: 'Gribble photo', label: 'Gribble', keys: ['gribble', 'putter', 'picture'] },
  { src: 'images/products/gribble/gribble3.jpg', alt: 'Gribble photo', label: 'Gribble', keys: ['gribble', 'putter', 'picture'] },
  { src: 'images/products/gribble/gribble4.jpg', alt: 'Gribble photo', label: 'Gribble', keys: ['gribble', 'putter', 'picture'] },
  { src: 'images/products/malone/malone1.webp', alt: 'Malone photo', label: 'Malone', keys: ['malone', 'putter', 'picture'] },
  { src: 'images/products/malone/malone2.webp', alt: 'Malone photo', label: 'Malone', keys: ['malone', 'putter', 'picture'] },
  { src: 'images/products/malone/malone3.webp', alt: 'Malone photo', label: 'Malone', keys: ['malone', 'putter', 'picture'] },
]

function fromProducts() {
  const items = []
  for (const p of products) {
    if (p.image) {
      items.push({
        src: p.image,
        alt: `${p.name} putter photo`,
        label: p.name,
        caption: p.tagline || p.name,
        kind: 'photo',
      })
    }
    if (p.sketch) {
      items.push({
        src: p.sketch,
        alt: `${p.name} design sketch`,
        label: `${p.name} — sketch`,
        caption: p.note || p.tagline || p.name,
        kind: 'sketch',
      })
    }
  }
  return items
}

export const galleryImages = [...extraImages]
