<script setup>
import { reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
import HandMark from '@/components/HandMark.vue'
import ProductSketch from '@/components/ProductSketch.vue'
import { products, getProduct } from '@/data/products'
import { site } from '@/data/site'
import { asset } from '@/utils/asset'

const route = useRoute()
const preset = getProduct(route.query.model)

const form = reactive({
  name: '',
  email: '',
  model: preset?.slug ?? 'new',
  hand: 'Right',
  length: '34',
  finish: 'Satin',
  stamp: '',
  notes: '',
})

const finishes = ['Raw', 'Satin', 'Black oxide', 'Copper patina']
const lengths = ['32', '33', '34', '35', '36']
const sent = ref(false)

// No backend yet: build a pre-filled email to the shop.
function submit() {
  const model = getProduct(form.model)?.name ?? 'Something new'
  const body = [
    `Name: ${form.name}`,
    `Email: ${form.email}`,
    `Model: ${model}`,
    `Hand: ${form.hand}`,
    `Length: ${form.length}"`,
    `Finish: ${form.finish}`,
    `Stamp: ${form.stamp || '—'}`,
    '',
    form.notes,
  ].join('\n')
  const subject = `Custom order: ${model}`
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  sent.value = true
}
</script>

<template>
  <section class="section">
    <div class="wrap custom">
      <div class="custom__intro">
        <span class="eyebrow">Custom order</span>
        <h1>
          Let's build
          <span class="marked">yours.
            <HandMark type="circle" />
          </span>
        </h1>
        <p class="lede">
          Have an insane idea? Tell me what you're after. I'll sketch it up and send it to you for a thumbs-up
          before anything gets cut.
        </p>
        <ol class="how hand">
          <li>You fill this out</li>
          <li>We have a design conversation</li>
          <li>I tweak it till it's right</li>
          <li>I build it — about {{ site.leadTime }}</li>
        </ol>
        <div class="custom__sketch taped">
          <ProductSketch :kind="getProduct(form.model)?.sketchKind ?? 'blade'"
            :src="asset(getProduct(form.model)?.sketch || 'images/products/c-and-c/candc12.webp')"
            alt="Sketch of the selected model" />
        </div>
      </div>

      <form class="form sketch-border" @submit.prevent="submit">
        <div v-if="sent" class="form__sent" role="status">
          <p class="hand-note">Thanks! Your email app should have opened with everything filled in.</p>
          <p>
            If it didn't, just email
            <a :href="`mailto:${site.email}`">{{ site.email }}</a> directly.
          </p>
        </div>

        <div class="row">
          <label>
            <span>Your name</span>
            <input v-model="form.name" required autocomplete="name" />
          </label>
          <label>
            <span>Email</span>
            <input v-model="form.email" type="email" required autocomplete="email" />
          </label>
        </div>

        <label>
          <span>Start from</span>
          <select v-model="form.model">
            <option v-for="p in products.filter((p) => p.category === 'putter')" :key="p.slug" :value="p.slug">
              {{ p.name }}
            </option>
            <option value="new">Something totally new</option>
          </select>
        </label>

        <fieldset>
          <legend>Hand</legend>
          <div class="chips">
            <label v-for="h in ['Right', 'Left']" :key="h" class="chip">
              <input v-model="form.hand" type="radio" name="hand" :value="h" />
              <span>{{ h }}</span>
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Length (inches)</legend>
          <div class="chips">
            <label v-for="l in lengths" :key="l" class="chip">
              <input v-model="form.length" type="radio" name="length" :value="l" />
              <span>{{ l }}"</span>
            </label>
          </div>
        </fieldset>

        <fieldset>
          <legend>Finish</legend>
          <div class="chips">
            <label v-for="f in finishes" :key="f" class="chip">
              <input v-model="form.finish" type="radio" name="finish" :value="f" />
              <span>{{ f }}</span>
            </label>
          </div>
        </fieldset>

        <label>
          <span>Custom stamp <em>(initials, a word, a date…)</em></span>
          <input v-model="form.stamp" maxlength="24" />
        </label>

        <label>
          <span>Anything else?</span>
          <textarea v-model="form.notes" rows="4" placeholder="Feel, look, your current putter, a wild idea…" />
        </label>

        <button type="submit" class="btn">Send it to the garage →</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.custom {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: clamp(32px, 6vw, 80px);
  align-items: start;
}

.custom__intro h1 {
  font-size: clamp(2.4rem, 6vw, 4.2rem);
}

.how {
  margin: 28px 0 40px;
  padding-left: 1.4em;
  font-size: 1.6rem;
  color: var(--green);
}

.custom__sketch {
  aspect-ratio: 4 / 4;
  max-width: 420px;
  padding: 6%;
  background: #fbf8f1;
  box-shadow: 0 18px 36px -18px rgba(29, 28, 26, 0.4);
  transform: rotate(-2deg);
}

.form {
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: clamp(24px, 4vw, 40px);
  background: #fbf8f1;
  border-radius: var(--radius);
}

.form__sent {
  padding: 16px 18px;
  background: var(--paper-2);
  border-radius: var(--radius);
}

.form__sent p {
  margin: 0 0 6px;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

label>span,
legend {
  display: block;
  margin-bottom: 6px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

label em {
  font-style: normal;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0;
  color: var(--ink-soft);
}

fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

input:not([type='radio']),
select,
textarea {
  width: 100%;
  padding: 12px 14px;
  border: 0;
  border-bottom: 2px solid var(--ink);
  border-radius: 4px 4px 0 0;
  background: rgba(29, 28, 26, 0.04);
  font: inherit;
  color: var(--ink);
}

input:not([type='radio']):focus,
select:focus,
textarea:focus {
  outline: none;
  border-bottom-color: var(--marker);
  background: rgba(217, 84, 43, 0.06);
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.chip span {
  display: inline-block;
  padding: 0.45em 1em;
  border: 2px solid var(--ink);
  border-radius: 999px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background 0.15s ease;
}

.chip span:hover {
  background: var(--paper-2);
}

.chip input:checked+span {
  background: var(--ink);
  color: var(--paper);
}

.chip input:focus-visible+span {
  outline: 2px dashed var(--marker);
  outline-offset: 3px;
}

.form .btn {
  align-self: flex-start;
}

@media (max-width: 860px) {
  .custom {
    grid-template-columns: 1fr;
  }

  .custom__sketch {
    display: none;
  }
}

@media (max-width: 520px) {
  .row {
    grid-template-columns: 1fr;
  }
}
</style>
