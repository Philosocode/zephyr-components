<template>
  <header class="header grid">
    <Grid>
      <div class="header__content">
        <a class="logo" href="#">Zephyr Components</a>
        <NavList :navLinks="navLinks" />
        <MenuFull />
      </div>
    </Grid>
  </header>
</template>

<script>
// Get screen width: https://stackoverflow.com/a/63944126
import MenuFull from "@/components/nav/MenuFull"
import Grid from "@/components/grid/Grid"
import NavList from "@/components/nav/NavList"

import { navLinks } from "@/shared/navLinks"

export default {
  name: "Header",
  components: {
    MenuFull,
    NavList,
    Grid
  },
  data() {
    return {
      navLinks
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid $color-grey-lightest;
  padding: $spacing-small 0;

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    grid-column: 2 / -2;
  }
}

.logo {
  color: $color-off-black;
  font-size: $font-size-medium;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    color: $color-green;
  }
}
</style>
