<template>
  <div class="grid">
    <slot />
  </div>
</template>

<script>
export default {
  name: "Grid"
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  row-gap: $spacing-large;
}
</style>
