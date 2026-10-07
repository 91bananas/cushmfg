<script setup>
// Classic image viewer: click a thumbnail to enlarge, then step through the
// whole set with the arrow keys / on-screen arrows. Closes on Esc, on the
// backdrop, or the close button. Locks body scroll while open.
import { computed, onBeforeUnmount, ref, watch } from 'vue'

const props = defineProps({
  images: { type: Array, required: true },
  index: { type: Number, default: -1 },
})
const emit = defineEmits(['close', 'update:index'])

const open = computed(() => props.index >= 0 && props.index < props.images.length)
const current = computed(() => (open.value ? props.images[props.index] : null))

// swipe / drag tracking for touch devices
const touchStartX = ref(null)

function step(delta) {
  if (!open.value) return
  const n = props.images.length
  const next = (props.index + delta + n) % n
  emit('update:index', next)
}

function onKey(e) {
  if (!open.value) return
  if (e.key === 'Escape') emit('close')
  else if (e.key === 'ArrowRight') step(1)
  else if (e.key === 'ArrowLeft') step(-1)
}

function onTouchStart(e) {
  touchStartX.value = e.changedTouches[0].clientX
}

function onTouchEnd(e) {
  if (touchStartX.value === null) return
  const dx = e.changedTouches[0].clientX - touchStartX.value
  touchStartX.value = null
  if (Math.abs(dx) > 48) step(dx < 0 ? 1 : -1)
}

// Keep the page behind the viewer from scrolling, and listen for keys only
// while the viewer is actually open.
watch(
  open,
  (isOpen) => {
    if (isOpen) {
      window.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    } else {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  },
  { immediate: true },
)

onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition name="viewer">
      <div v-if="open" class="viewer" role="dialog" aria-modal="true" :aria-label="current.alt || 'Image viewer'"
        @click.self="emit('close')" @touchstart.passive="onTouchStart" @touchend.passive="onTouchEnd">
        <button class="viewer__close" type="button" aria-label="Close viewer" @click="emit('close')">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 4 L20 20 M20 4 L4 20" fill="none" stroke="currentColor" stroke-width="2.4"
              stroke-linecap="round" />
          </svg>
        </button>

        <button v-if="images.length > 1" class="viewer__nav viewer__nav--prev" type="button" aria-label="Previous image"
          @click.stop="step(-1)">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 4 L7 12 L15 20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>

        <figure class="viewer__stage">
          <img :key="current.src" class="viewer__img" :src="current.src" :alt="current.alt" />
          <figcaption v-if="current.label" class="viewer__caption">
            <span class="hand viewer__label">{{ current.label }}</span>
            <span class="viewer__count">{{ index + 1 }} / {{ images.length }}</span>
          </figcaption>
        </figure>

        <button v-if="images.length > 1" class="viewer__nav viewer__nav--next" type="button" aria-label="Next image"
          @click.stop="step(1)">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 4 L17 12 L9 20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.viewer {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  grid-template-columns: 64px 1fr 64px;
  align-items: center;
  gap: 8px;
  padding: clamp(16px, 4vw, 40px);
  background: rgba(24, 22, 20, 0.92);
  backdrop-filter: blur(6px);
  color: var(--paper);
}

.viewer__stage {
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
  min-width: 0;
}

.viewer__img {
  max-width: 100%;
  max-height: 78vh;
  width: auto;
  object-fit: contain;
  background: #fff;
  padding: 10px;
  box-shadow: 0 24px 60px -20px rgba(0, 0, 0, 0.7);
  animation: viewer-in 0.28s ease both;
}

@keyframes viewer-in {
  from {
    opacity: 0;
    transform: scale(0.96);
  }
}

.viewer__caption {
  display: flex;
  align-items: baseline;
  gap: 14px;
  color: var(--paper);
}

.viewer__label {
  font-size: 1.5rem;
}

.viewer__count {
  font-family: var(--font-display);
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  opacity: 0.65;
}

.viewer__close,
.viewer__nav {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 0;
  border-radius: 999px;
  background: rgba(244, 240, 230, 0.1);
  color: var(--paper);
  cursor: pointer;
  transition:
    background 0.15s ease,
    transform 0.15s ease;
}

.viewer__close:hover,
.viewer__nav:hover {
  background: var(--marker);
  transform: scale(1.06);
}

.viewer__close svg,
.viewer__nav svg {
  width: 22px;
  height: 22px;
}

.viewer__close {
  position: absolute;
  top: clamp(16px, 4vw, 32px);
  right: clamp(16px, 4vw, 32px);
}

.viewer__nav--prev {
  justify-self: start;
}

.viewer__nav--next {
  justify-self: end;
}

.viewer-enter-active,
.viewer-leave-active {
  transition: opacity 0.25s ease;
}

.viewer-enter-from,
.viewer-leave-to {
  opacity: 0;
}

@media (max-width: 640px) {
  .viewer {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
  }

  .viewer__stage {
    grid-row: 1;
  }

  .viewer__nav {
    position: absolute;
    bottom: 20px;
  }

  .viewer__nav--prev {
    left: 20px;
  }

  .viewer__nav--next {
    right: 20px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .viewer__img {
    animation: none;
  }
}
</style>
