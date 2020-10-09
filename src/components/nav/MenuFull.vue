<template>
  <Burger :menuOpen="menuOpen" :toggleMenu="toggleMenu" />
  <div class="menu" v-if="menuOpen">
    <ul class="menu__list">
      <li class="menu__item" v-for="navLink in navLinks" :key="navLink.name">
        <a class="menu__link" href="{{ navLink.path }}">{{ navLink.name }}</a>
      </li>
    </ul>
    <div class="line"></div>
    <SocialIconList />
  </div>
</template>

<script>
import Burger from "@/components/nav/Burger"
import SocialIconList from "@/components/nav/SocialIconList"

import { navLinks } from "@/shared/navLinks"
import { socialIcons } from "@/shared/socialIcons"

export default {
  name: "MenuFull",
  components: { Burger, SocialIconList },
  data() {
    return {
      menuOpen: false,
      navLinks,
      socialIcons
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;

  position: fixed;
  left: 0;
  top: 0;

  width: 100vw;
  z-index: 1000;

  &__list {
    list-style-type: none;
    padding-left: 0;
    text-align: center;
  }

  &__item {
    margin: $spacing-smallest auto;
  }

  &__link {
    color: $color-black;
    font-weight: bold;
    font-size: $font-size-large;
    text-decoration: none;
  }
}

.line {
  background: $color-grey-lighter;
  height: 1px;
  width: 100%;
  max-width: 15rem;
}
</style>