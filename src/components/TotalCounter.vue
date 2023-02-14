<template>
  <div class='total-counter' :class='{ "pause": !timer.state.isActive }'>
    {{ counter }}
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
  data () {
    return {
      counter: 0,
      timeInterval: '',
    }
  },

  // component Lifecycle hooks
  mounted () {
    this.interval.start(() => {
      this.counter += 1
    }, this.timer.state.speed)
  },

  onUnmounted() {
    this.interval.end()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.total-counter {
  float: right;
  margin: 15px;
  color: red;
  font-size: 1.5em;
}

.pause {
  color: #999;
}
</style>