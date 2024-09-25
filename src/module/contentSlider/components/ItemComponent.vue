/**
 * Content Slider Module
 * @author       Danny Nothdurft
 * @version      1.0.0
 * @license      MIT
 *
 * @module       contentSlider
 */
 
<template>
    <div
      class="slider"
      :class="classes"
      :style="itemStyle"
    >
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
    import { defineProps, computed } from "vue";

    const props = defineProps<{bg?: string; classes?: string}>();

    const itemStyle = computed(() => {
    return props.bg
        ? {
            backgroundImage: `url(${props.bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }
        : undefined;
    });
</script>

<style scoped>
    .slider {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 1;
    }
</style>