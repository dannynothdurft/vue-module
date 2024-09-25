/**
 * Content Slider Module
 * @author       Danny Nothdurft
 * @version      1.0.0
 * @license      MIT
 *
 * @module       contentSlider
 */
 
<template>
    <div className="slider-outer-wrapper">
        <slot></slot>
        <NavigationComponent />
    </div>
</template>

<script setup lang="ts">
    import NavigationComponent from "./NavigationComponent.vue";
</script>

<style>
    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    .slider-outer-wrapper{
        overflow: hidden;
        height: 100vh;
        width: 100%;
        background-color: rgba(31, 31, 31, 1);
        position: relative;
    }
</style>