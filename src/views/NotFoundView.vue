<script setup>
import HandMark from '@/components/HandMark.vue'
</script>

<template>
  <section class="section">
    <div class="wrap lost">
      <span class="eyebrow">404</span>
      <h1>
        Lipped
        <span class="marked">out.<HandMark type="circle" /></span>
      </h1>
      <p class="lede">That page isn't here. Maybe it rolled under the workbench.</p>
      <RouterLink to="/" class="btn">Back to the garage</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.lost {
  min-height: 50vh;
}
</style>
