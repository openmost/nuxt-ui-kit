<template>
  <fieldset :disabled="disabled" :aria-invalid="ariaInvalid" :id="id" :name="name">
    <FormCheckbox
        v-for="option in options"
        :key="option[valueField]"
        v-model="value"
        :autofocus="autofocus"
        :button="button"
        :button-variant="buttonVariant"
        :disabled="option[disabledField]"
        :form="form"
        :id="option.id"
        :name="`${name}[]`"
        :required="required"
        :size="size"
        :stacked="stacked"
        :state="state"
        :value="option[valueField]"
        @input="onInput"
        @change="onChange"
    >{{ option[textField] }}
    </FormCheckbox>
  </fieldset>
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
  button: {
    type: Boolean,
    default: false,
  },
  buttonVariant: {
    type: String,
    default: 'outline-secondary',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  disabledField: {
    type: String,
    default: 'disabled',
  },
  form: {
    type: String,
  },
  id: {
    type: String,
    default: 'checkbox-group',
  },
  name: {
    type: String,
    default: 'checkbox-group',
  },
  options: {
    type: [Array, Object],
    default: [],
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
  textField: {
    type: String,
    default: 'text',
  },
  validated: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
  },
  valueField: {
    type: String,
    default: 'value',
  },
  modelValue: {
    type: Array,
    default: [],
  }
})

const value = computed(() => props.modelValue)

function onInput(value) {
  emit('input', value);
  emit('update:modelValue', value);
}

function onChange(value) {
  emit('change', value);
}
</script>
