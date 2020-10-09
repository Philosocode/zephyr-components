<template>
  <Grid>
    <div style="grid-column: 2 / -2">
      <h1>Flip Cards</h1>
      <FlipCard />
    </div>
  </Grid>
</template>

<script>
import Grid from "@/components/grid/Grid"
import FlipCard from "@/components/cards/FlipCard"

export default {
  name: "Flip Cards",
  components: { FlipCard, Grid }
}
</script>

<style>
</style>