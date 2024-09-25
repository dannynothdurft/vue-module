/**
 * Content Slider Module
 * @author       Danny Nothdurft
 * @version      1.0.0
 * @license      MIT
 *
 * @module       contentSlider
 */
 
<template>
    <div className="navigation">
        <button
            v-for="(slide, index) in slides"
            :key="index"
            :class="{ 'bullet-active': activeIndex === index }"
            @click="bulletClick(index)"
        ></button>
    </div>
</template>

<script setup lang="ts">
    import Store from '../store/ContentSliderStore';
    import { onMounted, computed, ref } from 'vue';

    const slides = computed(() => Store.state.slides);
    const sliderSize = computed(() => Store.state.sliderSize);
    const activeIndex = computed(() => Store.state.activeIndex);

    let sliderElement = ref<HTMLElement | null>(null);

    onMounted(() => {
        sliderElement.value = document.querySelector(".slider-inner-wrapper");
    });


    const bulletClick = (index: number) => {
        if (index < 0) {
            Store.mutations.updateValue("activeIndex", 0);
        } else if (index > slides.value - 1) {
            Store.mutations.updateValue("activeIndex", slides.value - 1);
        } else {
            Store.mutations.updateValue("activeIndex", index);
        const percentage = -(sliderSize.value / slides.value) * index;
            Store.mutations.updateValue("isAnimating", true);
            if (sliderElement.value !== null) {
                sliderElement.value.style.transform = `translateX(${percentage}%)`;
            }
        }
    };

</script>

<style scoped>
    .navigation {
        z-index: 2;
        position: absolute;
        left: 50%;
        bottom: 20px;
        transform: translate(-50%, 0);
    }

    button {
        width: 15px;
        height: 15px;
        background-color: rgba(255, 255, 255, 1);
        border: none;
        border-radius: 15px;
        margin-right: 20px;
        cursor: pointer;
    }

    button.bullet-active {
        background-color: orange;
    }

    button:focus {
        outline: none;
    }

    button:last-child {
        margin-right: 0;
    }
</style>