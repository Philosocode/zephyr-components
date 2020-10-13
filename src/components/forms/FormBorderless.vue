<template>
  <div class="container" style="grid-column: 2 / -2;">
    <h1 style="text-align: center;">Borderless Form</h1>
    <form
      class="form__container"
      acceptCharset="UTF-8"
      method="POST"
      action="#"
      name="contact"
      @submit.prevent="handleSubmit"
    >
      <FormGroup name="name">
        <FormInput
          type="text"
          placeholder="Your Name"
          id="name"
          name="name"
          v-model="name"
          required
          :touched="touched.name"
          @blur="handleBlur"
        />
      </FormGroup>

      <FormGroup name="email">
        <FormInput
          type="email"
          placeholder="Your Email"
          id="email"
          name="email"
          v-model="email"
          required
          :touched="touched.email"
          @blur="handleBlur"
        />
      </FormGroup>

      <FormGroup name="message">
        <FormTextarea
          placeholder="What do you need help with?"
          id="message"
          name="message"
          v-model="message"
          :handleBlur="handleBlur"
          :touched="touched.message"
        />
      </FormGroup>

      <div class="form__group">
        <p class="form__error is-visible">{{ error }}</p>
        <ButtonRippleSpread class="form__submit" type="submit" color="green">
          SUBMIT
        </ButtonRippleSpread>
      </div>

      <input type="hidden" name="hero_net" />
    </form>
  </div>
</template>

<script>
import FormGroup from "./FormGroup"
import FormInput from "./FormInput"
import FormTextarea from "./FormTextarea"
import ButtonRippleSpread from "@/components/buttons/ButtonRippleSpread"

export default {
  name: "Form Borderless",
  components: {
    FormGroup,
    FormInput,
    FormTextarea,
    ButtonRippleSpread
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      touched: {
        name: false,
        email: false,
        message: false
      },
      error: ""
    }
  },
  methods: {
    handleSubmit() {
      alert(this.name, this.email, this.message)
    },
    handleBlur(ev) {
      const inputName = ev.target.name
      if (this.touched[inputName]) return

      this.touched[inputName] = true
    }
  }
}
</script>

<style lang="scss">
$transition-append: 0.3s ease-in-out;

.form {
  &__container {
    font-family: $font-secondary;
    margin: 0 auto;
    margin-top: $spacing-medium;
    width: 100%;
    max-width: 80rem;

    @include respond(tab-land) {
      margin-top: $spacing-large;
      width: 100%;
    }
  }

  // Submit button w/ reCAPTCHA
  &__input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid $color-off-black;
    color: $color-off-black;
    font-size: $font-size-normal;
    font-weight: 500;
    line-height: 1.6;
    margin-top: $spacing-smallest;
    transition: color $transition-append;

    @include respond(tab-port) {
      font-size: $font-size-normal-big;
    }

    &:focus {
      outline: none;
    }

    // Expand border on focus or if touched + invalid
    &:focus + .form__border,
    &.is-touched:invalid + .form__border {
      transform: scale(1);
    }

    // Red border for invalid input
    &.is-touched:invalid + .form__border {
      background-color: $color-red;
      background: $gradient-red;
    }

    // Show label above input on focus
    &:focus ~ .form__label {
      opacity: 1;
      transform: translateY(0);
    }

    &::-webkit-input-placeholder {
      color: $color-grey;
      letter-spacing: 0.5px;
      line-height: 2.4rem;
      transition: opacity 0.2s ease-in;
    }

    &::-moz-placeholder {
      color: $color-grey;
      letter-spacing: 1px;
      line-height: 2.4rem;
      transition: opacity 0.2s ease-in;
    }

    &:focus::-webkit-input-placeholder {
      opacity: 0;
    }
    &:focus::-moz-placeholder {
      opacity: 0;
    }
  }

  &__border {
    background-color: $color-green;
    background: $gradient-green;
    height: 2px;
    width: 100%;
    position: absolute;
    bottom: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform $transition-append;
  }

  &__group {
    display: flex;
    flex-direction: column;
    margin-bottom: $spacing-medium;
    position: relative;
    width: 100%;

    &:nth-last-of-type(2) {
      margin-bottom: 0;
    }

    @include respond(tab-land) {
      margin-bottom: $spacing-large;
    }
  }

  &__label {
    color: $color-grey-dark;
    position: relative;
    left: 2px;
    transition: all $transition-append;
    order: -1; // position label above input
    opacity: 0;
    letter-spacing: 1px;
    font-weight: 600;
    font-size: $font-size-small;
    transform: translateY(4rem);
  }

  &__error {
    color: $color-red;
    font-size: $font-size-small;
    font-weight: 500;
    margin-bottom: $spacing-medium;
    margin-top: $spacing-medium;
    opacity: 0;
    transition: opacity $transition-append;

    &.is-visible {
      opacity: 1;
    }

    @include respond(tab-port) {
      font-size: $font-size-normal;
    }
  }

  &__recaptcha {
    margin-bottom: $spacing-small;
    margin-top: -$spacing-smallest;
    position: relative;
    left: -1px;

    @include respond(tab-port) {
      margin-bottom: $spacing-medium;
    }
  }

  &__submit {
    margin-top: $spacing-smallest;
    max-width: 20rem;
  }
}
</style>
