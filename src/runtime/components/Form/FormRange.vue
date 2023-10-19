<template>
  <input
      v-model="value"
      :class="inputClass"
      :aria-invalid="ariaInvalid"
      :autofocus="autofocus"
      :disabled="disabled"
      :form="form"
      :id="id"
      :max="max"
      :min="min"
      :name="name"
      :readonly="readonly"
      :required="required"
      :step="step"
      type="range"

      @input="onInput"
      @change="onChange"
  >
</template>

<script setup>
import {computed} from "vue";

const emit = defineEmits(['change', 'input', 'update', 'update:modelValue']);
const props = defineProps({
  ariaInvalid: {
    type: [Boolean, String],
    default: false,
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
  max: {
    type: [Number, String],
  },
  min: {
    type: [Number, String],
  },
  name: {
    type: String,
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
  modelValue: {
    type: [Number, String],
    default: '',
  },
});

const value = computed(() => props.modelValue)

const inputClass = computed(() => {
  return [
    'form-range',
    props.size ? `form-range-${props.size}` : null,
    props.state === true ? `is-valid` : null,
    props.state === false ? `is-invalid` : null,
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
