<script setup>
import { site } from '@/data/site'
</script>

<template>
  <RouterLink to="/" class="logo" :aria-label="`${site.name} home`">
    <img v-if="site.logo" :src="site.logo" :alt="site.name" />
    <template v-else>
      <span class="logo__mark hand">{{ site.name }}</span>
      <svg class="logo__ring" viewBox="0 0 120 60" aria-hidden="true">
        <path
          d="M22 12 C 50 2, 108 6, 114 28 C 118 50, 70 58, 38 54 C 8 50, 2 32, 16 18 C 26 10, 46 6, 64 7"
          fill="none"
          stroke="currentColor"
          stroke-width="2.4"
          stroke-linecap="round"
          filter="url(#rough)"
        />
      </svg>
    </template>
  </RouterLink>
</template>

<style scoped>
.logo {
  position: relative;
  display: inline-grid;
  place-items: center;
  width: 100px;
  height: 100px;
  color: var(--ink);
  text-decoration: none;
}

.logo img {
  /* max-height: 48px; */
  width: auto;
}

.logo__mark {
  font-size: 2rem;
  letter-spacing: 0.02em;
  transform: rotate(-4deg);
}

.logo__ring {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
.logo img {
  border-radius: 100%;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.4);
  border: 2px solid #e10011;
  z-index: 2;
}
.logo:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
  transform-origin: 50% 0;
}
.logo:after {
  content: '';
  position: absolute;
  border-radius: 100%;
  height: 100%;
  width: 100%;
  background: var(--paper);
  z-index: 1;
}
</style>
