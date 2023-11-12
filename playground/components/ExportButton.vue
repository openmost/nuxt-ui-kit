<template>
    <a :href="href" :download="`${filename}_${date}.json`" :class="buttonClass">
      <IconExport/>
      <slot>Export</slot>
    </a>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
  },
  filename: {
    type: String,
    default: 'items'
  }
})

const buttonClass = computed(() => {
  return [
    'btn',
    props.items.length ? 'btn-outline-primary' : 'disabled',
  ]
})

const date = new Date().toISOString().slice(0, 10);

const exportables = computed(() => JSON.parse(JSON.stringify(props.items)));
exportables.value.map(item => {
  delete item.selected;
});

let jsonString = computed(() => JSON.stringify(exportables.value));
let jsonUri = computed(() => encodeURIComponent(jsonString.value));
let href = computed(() => `data:application/json;charset=utf-8,` + jsonUri.value);
</script>