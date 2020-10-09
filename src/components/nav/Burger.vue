<template>
  <div :class="{ burger: true, 'menu-open': menuOpen }" @click="toggleMenu">
    <div class="burger__line burger__line--top"></div>
    <div class="burger__line burger__line--middle"></div>
    <div class="burger__line burger__line--bottom"></div>
  </div>
</template>

<script>
export default {
  name: "Burger",
  props: {
    menuOpen: Boolean,
    toggleMenu: Function
  }
}
</script>

<style lang="scss" scoped>
.burger {
  cursor: pointer;
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.2s ease-in-out;
  height: 1.4rem;
  width: 2.6rem;
  z-index: 2000;

  @include respond(tab-land) {
    display: none;
  }
}

.burger__line {
  background-color: $color-off-black;
  height: 2px;
  transition: all 0.2s ease-in-out;
  position: absolute;
  width: 100%;

  &--middle {
    top: 50%;
    transform: translateY(-50%);
  }

  &--top {
    top: 0;
  }

  &--bottom {
    bottom: 0;
  }
}

.burger.menu-open {
  & > .burger__line--middle {
    opacity: 0;
  }

  & > .burger__line--top {
    top: 50%;
    transform: translateY(-50%) rotate(135deg);
  }

  & > .burger__line--bottom {
    top: 50%;
    transform: translateY(-50%) rotate(-135deg);
  }
}
</style>