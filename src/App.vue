<template>
  <div class="site-container">
    <Header />
    <main class="page-container">
      <Grid>
        <FlipCards />
        <!-- <Buttons /> -->
        <!-- <MediaObjects /> -->
        <!-- <ImageDarkOverlay /> -->
      </Grid>
    </main>
    <!-- <FooterStacked /> -->
    <FooterLong />
  </div>
</template>

<script>
import Buttons from "@/components/buttons/Buttons"
import ButtonRippleInner from "@/components/buttons/ButtonRippleInner"
import FlipCards from "@/components/cards/FlipCards"
import Header from "@/components/nav/Header"
import ImageDarkOverlay from "@/components/image/ImageDarkOverlay"
import Grid from "@/components/grid/Grid"
import MediaObjects from "@/components/media/MediaObjects"
// import FooterStacked from "@/components/nav/FooterStacked"
import FooterLong from "@/components/nav/FooterLong"

export default {
  name: "App",
  components: {
    ButtonRippleInner,
    Buttons,
    FlipCards,
    Grid,
    ImageDarkOverlay,
    Header,
    MediaObjects,
    // FooterStacked,
    FooterLong
  }
}
</script>

<style lang="scss">
:root {
  box-sizing: border-box;
}

html {
  font-size: 62.5%; // 1rem = 10px, 10/16 = 62.5%
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  font-family: $font-primary;
  font-size: 1.6rem;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.site-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page-container {
  margin-top: $spacing-large;
  margin-bottom: $spacing-larger;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
