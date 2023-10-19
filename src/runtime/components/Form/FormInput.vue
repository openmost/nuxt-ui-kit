<template>
  <input
    :value="modelValue"
    :class="inputClass"
    :aria-invalid="ariaInvalid"
    :autocomplete="autocomplete"
    :autofocus="autofocus"
    :disabled="disabled"
    :form="form"
    :id="id"
    :list="list"
    :max="max"
    :min="min"
    :name="name"
    :placeholder="placeholder"
    :readonly="readonly"
    :required="required"
    :step="step"
    :type="type"

    @input="onInput"
    @change="onChange"
  >
</template>

<script setup>
import {computed} from "vue";

const emit = defineEmits(['change', 'update:modelValue']);
const props = defineProps({
  ariaInvalid: {
    type: [Boolean, String],
    default: false,
  },
  autocomplete: {
    type: String,
  },
  autofocus: {
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
  id: {
    type: String,
  },
  list: {
    type: String,
  },
  max: {
    type: [Number, String],
  },
  min: {
    type: [Number, String],
  },
  name: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  plaintext: {
    type: Boolean,
    default: false,
  },
  readonly: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
  },
  state: {
    type: Boolean,
    default: null,
  },
  step: {
    type: [Number, String],
  },
  type: {
    type: String,
    default: 'text',
  },
  modelValue: {
    type: [Number, String],
    default: '',
  },
});

const inputClass = computed(() => {
  return [
    props.plaintext === true ? 'form-control-plaintext' : 'form-control',
    props.size ? `form-control-${props.size}` : null,
    props.state === true ? `is-valid` : null,
    props.state === false ? `is-invalid` : null,
  ]
})

function onInput(event) {
  emit('update:modelValue', event.target.value);
}

function onChange(event) {
  emit('change', event.target.value);
}
</script>
