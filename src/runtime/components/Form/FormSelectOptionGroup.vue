<template>
  <optgroup :label="label">
    <slot name="first"/>
    <FormSelectOption
        v-for="option in options"
        :key="option[valueField]"

        :value="option[valueField]"

        :disabled="option[disabledFields]"
    >{{ option[props.textField] }}
    </FormSelectOption>
    <slot/>
  </optgroup>
</template>

<script setup>
const props = defineProps({
  disabledFields: {
    type: String,
    default: 'disabled',
  },
  label: {
    type: String,
  },
  options: {
    type: [Array, Object],
    default: [],
  },
  textField: {
    type: String,
    default: 'text',
  },
  valueField: {
    type: String,
    default: 'value',
  }
})
</script>
