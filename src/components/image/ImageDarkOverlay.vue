<template>
  <div class="container">
    <div class="image__container">
      <img src="@/assets/dog-unsplash.jpg" alt="Dog" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Image Dark Overlay"
}
</script>

<style lang="scss" scoped>
.container {
  grid-column: 4 / -4;
}

.image__container {
  position: relative;

  &:hover::before {
    opacity: 0;
  }
}

.image__container::before {
  background-color: $color-black;
  content: "";
  height: 100%;
  opacity: 0.3;
  transition: opacity 0.3s ease-in-out;
  position: absolute;
  width: 100%;
}

img {
  object-fit: cover;
  display: block;
  height: 100%;
  width: 100%;
}
</style>
