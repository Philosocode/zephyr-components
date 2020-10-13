<template>
  <input
    class="form__input"
    :class="{ 'is-touched': touched }"
    :type="type"
    :placeholder="placeholder"
    :id="name"
    :name="name"
    :required="required"
    :touched="touched"
    :blur="handleBlur"
    :value="value"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  name: "Form Input",
  props: {
    id: String,
    name: String,
    placeholder: String,
    required: Boolean,
    touched: Boolean,
    type: String,
    value: String,
    handleBlur: Function
  }
}
</script>
