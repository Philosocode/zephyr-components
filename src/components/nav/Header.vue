<template>
  <header class="header grid">
    <Grid>
      <div class="header__content">
        <a class="logo" href="#">Zephyr Components</a>
        <nav class="nav">
          <ul class="nav__list">
            <li
              class="nav__item"
              v-for="navLink in navLinks"
              :key="navLink.name"
            >
              <a class="nav__link" href="{{ navLink.path }}">{{
                navLink.name
              }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </Grid>
  </header>
</template>

<script>
import Grid from "@/components/grid/Grid"

export default {
  name: "Header",
  components: { Grid },
  data() {
    return {
      navLinks: [
        { path: "/", name: "Home" },
        { path: "/about", name: "About" },
        { path: "/contact", name: "Contact" }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid $color-grey-lightest;
  display: none;
  padding: $spacing-small 0;

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;

    grid-column: 2 / -2;
  }

  @include respond(tab-land) {
    display: block;
  }
}

.logo {
  color: $color-off-black;
  font-size: $font-size-medium;
  font-weight: bold;
  text-decoration: none;
}

.nav {
  &__list {
    display: flex;
    justify-content: center;

    list-style-type: none;
    margin: 0;
    padding: 0;
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