<template>
  <component :is="tag" class="section-header">

    <div class="section-title-wrapper">

      <Nav pills v-if="previousUrl">
        <NavItem :to="previousUrl">
          <template #icon>
            <IconAngleLeft/>
          </template>
          {{ previousText }}
        </NavItem>
      </Nav>

      <slot name="prepend"/>

      <component v-if="title" :is="titleTag" :class="titleClass">{{ title }}</component>

      <slot name="append"/>

    </div>

    <ActionsWrapper v-if="$slots.actions">
      <slot name="actions"/>
    </ActionsWrapper>

  </component>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  tag: {
    type: String,
    default: 'header'
  },
  title: {
    type: [String, Boolean],
  },
  titleClass: {
    type: String,
    default: 'h3'
  },
  titleTag: {
    type: String,
    default: 'h2'
  },
  previousText: {
    type: String,
    default: 'Back'
  },
  previousUrl: {
    type: [String, Object, Boolean],
    default: false,
  }
})

const titleClass = computed(() => {
  return [
    'section-title',
    props.titleClass
  ]
})
</script>

<style lang="scss">
.section-header {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  margin-bottom: 2rem;

  .section-title-wrapper {
    display: flex;
    align-items: center;
    align-content: center;
    gap: .75rem;

    .section-title {
      margin-bottom: 0;
    }
  }
}
</style>
