import { reactive } from 'vue'

const state = reactive({
  isActive: false,
  speed: 0,
})

const ONE_SECOND_IN_MILLISECOND = 1000

export function useTimer() {
  return {
    // === Constants
    ONE_SECOND_IN_MILLISECOND,
    // === Variables
    state,
    // === Methods
    setSpeed: (speed) => {
      state.speed = Number(speed)
    },
    toggleActive: () => {
      state.isActive = !state.isActive
    },
  }
}
