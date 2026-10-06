<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import SiteLogo from './SiteLogo.vue'

const open = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => (open.value = false))

const links = [
  { to: '/shop', label: 'Shop' },
  { to: '/garage', label: 'The Garage' },
]
</script>

<template>
  <header class="header">
    <div class="wrap header__inner">
      <SiteLogo />
      <button
        class="header__toggle"
        :aria-expanded="open"
        aria-controls="site-nav"
        @click="open = !open"
      >
        <span class="visually-hidden">Menu</span>
        <svg viewBox="0 0 28 20" aria-hidden="true">
          <path
            :d="open ? 'M4 3 L24 17 M4 17 L24 3' : 'M2 3 Q14 1 26 3 M2 10 Q14 12 26 10 M2 17 Q14 15 26 17'"
            fill="none"
            stroke="currentColor"
            stroke-width="2.4"
            stroke-linecap="round"
          />
        </svg>
      </button>
      <nav id="site-nav" class="header__nav" :class="{ 'is-open': open }">
        <RouterLink v-for="l in links" :key="l.to" :to="l.to" class="header__link">
          {{ l.label }}
        </RouterLink>
        <RouterLink to="/custom" class="btn header__cta">Build yours</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(244, 240, 230, 0.88);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--ink-faint);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: 32px;
}

.header__link {
  position: relative;
  font-family: var(--font-display);
  font-weight: 500;
  text-decoration: none;
}

.header__link::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -4px;
  height: 3px;
  background: var(--marker);
  border-radius: 2px;
  transform: scaleX(0) rotate(-1deg);
  transform-origin: left;
  transition: transform 0.25s ease;
}

.header__link:hover::after,
.header__link.router-link-active::after {
  transform: scaleX(1) rotate(-1deg);
}

.header__cta {
  padding: 0.6em 1.2em;
}

.header__toggle {
  display: none;
  background: none;
  border: 0;
  padding: 8px;
  color: var(--ink);
  cursor: pointer;
}

.header__toggle svg {
  width: 28px;
  height: 20px;
}

@media (max-width: 720px) {
  .header__toggle {
    display: block;
  }

  .header__nav {
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    padding: 24px var(--gutter) 32px;
    background: var(--paper);
    border-bottom: 1px solid var(--ink-faint);
    font-size: 1.3rem;
    display: none;
  }

  .header__nav.is-open {
    display: flex;
  }
}
</style>
