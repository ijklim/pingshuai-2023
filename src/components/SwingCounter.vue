<template>
  <transition name='fade'>
    <div class='swing-counter-wrapper' @click='timer.toggleActive' v-if='counter > 0'>
      <div class='swing-counter' :class='{ "pause": !timer.state.isActive, "squat": shouldSquat }'>
        {{ counter }}
      </div>
    </div>
  </transition>
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
  data () {
    return {
      counter: 0,
      maxSwings: 5,
    }
  },

  computed: {
    shouldSquat() {
      return (this.counter === this.maxSwings)
    }
  },

  // methods
  methods: {
    setCounter () {
      this.counter = (this.counter++ % (this.maxSwings)) + 1
      // console.log('[SwingCounter.vue::setCounter()] Counter:', this.counter)
    },
  },

  // component Lifecycle hooks
  mounted() {
    // console.log('[SwingCounter.vue::mounted()] Speed:', this.speed)
    this.interval.start(this.setCounter, this.timer.state.speed)
    // console.log('[SwingCounter.vue::mounted()] Counter:', this.counter)
  },

  onUnmounted() {
    this.interval.end()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swing-counter-wrapper {
  /* Center element */
  position: fixed;
  top: 50%;
  left: 50%;
  /* bring your own prefixes */
  transform: translate(-50%, -50%);
}

.swing-counter-wrapper:hover {
  cursor: pointer;
}

.swing-counter {
  color: green;
  font-size: 20em;
  line-height: 1.1em;
}

/* Mobile and tablet landscape */
/* Note: Use DebugWindow.vue to test different device screen sizes */
@media screen and (max-height: 435px) {
  .swing-counter {
    font-size: 12em;
  }
}


.squat {
  color: lightgreen;
}

.pause {
  color: #999;
}


.fade-enter-active, .fade-leave-active {
  transition: all .5s ease-in-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
</style>