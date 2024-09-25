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
      class="slider-inner-wrapper"
      :class="{ ' is-animating': isAnimating }"
      ref="sliderRef"
    >
      <slot></slot>
    </div>
</template>

<script setup lang="ts">
    import Store from '../store/ContentSliderStore';
    import { onMounted, onBeforeUnmount, computed, ref } from 'vue';
    import Hammer from "hammerjs";

    const slides = computed(() => Store.state.slides);
    const sliderSize = computed(() => Store.state.sliderSize);
    const activeIndex = computed(() => Store.state.activeIndex);
    const isAnimating = computed(() => Store.state.isAnimating);

    let sliderRef = ref<HTMLElement | null>(null);

    const goToSlide = (index: number) => {
        if (index < 0) {
            Store.mutations.updateValue("activeIndex", 0);
        } else if (index > slides.value - 1) {
            Store.mutations.updateValue("activeIndex", slides.value - 1);
        } else {
            Store.mutations.updateValue("activeIndex", index);
            const percentage = -(sliderSize.value / slides.value) * index;
            animateSlider(percentage);
        }
    };

    const animateSlider = (percentage: any) => {
        Store.mutations.updateValue("isAnimating", true);
        if (sliderRef.value !== null) {
            sliderRef.value.style.transform = `translateX(${percentage}%)`;
        }
    };

    onMounted(() => {
        if (slides.value === 0) {
            if(sliderRef.value) {
                const SLIDES = sliderRef.value.children;
                Store.mutations.updateValue("slides", SLIDES.length);
                sliderRef.value.style.width = `${SLIDES.length * 100}%`;
            }
        }
    })

    onMounted(() => {
        if (sliderRef.value) {
            const hammer = new Hammer(sliderRef.value);

            hammer.on("swipeleft", () => {
                let newActiveIndex = activeIndex.value + 1;
                goToSlide(newActiveIndex);
            });

            hammer.on("swiperight", () => {
                let newActiveIndex = activeIndex.value - 1;
                goToSlide(newActiveIndex);
            });

            // Cleanup-Funktion
            onBeforeUnmount(() => {
                hammer.destroy();
            });
        }
    });

    onMounted(() => {
        if (isAnimating.value) {
      const timer = setTimeout(() => {
        Store.mutations.updateValue("isAnimating", false);
      }, 400);

      return () => clearTimeout(timer);
    }
    })

</script>

<style scoped>
    .slider-inner-wrapper {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .slider-inner-wrapper.is-animating {
        transition: all 400ms;
    }
</style>