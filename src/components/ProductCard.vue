<script setup>
import PhotoFrame from './PhotoFrame.vue'
import ProductSketch from './ProductSketch.vue'
import { formatPrice } from '@/data/products'
import { asset } from '@/utils/asset'

defineProps({
  product: { type: Object, required: true },
  index: { type: Number, default: 0 },
})
</script>

<template>
  <RouterLink :to="`/shop/${product.slug}`" class="card sketch-border" data-test="product-card">
    <div class="card__media">
      <PhotoFrame
        class="card__photo"
        :src="asset(product.image)"
        :alt="product.name"
        :label="product.name"
      />
      <!-- the hand-drawn sketch slides over the photo on hover -->
      <div class="card__sketch">
        <ProductSketch :src="asset(product.sketch)" :kind="product.sketchKind" :alt="`Sketch of ${product.name}`" />
        <span class="card__sketch-label hand">the original sketch</span>
      </div>
      <span class="card__num hand">No. {{ String(index + 1).padStart(2, '0') }}</span>
    </div>
    <div class="card__body">
      <div class="card__row">
        <h3>{{ product.name }}</h3>
        <span class="card__price">{{ formatPrice(product.price) }}</span>
      </div>
      <p>{{ product.tagline }}</p>
    </div>
  </RouterLink>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  background: var(--paper);
  border-radius: var(--radius);
  text-decoration: none;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: rotate(-0.6deg) translateY(-4px);
}

.card__media {
  position: relative;
  aspect-ratio: 4 / 4;
  margin: 10px 10px 0;
  border-radius: 3px;
  overflow: hidden;
}

.card__sketch {
  position: absolute;
  inset: 0;
  padding: 8%;
  background:
    linear-gradient(var(--grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid) 1px, transparent 1px),
    #fbf8f1;
  background-size: 18px 18px;
  clip-path: inset(0 0 0 100%);
  transition: clip-path 0.45s cubic-bezier(0.7, 0, 0.2, 1);
}

.card:hover .card__sketch,
.card:focus-visible .card__sketch {
  clip-path: inset(0 0 0 0);
}

.card__sketch-label {
  position: absolute;
  left: 12px;
  bottom: 8px;
  font-size: 1.2rem;
  color: var(--marker);
}

.card__num {
  position: absolute;
  top: 8px;
  left: 12px;
  font-size: 1.25rem;
  color: var(--ink);
  background: var(--tape);
  padding: 0 8px;
  transform: rotate(-4deg);
}

.card__body {
  padding: 16px 18px 20px;
}

.card__row {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
}

.card__row h3 {
  margin: 0 0 4px;
}

.card__price {
  font-family: var(--font-display);
  font-weight: 700;
  white-space: nowrap;
}

.card__body p {
  margin: 0;
  color: var(--ink-soft);
  font-size: 0.95rem;
}
</style>
