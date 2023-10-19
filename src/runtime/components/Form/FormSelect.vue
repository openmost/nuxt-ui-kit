<template>
  <select :class="inputClass"
          :value="modelValue"

          :aria-invalid="ariaInvalid"
          :id="id"
          :name="name"
          :form="form"
          :size="computedSelectSize"
          :disabled="disabled"
          :multiple="multiple"
          :required="required"
          :autofocus="autofocus"

          @change="onChange"
          @input="onInput"
  >

    <slot name="first"/>

    <template v-for="option in options" :key="option[valueField]">
      <FormSelectOptionGroup
        v-if="option.options"
        :disabled-fields="disabledField"
        :label="option[labelField]"
        :options="option[optionField]"
        :text-field="textField"
        :value-field="valueField"
      ></FormSelectOptionGroup>

      <FormSelectOption
        v-else
        :value="option[valueField]"
        :selected="(modelValue === option[valueField])"
        :disabled="option[disabledField]"
        :key="option[valueField]"
      >{{ option[textField] }}
      </FormSelectOption>

    </template>

    <slot/>

  </select>
</template>

<script setup>
import {computed} from "vue";

const emit = defineEmits(['change', 'update:modelValue'])
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
  disabledField: {
    type: String,
    default: 'disabled',
  },
  form: {
    type: String,
  },
  id: {
    type: String,
  },
  labelField: {
    type: String,
    default: 'label',
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  name: {
    type: String,
  },
  options: {
    type: [Array, Object],
    default: [],
  },
  optionField: {
    type: String,
    default: 'options',
  },
  plain: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  selectSize: {
    type: Number,
    default: null,
  },
  size: {
    type: String,
  },
  state: {
    type: Boolean,
    default: null,
  },
  textField: {
    type: String,
    default: 'text',
  },
  valueField: {
    type: String,
    default: 'value',
  },
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  },
})

const computedSelectSize = computed(() => props.plain && props.selectSize === 0 ? null : props.selectSize);
const inputClass = computed(() => {
  return [
    props.plain ? 'form-control' : 'form-select',
    props.size && props.plain ? `form-control-${props.size}` : null,
    props.size && !props.plain ? `form-select-${props.size}` : null,
  ]
})

function onChange(event) {
  const {target} = event;
  const selectedValue = Array.from(target.options)
    .filter(o => o.selected)
    .map(o => ('_value' in o ? o._value : o.value))

  emit('change', target.multiple ? selectedValue : selectedValue[0]);
}

function onInput(event) {
  const {target} = event;
  const selectedValue = Array.from(target.options)
    .filter(o => o.selected)
    .map(o => ('_value' in o ? o._value : o.value))

  emit('update:modelValue', target.multiple ? selectedValue : selectedValue[0]);
}
</script>
