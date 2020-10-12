<template>
  <div class="media" :class="{ 'media--alt': alt }">
    <div class="media__image-container">
      <img class="media__image" src="@/assets/dog-unsplash.jpg" alt="Dog" />
    </div>
    <div class="media__body" :class="{ 'media__body--alt': alt }">
      <h3 class="media__heading">Media Heading</h3>
      <p class="media__text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit
        perspiciatis quis minima, dolorum aliquid repellat voluptatem
        repellendus labore ipsa, alias repudiandae ipsum earum rem officiis
        saepe maxime rerum distinctio voluptate!
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Media Object",
  props: {
    alt: Boolean
  }
}
</script>

<style lang="scss" scoped>
.media {
  border: 1px solid $color-grey-lightest;
  border-radius: 3px;
  box-shadow: $box-shadow-light;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-width: 40rem;

  &:not(:first-of-type) {
    margin-top: $spacing-large;
  }

  @include respond(tab-land) {
    display: grid;
    grid-template-columns: 40% 1fr;
    align-items: center;

    max-width: 100rem;

    &--alt {
      grid-template-columns: 1fr 40%;
    }
  }

  &__image-container {
    height: 100%;
    width: 100%;
  }

  &__image {
    display: block;
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  &__heading {
    margin-bottom: 0;
  }

  &__body {
    flex-grow: 1;
    margin: 0;
    padding: $spacing-medium;

    &--alt {
      order: -1;

      @include respond(tab-land) {
        text-align: right;
      }
    }
  }

  &__text {
    margin-top: $spacing-smallest;
  }
}
</style>