<script setup>
import { useBlogType } from '@vuepress/plugin-blog/client'
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'

const projects = useBlogType('project')
</script>

<template>
  <ParentLayout>
    <template #page>
      <section class="project-list">
        <h2 class="section-title">🚀 My Projects</h2>

        <div v-if="!projects.items.length" class="empty">
          <p>No projects yet. Time to build something cool 😎</p>
        </div>

        <div v-else class="projects-grid">
          <article
            v-for="{ info, path } in projects.items"
            :key="path"
            class="project-card"
            @click="$router.push(path)"
          >
            <div class="img-wrapper" v-if="info.cover">
              <img :src="info.cover" :alt="info.title" class="project-img" />
            </div>

            <h3 class="project-title">{{ info.title }}</h3>
            <p v-if="info.description" class="project-desc">
              {{ info.description }}
            </p>
          </article>
        </div>
      </section>
    </template>
  </ParentLayout>
</template>

<style scoped>
.project-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #3b82f6;
  text-shadow: 0 0 10px rgba(59, 130, 246, 0.6);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1100px;
}

.project-card {
  background: #151515;
  border: 1px solid #2a2a2a;
  border-radius: 14px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.2);
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 0 25px rgba(59, 130, 246, 0.4);
  border-color: #3b82f6;
}

.img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}

.project-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
  filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.3));
}

.project-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  margin: 1rem 0 0.5rem;
}

.project-desc {
  font-size: 0.9rem;
  color: #b0b0b0;
  line-height: 1.4;
}

.empty {
  color: #888;
  font-style: italic;
  padding: 2rem;
}
</style>
