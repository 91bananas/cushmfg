<script setup>
// Shows the hand-drawn sketch for a product. If a scanned sketch image is
// provided it's blended onto the paper (white paper drops out via multiply);
// otherwise a placeholder line drawing is used.
defineProps({
  src: { type: String, default: null },
  kind: { type: String, default: 'blade' },
  alt: { type: String, default: '' },
  note: { type: String, default: '' },
})

// Placeholder line drawings, roughly top-down, 400 x 300.
const drawings = {
  blade: [
    'M60 172 Q60 150 82 148 L318 148 Q340 150 340 172 L338 192 Q335 204 318 204 L82 204 Q62 204 60 192 Z',
    'M96 160 L304 160 Q312 162 310 170 L306 188 Q304 194 296 194 L104 194 Q96 194 94 188 L90 170 Q90 162 96 160 Z',
    'M200 148 L200 162',
    'M118 148 L118 112 L146 112 L146 148',
    'M132 112 L132 86',
    'M120 86 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0',
  ],
  mallet: [
    'M72 112 L328 112 Q344 112 344 130 L342 150 Q330 248 200 252 Q70 248 58 150 L56 130 Q56 112 72 112 Z',
    'M118 130 L282 130 Q300 132 296 156 Q284 218 200 222 Q116 218 104 156 Q100 132 118 130 Z',
    'M200 112 L200 230',
    'M200 112 L200 78 L216 64',
    'M206 58 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0',
  ],
  fang: [
    'M78 112 L322 112 Q340 112 340 130 L336 238 Q334 256 316 256 L290 256 Q274 256 272 240 L264 172 L136 172 L128 240 Q126 256 110 256 L84 256 Q66 256 64 238 L60 130 Q60 112 78 112 Z',
    'M88 126 L312 126',
    'M100 180 L96 240',
    'M300 180 L304 240',
    'M200 112 L200 172',
    'M172 112 L160 78',
    'M148 70 a12 12 0 1 0 24 0 a12 12 0 1 0 -24 0',
  ],
  headcover: [
    'M92 206 Q78 112 172 100 L300 94 Q352 98 346 160 Q340 222 262 228 L122 228 Q94 226 92 206 Z',
    'M110 200 Q100 128 176 118 L296 112 Q332 116 328 160 Q324 208 260 212 L128 212 Q112 210 110 200 Z',
    'M92 206 L70 214 L64 120 L88 112',
    'M232 150 l8 16 l18 2 l-13 12 l4 18 l-17 -9 l-16 9 l3 -18 l-13 -12 l18 -2 z',
  ],
  grip: [
    'M40 132 L320 116 Q362 114 362 150 Q362 186 320 184 L40 168 Z',
    'M80 130 L100 168', 'M120 127 L142 172', 'M162 125 L186 175',
    'M206 122 L232 178', 'M250 119 L278 181', 'M294 117 L322 184',
    'M40 132 L28 136 L28 164 L40 168',
  ],
  marker: [
    'M200 70 a80 80 0 1 0 0.1 0 Z',
    'M200 92 a58 58 0 1 0 0.1 0 Z',
    'M172 168 Q160 136 186 132 Q200 132 198 150',
    'M210 132 L210 170 M210 132 Q240 134 236 150 Q232 160 210 158',
  ],
  tool: [
    'M150 64 Q200 42 250 64 L252 150 L234 262 Q228 270 222 262 L214 168 L186 168 L178 262 Q172 270 166 262 L148 150 Z',
    'M172 92 Q200 82 228 92',
    'M200 168 L200 128',
  ],
}
</script>

<template>
  <figure class="sketch">
    <img v-if="src" class="sketch__img" :src="src" :alt="alt" loading="lazy" />
    <svg
      v-else
      class="sketch__svg"
      viewBox="0 0 400 300"
      role="img"
      :aria-label="alt || `Hand-drawn sketch of a ${kind}`"
    >
      <g filter="url(#rough)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
        <path v-for="(d, i) in drawings[kind] || drawings.blade" :key="i" :d="d" stroke-width="2.4" />
      </g>
      <!-- second, slightly offset pass so it reads like pencil gone over twice -->
      <g
        filter="url(#rough-alt)"
        fill="none"
        stroke="currentColor"
        stroke-opacity="0.35"
        stroke-linecap="round"
        transform="translate(1.6 1.2)"
      >
        <path v-for="(d, i) in drawings[kind] || drawings.blade" :key="i" :d="d" stroke-width="1.2" />
      </g>
    </svg>
    <figcaption v-if="note" class="sketch__note hand">
      <svg class="sketch__arrow" viewBox="0 0 60 40" aria-hidden="true">
        <path d="M54 6 C 34 4, 14 14, 8 32 M4 22 L8 33 L19 28" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" />
      </svg>
      {{ note }}
    </figcaption>
  </figure>
</template>

<style scoped>
.sketch {
  position: relative;
  margin: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}

.sketch__svg {
  color: var(--ink);
}

.sketch__svg,
.sketch__img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.sketch__img {
  mix-blend-mode: multiply;
}

.sketch__note {
  position: absolute;
  right: 6%;
  top: 6%;
  max-width: 45%;
  font-size: 1.35rem;
  color: var(--marker);
  text-align: right;
  transform: rotate(-3deg);
}

.sketch__arrow {
  position: absolute;
  left: -46px;
  top: 18px;
  width: 44px;
  height: 30px;
}
</style>
