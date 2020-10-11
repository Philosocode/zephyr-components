<template>
  <div style="grid-column: 4 / -4">
    <h1>Buttons</h1>
    <div class="buttons">
      <button class="button solid">Button Solid</button>
      <button class="button hollow">Button Hollow</button>
      <button class="button color-border">Color Border</button>

      <ButtonRippleSpread color="white">Ripple Spread</ButtonRippleSpread>
      <ButtonRippleSpread color="black">Ripple Spread</ButtonRippleSpread>
      <ButtonRippleSpread color="green">Ripple Spread</ButtonRippleSpread>

      <ButtonRippleInner color="rgba(0,178,125,0.3)"
        >Ripple Inner</ButtonRippleInner
      >
    </div>
  </div>
</template>

<script>
import ButtonRippleSpread from "./ButtonRippleSpread"
import ButtonRippleInner from "./ButtonRippleInner"

export default {
  name: "Buttons",
  components: {
    ButtonRippleSpread,
    ButtonRippleInner
  }
}
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: $spacing-large;

  justify-items: center;
  align-items: center;
}

.button {
  border-radius: 1px;
  box-shadow: $box-shadow-light;
  cursor: pointer;
  font-size: $font-size-small;
  font-weight: 500;
  letter-spacing: 1px;
  padding: 1em 1.5em;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  width: max-content;
}

.solid {
  background-color: $color-green;
  border: none;
  color: $color-white;

  &:hover {
    transform: translateY(-4px);
    box-shadow: $box-shadow-default;
  }

  &:active,
  &:focus {
    transform: translateY(-2px);
    box-shadow: $box-shadow-pressed;
    outline: none;
  }
}

.hollow {
  background-color: transparent;
  border: 2px solid $color-black;

  font-size: $font-size-small;
  letter-spacing: 1px;
  padding: 1em 1.5em;
  text-transform: uppercase;

  &:hover {
    background-color: $color-black;
    color: $color-white;
  }
}

.color-border {
  background-color: transparent;
  border: 2px solid $color-black;

  font-size: $font-size-small;
  letter-spacing: 1px;
  padding: 1em 1.5em;
  text-transform: uppercase;

  &:hover {
    border-color: $color-green;
    color: $color-green;
  }
}
</style>
