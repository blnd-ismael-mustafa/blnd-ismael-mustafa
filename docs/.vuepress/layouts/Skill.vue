<script setup>
import { useBlogType } from '@vuepress/plugin-blog/client'
import SkillList from '../components/SkillList.vue'

const skills = useBlogType('skill')
console.log('Skills:', skills.items)
</script>

<template>
  <main class="page skill-page">
    <SkillList :items="skills.items" />
  </main>
</template>

<style scoped>
.skill-page {
  padding: 3rem 1.5rem;
  text-align: center;
  color: #fff;
}

.page-title {
  font-size: 2.2rem;
  margin-bottom: 2rem;
  color: #3b82f6;
  font-weight: 700;
}
</style>
