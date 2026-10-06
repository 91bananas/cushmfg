<script setup>
import { computed } from 'vue'
import HandMark from '@/components/HandMark.vue'
import ProductCard from '@/components/ProductCard.vue'
import ProductSketch from '@/components/ProductSketch.vue'
import PhotoFrame from '@/components/PhotoFrame.vue'
import ProcessSteps from '@/components/ProcessSteps.vue'
import { products } from '@/data/products'

const putters = computed(() => products.filter((p) => p.category === 'putter' && p.featured))
const accessories = computed(() =>
  products.filter((p) => p.category === 'accessory' && p.featured),
)
const hero = products[0]

const ticker = ['Milled by hand', 'One at a time', 'Garage built', 'Sketched in pencil', 'Rolled on real greens']
</script>

<template>
  <!-- Hero -->
  <section class="hero">
    <div class="wrap hero__grid">
      <div class="hero__copy">
        <span class="eyebrow">Custom putters · Est. in a garage</span>
        <h1>
          Putters made
          <span class="marked">by hand.<HandMark type="underline" /></span>
          <br />In a garage. <span class="hero__muted">On purpose.</span>
        </h1>
        <p class="lede">
          Every head starts as a pencil sketch on the workbench and ends up milled,
          sanded and stamped by the same two hands.
        </p>
        <div class="hero__ctas">
          <RouterLink to="/shop" class="btn">Shop putters</RouterLink>
          <RouterLink to="/custom" class="btn btn--ghost">Build a custom one</RouterLink>
        </div>
      </div>

      <div class="hero__art">
        <div class="hero__paper taped">
          <ProductSketch :src="hero.sketch" :kind="hero.sketchKind" :alt="`Sketch of the ${hero.name}`" />
        </div>
        <div class="hero__callout">
          <HandMark type="arrow" :delay="1" />
          <span class="hand-note">{{ hero.name }}<br />— where it all started</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Ticker -->
  <div class="ticker" aria-hidden="true">
    <div class="ticker__track">
      <template v-for="n in 2" :key="n">
        <span v-for="t in ticker" :key="t + n" class="ticker__item">
          {{ t }} <span class="ticker__star">✳</span>
        </span>
      </template>
    </div>
  </div>

  <!-- Featured putters -->
  <section class="section">
    <div class="wrap">
      <div class="section-head">
        <div>
          <span class="eyebrow">The lineup</span>
          <h2>Putters</h2>
        </div>
        <p class="hand-note section-head__note">hover one to see the original sketch ↓</p>
      </div>
      <div class="grid">
        <ProductCard v-for="(p, i) in putters" :key="p.slug" :product="p" :index="i" />
      </div>
      <div class="section-foot">
        <RouterLink to="/shop?c=putter" class="btn btn--ghost">See all putters</RouterLink>
      </div>
    </div>
  </section>

  <!-- Process -->
  <section class="section process">
    <div class="wrap">
      <span class="eyebrow">From sketch to steel</span>
      <h2>
        How a putter gets
        <span class="marked">made<HandMark type="circle" /></span>
      </h2>
      <ProcessSteps class="process__steps" />
    </div>
  </section>

  <!-- Accessories -->
  <section class="section">
    <div class="wrap">
      <div class="section-head">
        <div>
          <span class="eyebrow">Finish the bag</span>
          <h2>Accessories</h2>
        </div>
        <RouterLink to="/shop?c=accessory" class="btn btn--ghost">All accessories</RouterLink>
      </div>
      <div class="grid">
        <ProductCard v-for="(p, i) in accessories" :key="p.slug" :product="p" :index="i" />
      </div>
    </div>
  </section>

  <!-- Story -->
  <section class="section story">
    <div class="wrap story__grid">
      <div class="story__photos">
        <PhotoFrame class="story__photo story__photo--a taped" label="The garage" alt="The garage workshop" />
        <PhotoFrame class="story__photo story__photo--b taped" label="At the bench" alt="Working at the bench" />
      </div>
      <div>
        <span class="eyebrow">The garage</span>
        <h2>No factory. No assembly line. Just a garage.</h2>
        <p class="lede">
          It started with one putter for myself. Then a buddy wanted one. Now every
          putter that leaves the garage is still drawn, cut and finished by hand —
          that's the whole point.
        </p>
        <RouterLink to="/garage" class="btn">Read the story</RouterLink>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section">
    <div class="wrap">
      <div class="cta sketch-border">
        <div>
          <h2>Want one built just for you?</h2>
          <p class="lede">
            Pick a head shape, a finish and a stamp. I'll sketch it up and send it over
            before a single chip gets cut.
          </p>
        </div>
        <RouterLink to="/custom" class="btn">Start a custom order →</RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding: clamp(48px, 8vw, 96px) 0 clamp(56px, 8vw, 88px);
}

