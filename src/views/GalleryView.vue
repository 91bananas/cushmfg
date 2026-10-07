<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import HandMark from '@/components/HandMark.vue'
import ImageLightbox from '@/components/ImageLightbox.vue'
import { galleryImages } from '@/data/gallery'
import { asset } from '@/utils/asset'

const images = galleryImages.map((img) => ({ ...img, url: asset(img.src) }))

// Index of the image shown in the enlarged viewer (-1 = closed).
const viewerIndex = ref(-1)

// Track which tiles have finished loading so we can fade them in over a
// skeleton. `IntersectionObserver` below handles the actual lazy request.
const loaded = ref(new Set())
function markLoaded(i) {
  loaded.value = new Set(loaded.value).add(i)
}
function isLoaded(i) {
  return loaded.value.has(i)
}

const sentinel = ref(null)
const shown = ref(0)
const PAGE = 24

function revealMore() {
  shown.value = Math.min(shown.value + PAGE, images.length)
}

// Smooth, incremental lazy loading: a sentinel at the bottom of the grid pulls
// in the next batch as you scroll, and each `<img loading="lazy">` is only
// requested by the browser once it nears the viewport.
let observer = null
onMounted(() => {
  revealMore()
  if (typeof IntersectionObserver === 'undefined') {
    shown.value = images.length
    return
  }
  observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) revealMore()
    },
    { rootMargin: '600px 0px' },
  )
  if (sentinel.value) observer.observe(sentinel.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <section class="section gallery">
    <div class="wrap">
      <span class="eyebrow">The gallery</span>
      <h1>
        Shots from the
        <span class="marked">garage
          <HandMark type="underline" />
        </span>
      </h1>
      <p class="lede">
        Putters, sketches and everything in between. Click any image to blow it up and thumb
        through the whole lot.
      </p>
    </div>

    <div class="wrap">
      <ul class="grid" :class="{ 'is-ready': isLoaded(0) }">
        <li v-for="(img, i) in images.slice(0, shown)" :key="img.src" class="tile">
          <button class="tile__btn" type="button" :aria-label="`Enlarge ${img.label}`" @click="viewerIndex = i">
            <img class="tile__img" :class="{ 'is-loaded': isLoaded(i) }" :src="img.url" :alt="img.alt" loading="lazy"
              decoding="async" @load="markLoaded(i)" />
            <span v-if="img.kind === 'sketch'" class="tile__tag hand">sketch</span>
            <span class="tile__label">{{ img.label }}</span>
          </button>
        </li>
      </ul>

      <div ref="sentinel" class="sentinel" aria-hidden="true">
        <span v-if="shown < images.length" class="hand">loading more…</span>
      </div>
    </div>

    <ImageLightbox :images="images" :index="viewerIndex" @close="viewerIndex = -1"
      @update:index="viewerIndex = $event" />
  </section>
</template>

<style scoped>
.gallery h1 {
  font-size: clamp(2.4rem, 6vw, 4.2rem);
}

.gallery .hand-mark {
  left: 4%;
}

.grid {
  list-style: none;
  margin: 40px 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 18px;
}

.tile__btn {
  position: relative;
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  padding: 0;
  border: 0;
  border-radius: var(--radius);
  overflow: hidden;
  cursor: zoom-in;
  background: var(--paper-3);
  /* skeleton shimmer until the image paints */
  background-image: linear-gradient(100deg,
      transparent 20%,
      rgba(255, 255, 255, 0.35) 45%,
      transparent 70%);
  background-size: 220% 100%;
  animation: shimmer 1.4s linear infinite;
}

.tile__btn:has(.tile__img.is-loaded) {
  animation: none;
}

.tile__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition:
    opacity 0.5s ease,
    transform 0.4s ease;
}

.tile__img.is-loaded {
  opacity: 1;
}

.tile__btn:hover .tile__img {
  transform: scale(1.04);
}

.tile__label {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 22px 12px 10px;
  font-family: var(--font-display);
  font-size: 0.82rem;
  font-weight: 600;
  text-align: left;
  color: var(--paper);
  background: linear-gradient(transparent, rgba(24, 22, 20, 0.72));
  opacity: 0;
  transform: translateY(6px);
  transition:
    opacity 0.2s ease,
    transform 0.2s ease;
}

.tile__btn:hover .tile__label,
.tile__btn:focus-visible .tile__label {
  opacity: 1;
  transform: translateY(0);
}

.tile__tag {
  position: absolute;
  top: 10px;
  left: 12px;
  font-size: 1.15rem;
  color: var(--paper);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

.sentinel {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;
  margin-top: 24px;
  color: var(--ink-soft);
}

.sentinel .hand {
  font-size: 1.5rem;
  opacity: 0.7;
}

@keyframes shimmer {
  from {
    background-position: 180% 0;
  }

  to {
    background-position: -60% 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .tile__btn {
    animation: none;
  }
}
</style>
