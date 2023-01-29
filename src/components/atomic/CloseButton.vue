<script setup lang="ts"></script>

<template>
  <div id="button">X</div>
</template>

<style scoped lang="less">
  #button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 26px;
    width: 26px;
    box-shadow: 0px 0px 10px black;
    border-radius: 100%;
    &:hover {
      box-shadow: 0px 0px 20px black;
    }
  }
</style>
