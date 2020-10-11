<template>
  <Header />
  <main>
    <Grid>
      <!-- <FlipCards /> -->
      <Buttons />
    </Grid>
  </main>
  <FooterStacked />
  <FooterLong />
</template>

<script>
import Buttons from "@/components/buttons/Buttons"
import ButtonRippleInner from "@/components/buttons/ButtonRippleInner"
// import FlipCards from "@/components/cards/FlipCards"
import Header from "@/components/nav/Header"
import Grid from "@/components/grid/Grid"
// import FooterStacked from "@/components/nav/FooterStacked"
import FooterLong from "@/components/nav/FooterLong"

export default {
  name: "App",
  components: {
    ButtonRippleInner,
    Buttons,
    // FlipCards,
    Grid,
    Header,
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
  position: relative;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
