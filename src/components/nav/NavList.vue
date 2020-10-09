<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item" v-for="navLink in navLinks" :key="navLink.name">
        <a class="nav__link" href="{{ navLink.path }}">{{ navLink.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { navLinks } from "@/shared/navLinks"

export default {
  name: "NavList",
  data() {
    return {
      navLinks
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  &__list {
    display: none;

    list-style-type: none;
    margin: 0;
    padding: 0;

    @include respond(tab-land) {
      display: flex;
      justify-content: center;
    }
  }

  &__item {
    font-weight: bold;
    margin-right: $spacing-medium;

    &:last-child {
      margin-right: 0;
    }
  }

  &__link {
    color: $color-off-black;
    text-decoration: none;

    &:hover {
      color: $color-green;
    }
  }
}
</style>
