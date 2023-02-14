<template>
  <div class='swing-indicator-wrapper'>
    <transition name='move'>
      <div class='swing-indicator' ref="swing-indicator" v-show='timer.state.isActive'></div>
    </transition>
  </div>
</template>

<script>
import { useInterval } from "@/store/useInterval"
import { useTimer } from "@/store/useTimer"

export default {
  setup() {
    return {
      interval: useInterval(),
      timer: useTimer(),
    }
  },

  // variables
  data() {
    return {
      maxSwings: 5
    }
  },

  computed: {
    /**
     * Time it takes to swing up or down, in millisecond
     */
    swingTimeOneDirectionInMs() {
      // Note: 100ms deduction is compensation for animation delay
      // Note: The slight pause at the end of the swing makes for a smoother transition
      return (this.timer.state.speed / 2) - 100
    },
  },

  // methods
  methods: {
    swing() {
      const indicator = this.$refs['swing-indicator']
      // Downward movement, completes in half the time of full swing
      indicator.style.transform = 'translateY(' + (window.innerHeight - 170) + 'px)'
      setTimeout(() => {
        // Upward movement
        indicator.style.transform = 'translateY(0)'
      }, this.swingTimeOneDirectionInMs)
    }
  },

  // component Lifecycle hooks
  mounted () {
    this.interval.start(this.swing, this.timer.state.speed)

    // Set basic animation style
    const indicator = this.$refs['swing-indicator']
    indicator.style.transition = 'all ' + (this.swingTimeOneDirectionInMs / 1000) + 's'
    indicator.style.transitionTimingFunction = 'ease-in-out'
  },

  onUnmounted() {
    this.interval.end()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swing-indicator-wrapper {
  margin-top: 60px;
  position: fixed;
  width: 100%;
}

.swing-indicator {
  background-image: url('../assets/swing_indicator.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  height: 36px;
  width: 100%;
  margin: auto;
}
</style>