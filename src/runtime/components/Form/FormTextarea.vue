<template>
  <textarea
      :value="modelValue"
      :class="textareaClass"
      :aria-invalid="ariaInvalid"
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      :disabled="disabled"
      :form="form"
      :href="href"
      :id="id"
      :max-rows="maxRows"
      :name="name"
      :placeholder="placeholder"
      :readonly="readonly"
      :required="required"
      :rows="rows"
      :wrap="wrap"

      @input="onInput"
      @change="onChange"
  ></textarea>
</template>

<script setup>
import {computed} from "vue";

const emit = defineEmits(['change', 'input', 'update', 'update:modelValue']);
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
  href: {
    type: String,
  },
  form: {
    type: String,
  },
  id: {
    type: String,
  },
  maxRows: {
    type: [Number, String],
  },
  name: {
    type: String,
  },
  placeholder: {
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
  rows: {
    type: [Number, String],
  },
  size: {
    type: String,
  },
  state: {
    type: Boolean,
    default: null,
  },
  wrap: {
    type: String,
    default: 'soft',
  },
  modelValue: {
    type: [Number, String],
    default: '',
  },
});

const textareaClass = computed(() => {
  return [
    'form-control',
    props.size ? `form-control-${props.size}` : null,
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
