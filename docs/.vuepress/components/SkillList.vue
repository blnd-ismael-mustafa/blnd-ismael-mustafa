<script setup>
import { useBlogType } from '@vuepress/plugin-blog/client'
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'

const skills = useBlogType('skill')
</script>

<template>
  <ParentLayout>
    <template #page>
      <section class="skill-list">
        <h2 class="section-title">💡 My Skills</h2>

        <div v-if="!skills.items.length" class="empty">
          No skills added yet 😢
        </div>

        <div v-else class="skills-grid">
          <div
            v-for="{ info, path } in skills.items"
            :key="path"
            class="skill-card"
          >
            <div class="img-wrapper" v-if="info.cover">
              <img :src="info.cover" :alt="info.title" />
            </div>
            <h3>{{ info.title }}</h3>
            <p class="desc">{{ info.description }}</p>
          </div>
        </div>
      </section>
    </template>
  </ParentLayout>
</template>

<style scoped>
.skill-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 1rem;
  text-align: center;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: #3b82f6;
  text-shadow: 0 0 10px rgba(59, 130, 246, 0.6);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1100px;
}

.skill-card {
  background: #151515;
  border: 1px solid #2a2a2a;
  border-radius: 14px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.2);
}

.skill-card:hover {
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

.img-wrapper img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  filter: drop-shadow(0 0 8px rgba(59, 130, 246, 0.5));
}

h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #fff;
}

.desc {
  font-size: 0.9rem;
  color: #b0b0b0;
}

.empty {
  color: #888;
  font-style: italic;
  padding: 2rem;
}
</style>
