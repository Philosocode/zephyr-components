<template>
  <div class="container">
    <h1>Flip Cards</h1>
    <FlipCard />
  </div>
</template>

<script>
import FlipCard from "@/components/cards/FlipCard"

export default {
  name: "Flip Cards",
  components: { FlipCard }
}
</script>

<style lang="scss" scoped>
.container {
  grid-column: 2 / -2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>