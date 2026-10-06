<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <!-- Shared SVG filters that give lines a hand-drawn wobble -->
  <svg width="0" height="0" style="position: absolute" aria-hidden="true">
    <defs>
      <filter id="rough" x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="4" />
        <feDisplacementMap in="SourceGraphic" scale="3" />
      </filter>
      <filter id="rough-alt" x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="2" seed="11" />
        <feDisplacementMap in="SourceGraphic" scale="4" />
      </filter>
    </defs>
  </svg>

  <SiteHeader />
  <main>
    <RouterView />
  </main>
  <SiteFooter />
</template>
