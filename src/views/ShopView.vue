<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ProductCard from '@/components/ProductCard.vue'
import HandMark from '@/components/HandMark.vue'
import { products, categories } from '@/data/products'

const route = useRoute()
const router = useRouter()

const active = computed(() =>
  categories.some((c) => c.id === route.query.c) ? route.query.c : 'all',
)
const list = computed(() =>
  active.value === 'all' ? products : products.filter((p) => p.category === active.value),
)

function select(id) {
  router.replace({ query: id === 'all' ? {} : { c: id } })
}
</script>

<template>
  <section class="section shop">
    <div class="wrap">
      <span class="eyebrow">The shop</span>
      <h1>
        Everything on the
        <span class="marked">bench<HandMark type="underline" /></span>
      </h1>
      <p class="lede">
        Every piece is made to order. Pick one out, or start from scratch with a custom build.
      </p>

      <div class="filters" role="tablist" aria-label="Filter products">
        <button
          v-for="c in categories"
          :key="c.id"
          role="tab"
          :aria-selected="active === c.id"
          :class="['filter', { 'is-active': active === c.id }]"
          @click="select(c.id)"
        >
          {{ c.label }}
        </button>
      </div>

      <div class="grid">
        <ProductCard v-for="(p, i) in list" :key="p.slug" :product="p" :index="i" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.shop h1 {
  font-size: clamp(2.4rem, 6vw, 4.2rem);
}

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 36px 0 40px;
}

.filter {
  padding: 0.55em 1.2em;
  border: 2px solid var(--ink);
  border-radius: 999px;
  background: transparent;
  color: var(--ink);
  font-family: var(--font-display);
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background 0.15s ease;
}

.filter:hover {
  background: var(--paper-2);
}

.filter.is-active {
  background: var(--ink);
  color: var(--paper);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 28px;
}
</style>
