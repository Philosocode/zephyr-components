<template>
  <button class="button" :class="colourClass"><slot /></button>
</template>

<script>
export default {
  name: "Button Ripple Spread",
  props: {
    color: String
  },
  computed: {
    colourClass() {
      return {
        white: this.color == "white",
        black: this.color == "black",
        green: this.color == "green"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  &,
  &:link,
  &:visited {
    border: none;
    box-shadow: $box-shadow-light;
    cursor: pointer;
    display: inline-block;
    padding: 1em 1.5em;
    position: relative;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    box-shadow: $box-shadow-default;
    transform: translateY(-4px);

    // Scale the ripple
    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
    }
  }

  &:active,
  &:focus {
    box-shadow: $box-shadow-pressed;
    outline: none;
    transform: translateY(-2px);
  }

  // Ripple styles
  &:after {
    content: "";
    // display: inline-block;
    height: 100%;

    position: absolute;
    left: 0;
    top: 0;

    transition: all 0.4s ease-in-out;
    width: 100%;
    z-index: -1;
  }

  // Colour Variations
  &.white {
    background-color: $color-off-white;
    color: $color-off-black;

    &:after {
      background-color: $color-off-white;
    }
  }

  &.black {
    background-color: $color-grey-darkest;
    color: $color-off-white;

    &:after {
      background-color: $color-grey-darkest;
    }
  }

  &.green {
    background-color: $color-green;
    color: $color-off-white;

    &:after {
      background-color: $color-green;
    }
  }
}
</style>