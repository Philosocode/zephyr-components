<template>
  <div className="form__group">
    <slot />
    <div className="form__border" />
    <label class="form__label" :id="name" :for="name">
      {{ nameCapitalized }}
    </label>
  </div>
</template>

<script>
export default {
  name: "Form Group",
  props: {
    name: String
  },
  computed: {
    nameCapitalized() {
      return this.name.toUpperCase()
    }
  }
}
</script>
