<template>
  <textarea
    class="form__input"
    :class="{ 'is-touched': touched }"
    :placeholder="placeholder ?? 'Enter your message...'"
    :id="name"
    :name="name"
    :required="required"
    :blur="handleBlur"
    :touched="touched"
    :value="value"
    @input="$emit('input', $event.target.value)"
    rows="8"
    maxLength="999"
  />
</template>

<script>
export default {
  name: "Form Textarea",
  props: {
    id: String,
    name: String,
    placeholder: String,
    required: Boolean,
    touched: Boolean,
    value: String,
    handleBlur: Function
  }
}
</script>
