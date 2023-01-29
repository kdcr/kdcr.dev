<script setup lang="ts">
  import { ref } from 'vue'

  import projectsImage from '@/assets/images/page/screenshot.png'
  import CardContainer from './components/layout/CardContainer.vue'
  import { SectionType } from './model/SectionType'
  import ProjectsPage from './components/pages/ProjectsPage.vue'
  import MyselfPage from './components/pages/MyselfPage.vue'
  import PhotosPage from './components/pages/PhotosPage.vue'

  const sections: SectionType[] = [
    { title: 'Projects', image: projectsImage, content: ProjectsPage },
    { title: 'About myself', image: '', content: MyselfPage },
    { title: 'Photography', image: '', content: PhotosPage },
  ]

  const selectedCard = ref(-1)

  function handleCardClick(index: number) {
    selectedCard.value = index
  }
</script>

<template>
  <div id="root">
    <CardContainer
      v-for="(section, index) in sections"
      :key="section.title"
      :section="section"
      :index="index"
      :selected="selectedCard"
      :on-click="handleCardClick"
    />
  </div>
</template>

<style scoped>
  #root {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    overflow: hidden;
  }
</style>
