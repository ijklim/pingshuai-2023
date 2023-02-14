import { useTimer } from '@/store/useTimer'

export function useInterval() {
  const timer = useTimer()
  let intervalId = ''

  return {
    // === Methods
    end: () => {
      clearInterval(intervalId)
    },
    /**
     * Create an interval that will only execute code when timer.state.isActive is true
     *
     * @param {Function} codeToExecute
     * @param {int} [delay=0]
     */
    start: (codeToExecute, delay = 0) => {
      intervalId = setInterval(() => {
        if (!timer.state.isActive) {
          return
        }

        codeToExecute()
      }, delay || timer.ONE_SECOND_IN_MILLISECOND)
    },
  }
}