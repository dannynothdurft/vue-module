/**
 * Content Slider Module
 * @author       Danny Nothdurft
 * @version      1.0.0
 * @license      MIT
 *
 * @module       contentSlider
 */

import { reactive, readonly } from "vue";

interface SliderState {
  slides: number;
  activeIndex: number;
  isAnimating: boolean;
  sliderSize: number;
}

const state = reactive<SliderState>({
  slides: 0,
  activeIndex: 0,
  isAnimating: false,
  sliderSize: 100,
});

type MutationKey = keyof SliderState;

const mutations = {
  updateValue<T extends MutationKey>(key: T, value: SliderState[T]) {
    state[key] = value;
  },
};

export default {
  state: readonly(state),
  mutations,
};
