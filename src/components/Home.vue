<template>
  <!-- Note: Do not mount child components until speed is set to prevent intervals with 0 speed -->
  <div class="hello" v-if="isSpeedSet">
    <!-- Top left -->
    <Timer />

    <!-- Top right -->
    <TotalCounter />

    <!-- Play and pause buttons -->
    <Controls />

    <!-- Large number in the middle when timer is running -->
    <SwingCounter />

    <SwingIndicator />
  </div>
</template>

<script>
import { useTimer } from "@/store/useTimer"

import Controls from './Controls'
import DebugWindow from './DebugWindow'
import SwingCounter from './SwingCounter'
import SwingIndicator from './SwingIndicator'
import Timer from './Timer'
import TotalCounter from './TotalCounter'

export default {
  components: {
    Controls,
    DebugWindow,
    SwingCounter,
    SwingIndicator,
    Timer,
    TotalCounter
  },

  setup() {
    return {
      timer: useTimer(),
    }
  },

  data() {
    return {
      isSpeedSet: false,
    }
  },

  mounted() {
    // Set speed
    this.timer.setSpeed(import.meta.env.VITE_SWING_SPEED)
    this.isSpeedSet = true
  }
}
</script>
