<template>
  <div class='timer' :class='{ "pause": !timer.state.isActive }'>
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
      timeDifference: 0,
      timeInterval: '',
    }
  },

  // methods
  computed: {
    counter() {
      const time = new Date(this.timeDifference)
      return `
        ${('00' + time.getUTCHours()).slice(-2)}
        :
        ${('00' + time.getUTCMinutes()).slice(-2)}
        :
        ${('00' + time.getUTCSeconds()).slice(-2)}
      `
    },
  },

  // component Lifecycle hooks
  mounted () {
    this.interval.start(() => {
      this.timeDifference += this.timer.ONE_SECOND_IN_MILLISECOND
    })
  },

  onUnmounted() {
    this.interval.end()
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.timer {
  float: left;
  margin: 15px;
  color: red;
  font-size: 1.5em;
}

.pause {
  color: #999;
}
</style>