.hero__grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: clamp(32px, 5vw, 72px);
  align-items: center;
}

.hero__muted {
  color: var(--green);
}

.hero__ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}

.hero__art {
  position: relative;
}

.hero__paper {
  aspect-ratio: 4 / 4;
  padding: 8%;
  background: #fbf8f1;
  box-shadow:
    0 1px 0 rgba(0, 0, 0, 0.04),
    0 18px 40px -18px rgba(29, 28, 26, 0.35);
  transform: rotate(2deg);
}

.hero__callout {
  position: absolute;
  left: -8%;
  bottom: -18%;
  display: flex;
  align-items: flex-end;
  gap: 4px;
  transform: rotate(-4deg);
}

.hero__callout .hand-mark {
  transform: scaleY(-1) rotate(10deg);
  order: 2;
}

/* ticker */
.ticker {
  overflow: hidden;
  background: var(--green);
  color: var(--paper);
  border-block: 2px solid var(--ink);
  transform: rotate(-1.2deg);
  margin: 24px -2% 0;
}

.ticker__track {
  display: flex;
  width: max-content;
  animation: scroll 38s linear infinite;
}

.ticker__item {
  display: inline-flex;
  align-items: center;
  gap: 28px;
  padding: 14px 14px;
  font-family: var(--font-hand);
  font-size: 1.7rem;
  font-weight: 700;
  white-space: nowrap;
}

.ticker__star {
  color: #e9b89f;
  font-size: 1.1rem;
}

@keyframes scroll {
  to {
    transform: translateX(-50%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ticker__track {
    animation: none;
  }
}

/* sections */
.section-head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 36px;
}

.section-head h2 {
  margin: 0;
}

.section-head__note {
  margin: 0;
  transform: rotate(-2deg);
}

.section-foot {
  margin-top: 36px;
  text-align: center;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 28px;
}

.process {
  background: var(--paper-2);
  border-block: 1px solid var(--ink-faint);
}

.process__steps {
  margin-top: 48px;
}

/* story */
.story__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(32px, 6vw, 80px);
  align-items: center;
}

.story__photos {
  position: relative;
  min-height: 420px;
}

.story__photo {
  position: absolute;
  padding: 10px 10px 40px;
  background: #fff;
  box-shadow: 0 16px 30px -16px rgba(0, 0, 0, 0.35);
}

.story__photo--a {
  width: 68%;
  height: 300px;
  top: 0;
  left: 0;
  transform: rotate(-3deg);
}

.story__photo--b {
  width: 58%;
  height: 260px;
  bottom: 0;
  right: 0;
  transform: rotate(4deg);
}

/* cta */
.cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  flex-wrap: wrap;
  padding: clamp(28px, 5vw, 56px);
  background: #fbf8f1;
  border-radius: var(--radius);
}

.cta h2 {
  margin-bottom: 0.3em;
}

.cta .lede {
  margin: 0;
  max-width: 48ch;
}

@media (max-width: 860px) {
  .hero__grid,
  .story__grid {
    grid-template-columns: 1fr;
  }

  .hero__art {
    max-width: 520px;
    margin: 16px auto 56px;
    width: 100%;
  }

  .hero__callout {
    left: 0;
    bottom: -64px;
  }
}

@media (max-width: 520px) {
  .story__photos {
    min-height: 360px;
  }

  .story__photo--a {
    height: 230px;
    width: 78%;
  }

  .story__photo--b {
    height: 200px;
    width: 66%;
  }
}
</style>
