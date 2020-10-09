<template>
  <footer>
    <ul class="nav">
      <li
        class="nav__item"
        v-for="navLink in footerNavLinks"
        :key="navLink.name"
      >
        <a class="nav__link" href="{{ navLink.path }}">{{ navLink.name }}</a>
      </li>
    </ul>

    <ul class="icon__list">
      <li class="icon" v-for="icon in socialIcons" :key="icon.iconLink">
        <a class="icon__link" :href="icon.iconLink">
          <i :class="icon.iconClass" />
        </a>
      </li>
    </ul>

    <div class="copyright">© 2020 Tam Le. All rights reserved.</div>
  </footer>
</template>

<script>
import { footerNavLinks } from "@/shared/navLinks"
import { socialIcons } from "@/shared/socialIcons"

export default {
  name: "FooterStacked",
  data() {
    return {
      footerNavLinks,
      socialIcons
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  border-top: 1px solid $color-grey-light;
  padding: 1rem;

  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;

  text-align: center;
}

.nav {
  display: flex;
  justify-content: center;

  list-style-type: none;
  padding-left: 0;

  &__item {
    margin: auto $spacing-medium;
  }

  &__link {
    color: $color-off-black;
    font-weight: 500;
    text-decoration: none;

    &:hover {
      color: $color-green;
    }
  }
}

.icon {
  &__list {
    display: flex;
    justify-content: center;

    list-style-type: none;
    padding-left: 0;
  }

  &__link {
    color: $color-off-black;
    margin-left: $spacing-small;
    margin-right: $spacing-small;
    font-size: 2.4rem;

    &:hover {
      color: $color-green;
    }
  }
}

.copyright {
  padding-bottom: $spacing-small;
}
</style>
