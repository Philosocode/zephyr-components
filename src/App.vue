<template>
  <div></div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld"

export default {
  name: "App",
  components: {
    // HelloWorld
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
