<script setup>
import { useBlogType } from '@vuepress/plugin-blog/client'
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'

const certifications = useBlogType('certification')
</script>

<template>
  <ParentLayout>
    <template #page>
      <main class="page certification-page">
        <h1 class="page-title">🎓 My Certifications</h1>

        <div v-if="!certifications.items.length" class="empty">
          <p>No certifications added yet 😢</p>
        </div>

        <div v-else class="certifications-grid">
          <article
            v-for="{ info, path } in certifications.items"
            :key="path"
            class="certification-card"
            @click="$router.push(path)"
          >
            <div class="img-wrapper" v-if="info.cover">
              <img
                :src="info.cover"
                :alt="info.title"
                class="certification-img"
              />
            </div>
            <h2 class="cert-title">{{ info.title }}</h2>
            <p v-if="info.description" class="cert-desc">
              {{ info.description }}
            </p>
          </article>
        </div>
      </main>
    </template>
  </ParentLayout>
</template>

<style scoped>
.certification-page {
  text-align: center;
  padding: 3rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.page-title {
  font-size: 2.2rem;
  font-weight: 800;
  color: #3b82f6;
  margin-bottom: 3rem;
  text-shadow: 0 0 10px rgba(59, 130, 246, 0.4);
}

.certifications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem; /* ⬅️ increased gap for better spacing */
  justify-items: center;
  padding: 0 2rem; /* ⬅️ adds space on sides */
  row-gap: 1rem; /* ⬅️ more vertical spacing */
}

.certification-page {
  padding: 3rem 1.5rem 5rem; /* ⬅️ more bottom spacing */
}

.certification-card {
  background: #151515;
  border: 1px solid #2a2a2a;
  border-radius: 14px;
  padding: 1.5rem;
  width: 100%;
  max-width: 320px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 0 12px rgba(59, 130, 246, 0.15);
  cursor: pointer;
}

.certification-card:hover {
  transform: translateY(-8px);
  border-color: #3b82f6;
  box-shadow: 0 0 25px rgba(59, 130, 246, 0.35);
}

.img-wrapper {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.certification-img {
  width: 90%;
  height: 180px;
  object-fit: contain;
  border-radius: 8px;
  filter: drop-shadow(0 0 10px rgba(59, 130, 246, 0.3));
}

.cert-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.6rem;
  color: #fff;
}

.cert-desc {
  font-size: 0.95rem;
  color: #b0b0b0;
  line-height: 1.5;
}

.empty {
  color: #777;
  font-style: italic;
  margin-top: 2rem;
  font-size: 1.1rem;
}
.certifications-grid,
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 3rem !important; /* 🔥 force spacing between cards */
  justify-items: center;
  padding: 2rem !important;
}

.certification-card,
.skill-card {
  margin: 0 auto;
  max-width: 300px;
}

</style>
