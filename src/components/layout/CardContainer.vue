<script setup lang="ts">
  import { SectionType } from '@/model/SectionType'
  import CloseButton from '@/components/atomic/CloseButton.vue'

  defineProps<{
    section: SectionType
    index: number
    selected: number
    skewBackground: boolean
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
      skewedImage: skewBackground,
    }"
  >
    <div
      class="contentContainer"
      :class="{ activeContentContainer: selected === index }"
    >
      <div class="title">
        <span @click="onClick(index)">{{ section.title }}</span>
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
    transition: all 1s;
    box-shadow: 1px 0px 8px var(--color), 1px 0px 8px var(--color);
    &::before {
      content: '';
      z-index: -1;
      position: absolute;
      width: 100%;
      height: 100%;
      background-image: var(--image);
      transition: all 1s;
    }

    &:hover {
      width: 500%;
      & > .contentContainer > .title > span {
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
    top: 1em;
    left: 1.5em;
    cursor: pointer;
  }

  .contentContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    transition: all 1s;

    & > .content {
      height: 0;
      width: 0;
      transition: all 1000ms;
    }
  }

  .title {
    display: flex;
    align-items: center;
    transition: all 1s;
    height: 100vh;
    & > span {
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 10px 14px;
      border-radius: 8px;
    }
  }

  .activeContentContainer {
    justify-content: start;
    & > .title {
      height: 4em !important;
      align-items: flex-end;
      cursor: default;
    }

    & > .content {
      background-color: rgba(255, 255, 255, 0.2);
      height: calc(100vh - 6em);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-radius: 8px;
      width: calc(100vw - 5em);
    }
  }

  .skewedImage {
    &::before {
      width: 200% !important;
      height: 200% !important;
      top: -30%;
      left: -80%;
      transform: rotate(30deg) skew(1deg, -20deg);
    }
  }
</style>
