<script setup lang="ts">
  import { SectionType } from '@/model/SectionType'
  import CloseButton from '@/components/atomic/CloseButton.vue'

  defineProps<{
    section: SectionType
    index: number
    selected: number
    onClick: (index: number) => void
  }>()
</script>

<template>
  <div
    id="cardContainer"
    :style="{ '--image': 'url(' + section.image + ')' }"
    :class="{
      selected: selected === index,
      nonSelected: ![index, -1].includes(selected),
    }"
  >
    <div
      class="contentContainer"
      :class="{ activeContentContainer: selected === index }"
    >
      <div class="title" @click="onClick(index)">
        {{ section.title }}
      </div>
      <component :is="section.content" class="content"></component>
    </div>
    <div class="closeButton">
      <CloseButton v-if="selected === index" @click="onClick(-1)" />
    </div>
  </div>
</template>

<style scoped lang="less">
  #cardContainer {
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    transition: all 500ms;
    box-shadow: 1px 0px 8px white, 1px 0px 8px white;
    &::before {
      content: '';
      position: absolute;
      width: 200%;
      height: 200%;
      top: -30%;
      left: -80%;
      z-index: -1;
      transform: rotate(30deg) skew(1deg, -20deg);
      background-image: var(--image);
      transition: all 500ms;
    }

    &:hover {
      width: 500%;
      & > .contentContainer > .title {
        text-shadow: 5px 5px 6px black, -5px -5px 6px black, 5px -5px 6px black,
          -5px 5px 6px black;
      }
    }
  }

  .selected {
    width: 100vw !important;
  }

  .nonSelected {
    width: 0 !important;
  }

  .closeButton {
    z-index: 10;
    height: 20px;
    width: 20px;
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;
  }

  .contentContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    transition: all 500ms;

    & > .content {
      height: 0;
      transition: all 500ms;
    }
  }

  .title {
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100vh;
    transition: all 500ms;
  }

  .activeContentContainer {
    justify-content: start;
    & > .title {
      height: 1em !important;
    }

    & > .content {
      height: calc(100vh - 1em);
    }
  }
</style>
