<template>
  <Header />
</template>

<script>
import Header from "@/components/nav/Header"

export default {
  name: "App",
  components: {
    Header
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
</style>
