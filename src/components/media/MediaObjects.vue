<template>
  <div class="container">
    <h1>Media Objects</h1>
    <MediaObject />
    <MediaObject alt />
  </div>
</template>

<script>
import MediaObject from "./MediaObject"

export default {
  name: "Media Objects",
  components: { MediaObject }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  grid-column: 2 / -2;
}

h1 {
  text-align: center;
}
</style>
