<template>
  <ul class="icon__list">
    <li class="icon" v-for="icon in socialIcons" :key="icon.iconLink">
      <a class="icon__link" :href="icon.iconLink">
        <i :class="icon.iconClass" />
      </a>
    </li>
  </ul>
</template>

<script>
import { socialIcons } from "@/shared/socialIcons"

export default {
  name: "Social Icon List",
  data() {
    return {
      socialIcons
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>
