<template>
  <div>
    <ul
      :id="id"
      role="tablist"
      :class="tabsClass">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="contact-tab"
          data-bs-toggle="tab"
          data-bs-target="#contact-tab-pane"
          type="button"
          role="tab"
          aria-controls="contact-tab-pane"
          aria-selected="false">
          Contact
        </button>
      </li>
    </ul>
    <div class="tab-content">
      <slot/>
    </div>
  </div>
</template>

<script setup>
import {computed} from "@vue/runtime-core";

const props = defineProps({
  id: {
    type: String,
    default: 'myTab'
  }
})

const tabsClass = computed(() => {
  return [
    'nav',
    'nav-tabs'
  ]
})
</script>
