<template>
  <div :class="alertClass" role="alert" v-if="show">

    <template v-if="variant === 'success'">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="alert-icon">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M16.7399 8.32733C17.1115 8.73599 17.0813 9.36844 16.6727 9.73995L11.1727 14.7399C10.7913 15.0867 10.2088 15.0867 9.82733 14.7399L7.32733 12.4672C6.91868 12.0957 6.88856 11.4633 7.26007 11.0546C7.63157 10.6459 8.26402 10.6158 8.67268 10.9873L10.5 12.6485L15.3273 8.26007C15.736 7.88856 16.3684 7.91868 16.7399 8.32733Z"
              fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z"
              fill="currentColor"/>
      </svg>
    </template>

    <template v-if="variant === 'info'">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="alert-icon">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M12 7C12.5523 7 13 7.44772 13 8V12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12V8C11 7.44772 11.4477 7 12 7Z"
              fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M11 16C11 15.4477 11.4477 15 12 15H12.01C12.5623 15 13.01 15.4477 13.01 16C13.01 16.5523 12.5623 17 12.01 17H12C11.4477 17 11 16.5523 11 16Z"
              fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12Z"
              fill="currentColor"/>
      </svg>
    </template>

    <template v-if="variant === 'warning'">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="alert-icon">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M7.15289 1.29289C7.34043 1.10536 7.59478 1 7.86 1H16.14C16.4052 1 16.6596 1.10536 16.8471 1.29289L22.7071 7.15289C22.8946 7.34043 23 7.59478 23 7.86V16.14C23 16.4052 22.8946 16.6596 22.7071 16.8471L16.8471 22.7071C16.6596 22.8946 16.4052 23 16.14 23H7.86C7.59478 23 7.34043 22.8946 7.15289 22.7071L1.29289 16.8471C1.10536 16.6596 1 16.4052 1 16.14V7.86C1 7.59478 1.10536 7.34043 1.29289 7.15289L7.15289 1.29289ZM8.27421 3L3 8.27421V15.7258L8.27421 21H15.7258L21 15.7258V8.27421L15.7258 3H8.27421Z"
              fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M12 7C12.5523 7 13 7.44772 13 8V12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12V8C11 7.44772 11.4477 7 12 7Z"
              fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M11 16C11 15.4477 11.4477 15 12 15H12.01C12.5623 15 13.01 15.4477 13.01 16C13.01 16.5523 12.5623 17 12.01 17H12C11.4477 17 11 16.5523 11 16Z"
              fill="currentColor"/>
      </svg>
    </template>

    <template v-if="variant === 'danger'">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="alert-icon">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M10.5282 2.28312C10.9775 2.03017 11.4844 1.89728 12 1.89728C12.5156 1.89728 13.0225 2.03017 13.4718 2.28312C13.9211 2.53607 14.2976 2.90055 14.565 3.34139L14.5679 3.34614L23.0379 17.4862L23.046 17.5C23.308 17.9536 23.4466 18.4679 23.448 18.9917C23.4495 19.5156 23.3138 20.0307 23.0544 20.4858C22.795 20.9408 22.4209 21.3201 21.9694 21.5857C21.518 21.8514 21.0048 21.9942 20.481 22L20.47 22.0001L3.51903 22C2.99522 21.9943 2.48206 21.8514 2.03059 21.5857C1.57912 21.3201 1.20507 20.9408 0.94567 20.4858C0.686267 20.0307 0.550547 19.5156 0.552014 18.9917C0.55348 18.4679 0.692083 17.9536 0.95403 17.5L0.962153 17.4862L9.43501 3.34139C9.70241 2.90055 10.0789 2.53607 10.5282 2.28312ZM12 3.89728C11.8282 3.89728 11.6592 3.94157 11.5094 4.02589C11.3603 4.10983 11.2353 4.23061 11.1462 4.37666L2.68271 18.5058C2.59753 18.6556 2.55249 18.8249 2.55201 18.9973C2.55152 19.172 2.59676 19.3436 2.68322 19.4953C2.76969 19.647 2.89438 19.7735 3.04487 19.862C3.19404 19.9498 3.36342 19.9973 3.53642 20H20.4636C20.6366 19.9973 20.806 19.9498 20.9552 19.862C21.1057 19.7735 21.2303 19.647 21.3168 19.4953C21.4033 19.3436 21.4485 19.172 21.448 18.9973C21.4476 18.825 21.4025 18.6557 21.3174 18.5059L12.855 4.37865C12.8546 4.37799 12.8542 4.37732 12.8538 4.37666C12.7648 4.23061 12.6397 4.10983 12.4906 4.02589C12.3409 3.94157 12.1719 3.89728 12 3.89728Z"
              fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M12 8C12.5523 8 13 8.44772 13 9V13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13V9C11 8.44772 11.4477 8 12 8Z"
              fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M11 17C11 16.4477 11.4477 16 12 16H12.01C12.5623 16 13.01 16.4477 13.01 17C13.01 17.5523 12.5623 18 12.01 18H12C11.4477 18 11 17.5523 11 17Z"
              fill="currentColor"/>
      </svg>
    </template>

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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M9.17154 10.5858L5.34497 6.75918L6.75918 5.34497L10.5858 9.17154C12.1479 10.7336 12.1479 13.2663 10.5858 14.8284L6.75918 18.655L5.34497 17.2408L9.17154 13.4142C9.95259 12.6331 9.95259 11.3668 9.17154 10.5858Z"
          fill="#AEAFBB"/>
        <path
          d="M18.655 6.75918L14.8284 10.5858C14.0474 11.3668 14.0474 12.6331 14.8284 13.4142L18.655 17.2408L17.2408 18.655L13.4142 14.8284C11.8521 13.2663 11.8521 10.7336 13.4142 9.17154L17.2408 5.34497L18.655 6.75918Z"
          fill="#AEAFBB"/>
      </svg>
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

  .alert-icon {
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
