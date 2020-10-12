<template>
  <footer class="footer">
    <ul class="nav">
      <li
        class="nav__item"
        v-for="navLink in footerNavLinks"
        :key="navLink.name"
      >
        <a class="nav__link" href="{{ navLink.path }}">{{ navLink.name }}</a>
      </li>
    </ul>

    <SocialIconList />

    <div class="copyright">© 2020 Tam Le. All rights reserved.</div>
  </footer>
</template>

<script>
import SocialIconList from "@/components/nav/SocialIconList"

import { footerNavLinks } from "@/shared/navLinks"
import { socialIcons } from "@/shared/socialIcons"

export default {
  name: "FooterLong",
  components: { SocialIconList },
  data() {
    return {
      footerNavLinks,
      socialIcons,
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid $color-grey-light;
  padding: 1rem;
  text-align: center;

  @include respond(tab-land) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
  }
}

.nav {
  display: flex;
  justify-content: center;

  list-style-type: none;
  padding-left: 0;

  &__item {
    margin: auto $spacing-small;

    @include respond(tab-land) {
      margin: auto $spacing-medium;
    }
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

.copyright {
  padding-bottom: $spacing-small;
  order: -1;

  @include respond(tab-land) {
    padding-bottom: 0;
  }
}
</style>
