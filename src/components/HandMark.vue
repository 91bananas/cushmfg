<script setup>
// Hand-drawn marker strokes that "draw themselves" in.
// Place inside a `.marked` span (underline / circle) or on its own (arrow).
const props = defineProps({
  type: { type: String, default: 'underline' }, // underline | circle | arrow
  color: { type: String, default: 'var(--marker)' },
  delay: { type: Number, default: 0.3 },
})

const shapes = {
  underline: {
    viewBox: '0 0 200 20',
    paths: ['M3 13 C 45 6, 110 4, 197 9', 'M24 17 C 80 12, 130 12, 182 15'],
  },
  circle: {
    viewBox: '0 0 200 80',
    paths: [
      'M34 16 C 84 0, 182 6, 194 34 C 202 62, 124 80, 62 74 C 12 68, 0 40, 22 22 C 40 8, 74 4, 104 6',
    ],
  },
  arrow: {
    viewBox: '0 0 120 90',
    paths: ['M6 8 C 46 2, 96 22, 104 72', 'M86 60 L105 76 L113 54'],
  },
}

const shape = shapes[props.type]
</script>

<template>
  <svg
    :class="['hand-mark', `hand-mark--${type}`]"
    :viewBox="shape.viewBox"
    :preserveAspectRatio="type === 'arrow' ? 'xMidYMid meet' : 'none'"
    aria-hidden="true"
  >
    <path
      v-for="(d, i) in shape.paths"
      :key="i"
      class="draw"
      :d="d"
      pathLength="1"
      fill="none"
      :style="{ stroke: color, animationDelay: `${delay + i * 0.35}s` }"
      stroke-width="3.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      vector-effect="non-scaling-stroke"
    />
  </svg>
</template>

<style scoped>
.hand-mark {
  pointer-events: none;
  overflow: visible;
}

.hand-mark--underline {
  position: absolute;
  left: -3%;
  width: 106%;
  bottom: -0.18em;
  height: 0.32em;
}

.hand-mark--circle {
  position: absolute;
  left: -12%;
  top: -22%;
  width: 124%;
  height: 144%;
}

.hand-mark--arrow {
  width: 90px;
  height: 70px;
}
</style>
