<template>
  <div :class="formCheckClass">
    <input
      :class="formCheckInputClass"
      :aria-label="ariaLabel"
      :aria-labelledby="ariaLabelledby"
      :autofocus="autofocus"
      :disabled="disabled"
      :form="form"
      :id="id"
      :name="name"
      :required="required"
      type="checkbox"
      :value="modelValue"
      :checked="modelValue"
      @change="onChange"
    >
    <label :class="formCheckLabelClass" :for="id">
      <slot/>
    </label>
  </div>
</template>

<script setup>
import {computed} from "vue";

const emit = defineEmits(['change', 'update:modelValue']);
const props = defineProps({
  ariaLabel: {
    type: String,
  },
  ariaLabelledby: {
    type: String,
  },
  autofocus: {
    type: Boolean,
    default: false,
  },
  button: {
    type: Boolean,
    default: false,
  },
  buttonVariant: {
    type: String,
    default: 'outline-secondary',
  },
  checked: {
    type: [Boolean],
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  form: {
    type: String,
  },
  inline: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
    default: 'checkbox'
  },
  name: {
    type: String,
    default: 'checkbox',
  },
  required: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
  },
  stacked: {
    type: Boolean,
    default: false,
  },
  state: {
    type: Boolean,
    default: null,
  },
  switch: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
  },
  modelValue: {
    type: [Number, Boolean],
    default: false,
  },
})

const formCheckClass = computed(() => {
  return [
    !props.button ? 'form-check' : null,
    !props.button && props.variant ? 'form-switch' : null,
    props.stacked ? 'form-check-inline' : null,
    props.switch ? 'form-switch' : null
  ]
})

const formCheckInputClass = computed(() => {
  return [
    props.button ? 'btn-check' : 'form-check-input',
  ]
})

const formCheckLabelClass = computed(() => {
  return [
    props.button ? `btn btn-${props.buttonVariant}` : 'form-check-label',
  ]
})

function onChange(event) {
  emit('change', event.target.checked);
  emit('update:modelValue', event.target.checked);
}
</script>


<style lang="scss">
.form-check {
  min-height: 20px;

  .form-check-input:checked {
    background-color: var(--bs-accent);
    border-color: var(--bs-accent);
  }

  label {
    margin-top: 2px;
  }


  &.form-switch {
    min-height: 22px;

    .form-check-input {
      height: 22px;

      &:checked {
        background-color: var(--bs-accent);
      }
    }
  }
}
</style>
