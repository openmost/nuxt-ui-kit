<template>
  <div :class="formCheckClass">
    <input
        v-model="selected"
        :class="formCheckInputClass"
        :aria-label="ariaLabel"
        :aria-labelledby="ariaLabelledby"
        :autofocus="autofocus"
        :disabled="disabled"
        :form="form"
        :id="id"
        :name="name"
        :required="required"
        type="radio"
        :value="value"
        @input="onInput"
        @change="onChange"
    >
    <label :class="formCheckLabelClass" :for="id">
      <slot/>
    </label>
  </div>
</template>

<script setup>
import {computed} from "vue";

const emit = defineEmits(['change', 'input', 'update', 'update:modelValue']);
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
    type: Boolean,
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
    default: 'radio'
  },
  name: {
    type: String,
    default: 'radio',
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
  value: {
    type: [String, Number, Array, Object]
  },
  variant: {
    type: String,
  },
  modelValue: {
    type: [Number, String, Array, Object],
    default: null,
  },
})

const selected = computed(() => props.modelValue)

const formCheckClass = computed(() => {
  return [
    !props.button ? 'form-check' : null,
    !props.button && props.variant ? 'form-switch' : null,
    props.stacked ? null : 'form-check-inline',
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


function onInput(event) {
  let value = event.target.value;
  emit('input', value);
  emit('update:modelValue', value);
}

function onChange(event) {
  let value = event.target.value;
  emit('change', value);
}
</script>
