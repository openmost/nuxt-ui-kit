<template>
  <div>
    <BButton v-if="props.triggerText" @click="show = true" v-text="props.triggerText"></BButton>

    <div :class="['offcanvas', placement, (show ? 'show' : '')]"
         tabindex="-1"
         id="offcanvas"
         aria-labelledby="offcanvasLabel"
         :style="`height: ${props.height}px; width: ${props.width};`"
    >
      <div class="offcanvas-header" v-if="props.title">
        <h5 class="offcanvas-title" id="offcanvasLabel" v-text="props.title"></h5>
        <button type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                @click="show = false"
        ></button>
      </div>
      <div class="offcanvas-body">
        <slot/>
      </div>
    </div>

    <div v-if="show" :class="['offcanvas-backdrop', 'fade', (show ? 'show' :'')]" @click="show = false"></div>
  </div>
</template>

<script setup>
import {computed, ref} from "@vue/runtime-core";

const props = defineProps({
  triggerText: {
    type: String,
    default: null,
  },
  title: {
    type: String,
    default: null,
  },
  placement: {
    type: String,
    default: 'end',
  },
  width: {
    type: String,
    default: null,
  },
  height: {
    type: String,
    default: null,
  },
  show: {
    type: Boolean,
    default: false,
  }
})

const show = ref(props.show);

const placement = computed(() => `offcanvas-${props.placement}`);
</script>
