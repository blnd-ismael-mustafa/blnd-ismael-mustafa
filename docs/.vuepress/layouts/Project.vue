<script setup>
import { useBlogType } from '@vuepress/plugin-blog/client'
import ProjectList from '../components/ProjectList.vue'
import { computed } from 'vue'

// get projects (reactive ref)
const projects = useBlogType('project')

// VuePress gives a ref that sometimes updates later — unwrap it properly
const items = computed(() => (projects.value?.items ? [...projects.value.items] : []))

console.log('Projects loaded:', items.value)
</script>

<template>
  <main class="page project-page">
    <!-- render only after VuePress populates -->
    <ProjectList v-if="items.length" :items="items" />
    <div v-else class="empty">No projects yet. Time to build something.</div>
  </main>
</template>

<style scoped>
.project-page {
  padding: 2rem 1rem;
}

.empty {
  text-align: center;
  color: var(--vp-c-text-muted);
  font-style: italic;
  margin-top: 2rem;
}
</style>
