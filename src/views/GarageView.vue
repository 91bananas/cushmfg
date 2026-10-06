<script setup>
import HandMark from '@/components/HandMark.vue'
import PhotoFrame from '@/components/PhotoFrame.vue'
import ProcessSteps from '@/components/ProcessSteps.vue'

const tools = [
  ['The mill', 'An old manual mill that does most of the heavy lifting.'],
  ['The bench', 'Where every sketch starts. Covered in pencil marks and coffee rings.'],
  ['The stamps', 'A set of hand stamps. Every letter is struck by hammer.'],
  ['The green', 'A practice green out back where every putter gets tested.'],
]
</script>

<template>
  <section class="section">
    <div class="wrap intro">
      <span class="eyebrow">The garage</span>
      <h1>
        One garage. One bench.
        <span class="marked">Two hands.<HandMark type="underline" /></span>
      </h1>
      <p class="lede">
        No factory, no outsourcing. Every putter is drawn, cut, finished and tested in the
        same one-car garage. Here's how that started.
      </p>
    </div>
  </section>

  <section class="wrap story">
    <PhotoFrame class="story__photo taped" label="Garage photo" alt="The garage workshop" />
    <div class="story__text">
      <p>
        <span class="hand dropcap">I</span>t started the way most garage projects do: I wanted
        something I couldn't buy. So I sketched a putter on a scrap of paper, bought an old
        Bridgeport mill at auction, and spent way too many weekends figuring it out.
      </p>
      <p>
        That first putter is still in my collection. The second few went to friends. Somewhere along the
        way, people started asking if I'd make one for them too. I've since shipped golf clubs all around the world.
      </p>
      <p>
        Today it's still just me in the garage. Tinkering away, trying to put my spin on every item that leaves my shop.
      </p>
      <p class="hand-note sign">— the guy in the garage</p>
    </div>
  </section>

  <section class="section process">
    <div class="wrap">
      <span class="eyebrow">The process</span>
      <h2>From pencil to putting green</h2>
      <ProcessSteps class="process__steps" />
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <span class="eyebrow">What's in the garage</span>
      <h2>The tools of the trade</h2>
      <div class="tools">
        <article v-for="([name, body], i) in tools" :key="name" class="tool sketch-border">
          <PhotoFrame class="tool__photo" :label="name" :alt="name" />
          <div class="tool__body">
            <h3>{{ name }}</h3>
            <p>{{ body }}</p>
          </div>
          <span class="tool__num hand">{{ i + 1 }}</span>
        </article>
      </div>
    </div>
  </section>
  <div class="cta">
    <RouterLink to="/custom" class="btn">Have one made for you →</RouterLink>
  </div>
</template>

<style scoped>
.intro h1 {
  max-width: 16ch;
}

.story {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: clamp(32px, 6vw, 80px);
  align-items: start;
  padding-bottom: clamp(64px, 10vw, 120px);
}

.story__photo {
  aspect-ratio: 4 / 5;
  padding: 12px 12px 48px;
  background: #fff;
  box-shadow: 0 18px 36px -18px rgba(0, 0, 0, 0.35);
  transform: rotate(-2deg);
}

.story__text {
  font-size: 1.1rem;
}

.dropcap {
  float: left;
  font-size: 4.2rem;
  line-height: 0.8;
  margin: 6px 10px 0 0;
  color: var(--marker);
}

.sign {
  font-size: 1.9rem;
  transform: rotate(-2deg);
  margin-top: 24px;
}

.process {
  background: var(--paper-2);
  border-block: 1px solid var(--ink-faint);
}

.process__steps {
  margin-top: 48px;
}

.tools {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 28px;
  margin-top: 36px;
}

.tool {
  position: relative;
  background: var(--paper);
  border-radius: var(--radius);
}

.tool__photo {
  aspect-ratio: 4 / 4;
  border-radius: var(--radius) var(--radius) 0 0;
}

.tool__body {
  padding: 16px 18px 20px;
}

.tool__body p {
  margin: 0;
  color: var(--ink-soft);
  font-size: 0.95rem;
}

.tool__num {
  position: absolute;
  top: 10px;
  right: 14px;
  font-size: 1.8rem;
  color: var(--marker);
}

.cta {
  margin-top: 48px;
  text-align: center;
}

@media (max-width: 860px) {
  .story {
    grid-template-columns: 1fr;
  }

  .story__photo {
    max-width: 420px;
  }
}
</style>
