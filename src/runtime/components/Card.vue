<template>
  <div class="card">
    <div class="card-header" v-if="$slots.header">
      <slot name="header"/>
    </div>
    <div class="card-body">
      <slot/>
    </div>
    <div class="card-footer" v-if="$slots.footer">
      <slot name="header"/>
    </div>
  </div>
</template>
