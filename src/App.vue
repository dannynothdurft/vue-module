<template>
  <SliderContainerComponent>
    <SliderComponent>
      <ItemComponent bg="subhome-ai.jpg">Was geht 1</ItemComponent>
      <ItemComponent classes="was">Was geht 2</ItemComponent>
      <ItemComponent>Was geht 3</ItemComponent>
      <ItemComponent>Was geht 4</ItemComponent>
    </SliderComponent>
  </SliderContainerComponent>
</template>

<script setup lang="ts">
  import {SliderContainerComponent, SliderComponent, ItemComponent} from "./module/contentSlider"
</script>

<style scoped>
  .was {
    color: red;
  }
</style>
