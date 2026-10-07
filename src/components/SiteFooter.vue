<script setup>
import { site } from '@/data/site'
import SiteLogo from './SiteLogo.vue'

console.log(site);
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="wrap footer__inner">
      <div class="footer__brand">
        <SiteLogo />
        <p class="hand footer__sign">{{ site.tagline }}</p>
      </div>
      <nav class="footer__col" aria-label="Footer">
        <span class="eyebrow">Shop</span>
        <RouterLink to="/shop?c=putter">Putters</RouterLink>
        <RouterLink to="/shop?c=accessory">Accessories</RouterLink>
        <RouterLink to="/gallery">Gallery</RouterLink>
        <RouterLink to="/custom">Custom order</RouterLink>
      </nav>
      <div class="footer__col">
        <span class="eyebrow">Say hi</span>
        <a :href="`mailto:${site.email}`">{{ site.email }}</a>
        <a v-for="s in site.social" :key="s.label" :href="s.href" target="_blank" rel="noopener">
          {{ s.label }}
        </a>
      </div>
    </div>
    <div class="wrap footer__base">
      <span>© 2017 - {{ year }} {{ site.name }}. Made by hand in {{ site.location }}.</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: 40px;
  padding: 64px 0 28px;
  background: var(--ink);
  color: var(--paper);
}

.footer :deep(.logo) {
  color: var(--paper);
}

.footer__inner {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
}

.footer__sign {
  font-size: 1.6rem;
  margin-top: 16px;
  max-width: 18ch;
  color: #e9b89f;
}

.footer__col {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer__col .eyebrow {
  color: rgba(244, 240, 230, 0.55);
  margin-bottom: 4px;
}

.footer__col a {
  text-decoration: none;
  opacity: 0.85;
}

.footer__col a:hover {
  opacity: 1;
  text-decoration: underline;
  text-decoration-style: wavy;
  text-decoration-color: var(--marker);
}

.footer__base {
  margin-top: 56px;
  padding-top: 20px;
  border-top: 1px dashed rgba(244, 240, 230, 0.25);
  font-size: 0.85rem;
  opacity: 0.6;
}

@media (max-width: 720px) {
  .footer__inner {
    grid-template-columns: 1fr 1fr;
  }

  .footer__brand {
    grid-column: 1 / -1;
  }
}
</style>
