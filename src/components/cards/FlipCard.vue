<template>
  <div class="flip-card">
    <div class="flip-card__side flip-card__side--front">
      <div class="flip-card__icon">
        <i class="fas fa-bolt" />
      </div>
      <h4 class="flip-card__title">Performance</h4>
      <p class="flip-card__description">
        Fast. Clean. Powerful.
        <br />
        Your product is optimized for performance and built for speed.
      </p>
    </div>
    <div class="flip-card__side flip-card__side--back">
      <div class="flip-card__icon">
        <i class="fas fa-fire" />
      </div>
      <h4 class="flip-card__title">Modern</h4>
      <p class="flip-card__description">
        Rest assured, your product is created with best practices and
        cutting-edge technologies.
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
$card-height: 40rem;

.flip-card {
  cursor: pointer;
  perspective: 150rem;

  // Set size of each card face
  // height: 40rem;
  // width: 30rem;

  // Starting from tab-landscape (<1200px), this will control styles for 2 cards (front and back, side-by-side)
  @include respond(tab-land) {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;

    &:not(:last-child) {
      margin-bottom: 5rem;
    }
  }

  @include respond(tab-port) {
    height: 34rem;
    width: 26rem;
  }

  @include respond(phone) {
    display: block;
    height: 52rem; // Now both sides are stacked on top of each other
    margin: 0;
    width: 19rem;

    flex-direction: column;
  }

  // Styles for both card faces
  &__side {
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 2rem;
    box-shadow: $box-shadow-default;
    transition: all 0.3s ease;
    width: 100%;

    position: absolute;
    left: 0;
    top: 0;

    // Control icon & text content for each card
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-start;

    @include respond(tab-land) {
      margin: 0 4rem;
      position: static;
    }

    @include respond(tab-port) {
      margin: 0 2rem;
    }
    @include respond(phone) {
      margin: 0;
    }

    // Use min-* to make sure the cards don't get scrunched up
    // Size of each card face is determined by .flip-card height & width
    &--front,
    &--back {
      min-height: 100%;
      min-width: 100%;

      @include respond(phone) {
        min-height: 50%;
      }
    }

    &--front {
      background-color: $color-off-white;
      color: $color-off-black;

      @include respond(tab-land) {
        transform: rotateY(0);
      }

      @include respond(phone) {
        position: relative;
        left: -2rem;
      }
    }

    &--back {
      background-color: $color-off-black;
      color: $color-grey-lightest;
      transform: rotateY(180deg);

      @include respond(tab-land) {
        transform: rotateY(0);
      }

      @include respond(phone) {
        margin-top: 2.5rem;
        position: relative;
        left: 2rem;
      }
    }
  }

  &:hover &__side {
    &--front {
      transform: rotateY(-180deg) translateY(-0.5rem);

      @include respond(tab-land) {
        transform: none;
      }
    }

    &--back {
      transform: rotateY(0) translateY(-0.5rem);

      @include respond(tab-land) {
        transform: none;
      }
    }
  }

  &:active &__side {
    box-shadow: $box-shadow-pressed;
  }

  &:active &__side--back {
    transform: translateY(-0.25rem);

    // @include respond(tab-land) {
    //   transform: none;
    // }
  }


  &__icon {
    // margin: 0;
    // transform: translateY(5rem);

    // @include respond(tab-port) {
    //   transform: translateY(4rem);
    // }

    // @include respond(phone) {
    //   transform: translateY(3rem);
    // }

    & > i {
      // font-size: 7.5rem;

      // @include respond(tab-port) {
      //   font-size: 6rem;
      // }

      // @include respond(phone) {
      //   font-size: 4rem;
      // }
    }
  }

  &__title {
    // margin: 0;
    // transform: translateY(8rem);

    // @include respond(tab-port) {
    //   transform: translateY(6rem);
    // }

    // @include respond(phone) {
    //   transform: translateY(4rem);
    // }
  }

  &__description {
    margin: 0;
    max-width: 22rem;
    transform: translateY(8rem);

    @include respond(tab-port) {
      max-width: 21rem;
      transform: translateY(5.7rem);
    }

    @include respond(phone) {
      max-width: 18rem;
      transform: translateY(4rem);
    }
  }
}
</style>
