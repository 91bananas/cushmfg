<script setup>
const steps = [
  {
    title: 'Design',
    body: 'Every putter starts as a conversation with the guy actually making your club start to finish. Shape, weight, sightline, neck — all worked out before we start.',
    icon: 'M10 38 L34 14 L40 20 L16 44 L8 46 Z M30 18 L36 24',
  },
  {
    title: 'Mill',
    body: 'The head is cut from a solid block of metal, one at a time. No casting, no waiting on orders from Chyyna.',
    icon: 'M14 10 h20 v8 h-20 z M24 18 v10 M18 28 h12 l-2 10 h-8 z M6 44 h36',
  },
  {
    title: 'Finish',
    body: 'Hand-sanded, stamped and finished. Every mark you see was made by a person, not a machine.',
    icon: 'M10 34 Q24 10 38 34 M16 40 h16 M24 8 v6 M10 14 l4 4 M38 14 l-4 4',
  },
  {
    title: 'Roll',
    body: 'Each one gets tested on the practice green before it ships to you.',
    icon: 'M8 36 Q24 30 40 36 M30 26 a5 5 0 1 0 0.1 0 M10 36 v-24 l10 4 l-10 4',
  },
]
</script>

<template>
  <ol class="steps">
    <li v-for="(s, i) in steps" :key="s.title" class="step">
      <div class="step__head">
        <span class="step__num hand">{{ i + 1 }}</span>
        <svg class="step__icon" viewBox="0 0 48 48" aria-hidden="true">
          <path :d="s.icon" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"
            stroke-linejoin="round" filter="url(#rough)" />
        </svg>
      </div>
      <h3>{{ s.title }}</h3>
      <p>{{ s.body }}</p>
    </li>
  </ol>
</template>

<style scoped>
.steps {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
}

.step__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 14px;
  margin-bottom: 18px;
  border-bottom: 2px dashed var(--ink-faint);
}

.step__num {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  font-size: 1.7rem;
  color: var(--marker);
  border: 2px solid var(--marker);
  border-radius: 50% 46% 52% 44%;
  transform: rotate(-6deg);
}

.step__icon {
  width: 48px;
  height: 48px;
  color: var(--ink);
}

.step p {
  color: var(--ink-soft);
  font-size: 0.95rem;
}

@media (max-width: 900px) {
  .steps {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 520px) {
  .steps {
    grid-template-columns: 1fr;
  }
}
</style>
