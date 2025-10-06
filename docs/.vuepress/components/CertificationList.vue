<script setup>
import { useBlogType } from '@vuepress/plugin-blog/client'

const certifications = useBlogType('certification')
</script>

<template>
  <section class="cert-section">
    <h2 class="section-title">🎓 My Certifications</h2>

    <div v-if="!certifications.items.length" class="empty">
      No certifications added yet 💤
    </div>

    <div v-else class="cert-grid">
      <div
        v-for="{ info, path } in certifications.items"
        :key="path"
        class="cert-card"
        @click="$router.push(path)"
      >
        <img
          v-if="info.cover"
          :src="info.cover"
          :alt="info.title"
          class="cert-img"
        />
        <h3>{{ info.title }}</h3>
        <p class="desc">{{ info.description }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cert-section {
  padding: 2rem 1rem;
  text-align: center;
}

.section-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--vp-c-brand);
}

.cert-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.8rem;
  justify-items: center;
}

.cert-card {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  max-width: 320px;
  text-align: left;
  transition: all 0.3s ease;
  cursor: pointer;
}

.cert-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
}

.cert-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.desc {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  padding: 0.8rem 1rem 1rem;
}

.empty {
  color: #888;
  font-style: italic;
  margin-top: 2rem;
}
</style>
