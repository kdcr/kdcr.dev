<script setup lang="ts">
  import javaspaceImage from '@/assets/images/projects/javaspace.png'
  import planetariumImage from '@/assets/images/projects/planetarium.png'

  interface ProjectDTO {
    name: string
    description: string
    image?: string
    github: string
    demo?: string
  }

  const projects: ProjectDTO[] = [
    {
      name: 'Planetarium',
      description:
        'A planetarium webpage made with Zdog library, interactive with controls to change the focused planet. Due to limitations of Zdog, it is not at real scale.',
      image: planetariumImage,
      github: 'https://github.com/kdcr/planetarium',
    },
    {
      name: 'JavaSpace',
      description:
        "The 'Ciclo superior de desarrollo multiplataforma' course final project, a multi player game made with AlmasB's JavaFX based graphic engine.",
      image: javaspaceImage,
      github: 'https://github.com/kdcr/JavaSpace',
    },
    {
      name: 'Kdcr.os',
      description:
        'A web app mocking desktop environment, made with Vue, is still a work in progress, but already features a gallery app and the paint app. ',
      github: 'https://github.com/kdcr/kdcr.os',
    },
  ]
</script>

<template>
  <div>
    <div
      v-for="project in projects"
      :key="project.name"
      class="projectContainer"
    >
      <span id="name">{{ project.name }}</span>
      <span id="description">{{ project.description }}</span>
      <img :src="project.image" />
    </div>
    <div class="projectContainer">Much more to come...</div>
  </div>
</template>

<style scoped lang="less">
  .projectContainer {
    display: grid;
    grid-template-columns: calc(100% - 88px) 88px;
    grid-template-rows: 2;
    width: 100%;
    border-bottom: 1px solid gray;

    & > span {
      padding: 10px;
    }

    & > #name {
      font-size: 20px;
      font-weight: bold;
    }

    & > #description {
      grid-row-start: 2;
    }

    & > img {
      width: 88px;
      height: 88px;
      grid-column: 2;
      grid-row-start: 1;
      grid-row-end: 3;
    }
  }

  .projectContainer:first-child {
    border-top-right-radius: 8px;
    overflow: hidden;
  }

  .projectContainer:last-child {
    display: flex;
    justify-content: center;
    padding-top: 20px;
    border-bottom: 0;
  }
</style>
