import { defineClientConfig } from 'vuepress/client'

// layouts
import Project from './layouts/Project.vue'
import Skill from './layouts/Skill.vue'
import Certification from './layouts/Certification.vue'

// list components
import ProjectList from './components/ProjectList.vue'
import SkillList from './components/SkillList.vue'
import CertificationList from './components/CertificationList.vue'

export default defineClientConfig({
  layouts: {
    Project,
    Skill,
    Certification,
  },
  enhance({ app }) {
    app.component('ProjectList', ProjectList)
    app.component('SkillList', SkillList)
    app.component('CertificationList', CertificationList)
  },
})
