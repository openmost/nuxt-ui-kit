<template>
  <div :class="alertClass" role="alert" v-if="show">

    <div class="alert-icon">
      <template v-if="variant === 'success'">
        <IconSuccess/>
      </template>

      <template v-if="variant === 'info'">
        <IconInfo/>
      </template>

      <template v-if="variant === 'warning'">
        <IconWarning/>
      </template>

      <template v-if="variant === 'danger'">
        <IconDanger/>
      </template>
    </div>

    <div class="alert-body">

      <span class="alert-title" v-if="$slots.title || title">
        <slot name="title">
          {{ title }}
        </slot>
      </span>

      <slot>Alert message</slot>

      <ActionsWrapper v-if="$slots.actions">
        <slot name="actions"/>
      </ActionsWrapper>

    </div>

    <button
      v-if="dismissible"
      class="alert-close"
      type="button"
      aria-label="Close"
      @click="onClose"
    >
      <IconClose/>
    </button>

  </div>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  dismissible: {
    type: Boolean,
    default: false,
  },
  show: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
  },
  variant: {
    type: String,
    default: 'info'
  },
})

const alertClass = computed(() => {
  return [
    'alert',
    props.variant ? `alert-${props.variant}` : null,
    props.show ? 'show' : null,
  ]
})

function onClose() {
  return props.show = !props.show;
}
</script>

<style lang="scss">
.alert {
  line-height: normal;
  background: linear-gradient(90deg, var(--bs-alert-bg) 0%, transparent 50%);
  display: flex;
  gap: 2rem;
  font-size: 1.125rem;
  margin-bottom: 2rem;

  .alert-icon svg {
    width: 1.5rem;
    height: 1.5rem;
    min-width: 1.5rem;
    min-height: 1.5rem;
    color: var(--bs-alert-border-color);
  }

  .alert-body {
    flex-grow: 1;

    & > *:last-child {
      margin-bottom: 0;
    }

    .alert-title {
      display: block;
      margin-bottom: .5rem;
      font-weight: 500;
      font-size: 1.3125rem;
    }

    .actions-wrapper {
      margin-top: 1.5rem;
    }
  }

  .alert-close {
    background-color: transparent;
    padding: 0;
    border: none;
    width: 29px;
    height: 29px;
  }
}
</style>
