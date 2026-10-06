<script setup>
// A product/shop photo. Shows a placeholder until a real image path is set.
defineProps({
  src: { type: String, default: null },
  alt: { type: String, default: '' },
  label: { type: String, default: 'Photo coming soon' },
})
</script>

<template>
  <div class="photo">
    <img v-if="src" :src="src" :alt="alt" loading="lazy" />
    <div v-else class="photo__placeholder" role="img" :aria-label="alt || label">
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path
          d="M8 16 h8 l4 -5 h8 l4 5 h8 v22 h-32 z M24 34 a7 7 0 1 0 0.1 0"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linejoin="round"
          filter="url(#rough)"
        />
      </svg>
      <span class="hand">{{ label }}</span>
    </div>
  </div>
</template>

<style scoped>
.photo {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: var(--paper-3);
}

.photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photo__placeholder {
  width: 100%;
  height: 100%;
  min-height: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: var(--ink-soft);
  text-align: center;
  padding: 16px;
  background:
    repeating-linear-gradient(
      -45deg,
      transparent 0 14px,
      rgba(29, 28, 26, 0.045) 14px 15px
    ),
    linear-gradient(160deg, #d9cfb8, #c9bc9f);
}

.photo__placeholder svg {
  width: 44px;
  height: 44px;
}

.photo__placeholder span {
  font-size: 1.3rem;
}
</style>
