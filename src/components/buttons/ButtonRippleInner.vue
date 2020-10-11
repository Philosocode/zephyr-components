<template>
  <button class="ripples button">
    <slot />
    <div class="ripple__container" @mousedown="showRipple">
      <span
        :key="ripple.id"
        class="ripple__span"
        v-for="ripple in ripples"
        :style="ripple"
      />
    </div>
  </button>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "rgba(255, 255, 255, 0.3)"
    }
  },
  data() {
    return {
      ripples: [],
      timer: undefined
    }
  },
  beforeUnmount() {
    this.cleanUp()
  },
  methods: {
    showRipple(ev) {
      const rippleContainer = ev.currentTarget
      const size = rippleContainer.offsetWidth
      const pos = rippleContainer.getBoundingClientRect()

      const x = ev.pageX - (pos.x + window.pageXOffset) - size / 2
      const y = ev.pageY - (pos.y + window.pageYOffset) - size / 2

      const ripple = {
        top: y + "px",
        left: x + "px",
        height: size + "px",
        width: size + "px",
        background: this.color,
        id: Date.now()
      }

      this.ripples.push(ripple)
    },
    cleanUp() {
      this.ripples = []
      if (this.timer) clearTimeout(this.timer)
    }
  },
  watch: {
    ripples: {
      handler() {
        this.timer = setTimeout(() => {
          this.cleanUp()
        }, 2000)
      },
      deep: true
    }
  }
}
</script>

<style lang="scss" scoped>
.ripples {
  cursor: pointer;
  overflow: hidden;
  position: relative;
}

.ripple {
  &__container {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &__span {
    animation: ripple 1s;
    background: $color-green;
    border-radius: 100%;
    display: inline-block;
    position: absolute;
    transform: scale(0);
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
}
</style>
