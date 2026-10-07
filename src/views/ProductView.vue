<script setup>
import { computed } from 'vue'
import PhotoFrame from '@/components/PhotoFrame.vue'
import ProductSketch from '@/components/ProductSketch.vue'
import ProductCard from '@/components/ProductCard.vue'
import NotFoundView from './NotFoundView.vue'
import { products, getProduct, formatPrice } from '@/data/products'
import { site } from '@/data/site'
import { asset } from '@/utils/asset'

const props = defineProps({ slug: { type: String, required: true } })

const product = computed(() => getProduct(props.slug))
const related = computed(() =>
  products
    .filter((p) => p.category === product.value?.category && p.slug !== props.slug)
    .slice(0, 3),
)
</script>

<template>
  <NotFoundView v-if="!product" />
  <div v-else>
    <section class="section product">
      <div class="wrap">
        <nav class="crumbs" aria-label="Breadcrumb">
          <RouterLink to="/shop">Shop</RouterLink>
          <span aria-hidden="true">/</span>
          <RouterLink :to="`/shop?c=${product.category}`">
            {{ product.category === 'putter' ? 'Putters' : 'Accessories' }}
          </RouterLink>
        </nav>

        <div class="product__grid">
          <div class="product__media">
            <PhotoFrame
              class="product__photo sketch-border"
              :src="asset(product.image)"
              :alt="product.name"
              :label="`Photo of the ${product.name}`"
            />
            <div class="product__sketch taped">
              <ProductSketch
                :src="asset(product.sketch)"
                :kind="product.sketchKind"
                :alt="`Original hand-drawn sketch of the ${product.name}`"
                :note="product.note"
              />
              <!-- <span class="product__sketch-tag hand">the original sketch</span> -->
            </div>
          </div>

          <div class="product__info">
            <h1>{{ product.name }}</h1>
            <p class="product__price">{{ formatPrice(product.price) }}</p>
            <p class="lede">{{ product.tagline }}</p>
            <p>{{ product.description }}</p>

            <dl class="specs">
              <template v-for="[label, value] in product.specs" :key="label">
                <dt>{{ label }}</dt>
                <dd>{{ value }}</dd>
              </template>
            </dl>

            <div class="product__actions">
              <RouterLink :to="{ path: '/custom', query: { model: product.slug } }" class="btn">
                Order this {{ product.category === 'putter' ? 'putter' : 'piece' }}
              </RouterLink>
              <RouterLink to="/custom" class="btn btn--ghost">Ask a question</RouterLink>
            </div>
            <p class="hand-note product__lead">
              made to order — usually ships in {{ site.leadTime }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section v-if="related.length" class="section related">
      <div class="wrap">
        <span class="eyebrow">Also on the bench</span>
        <h2>You might also like</h2>
        <div class="grid">
          <ProductCard v-for="(p, i) in related" :key="p.slug" :product="p" :index="i" />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.product {
  padding-top: 40px;
}

.crumbs {
  display: flex;
  gap: 10px;
  margin-bottom: 32px;
  font-size: 0.9rem;
  color: var(--ink-soft);
}

.crumbs a {
  text-decoration: none;
}

.crumbs a:hover {
  text-decoration: underline;
}

.product__grid {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: clamp(32px, 5vw, 72px);
  align-items: start;
}

.product__photo {
  aspect-ratio: 4 / 4;
  border-radius: var(--radius);
}

.product__sketch {
  position: relative;
  width: 82%;
  aspect-ratio: 4 / 4;
  margin: -48px 0 0 auto;
  padding: 6%;
  background:
    linear-gradient(var(--grid) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid) 1px, transparent 1px),
    #fbf8f1;
  background-size: 18px 18px;
  box-shadow: 0 18px 36px -18px rgba(29, 28, 26, 0.4);
  transform: rotate(-2deg);
  z-index: 3;
}

.product__sketch-tag {
  position: absolute;
  left: 14px;
  bottom: 8px;
  font-size: 1.15rem;
  color: var(--ink-soft);
}

.product__info h1 {
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  margin-bottom: 0.15em;
}

.product__price {
  font-family: var(--font-display);
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.6em;
}

.specs {
  display: grid;
  grid-template-columns: auto 1fr;
  margin: 28px 0;
  border-top: 2px solid var(--ink);
}

.specs dt,
.specs dd {
  margin: 0;
  padding: 10px 0;
  border-bottom: 1px dashed var(--ink-faint);
}

.specs dt {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-soft);
  padding-right: 24px;
}

.product__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.product__lead {
  margin-top: 18px;
  font-size: 1.4rem;
  transform: rotate(-1.5deg);
}

.related {
  background: var(--paper-2);
  border-top: 1px solid var(--ink-faint);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 28px;
  margin-top: 32px;
}

@media (max-width: 860px) {
  .product__grid {
    grid-template-columns: 1fr;
  }
}
</style>
