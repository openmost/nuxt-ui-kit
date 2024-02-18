<template>
  <NuxtLink
    :class="navLinkClass"
    :disabled="disabled"
    :to="to"
    :href="href"
    :external="external"
    :rel="rel"
    :target="target"
    active-class="active"
    exact-active-class="active-exact"
    :active="false"
  >

    <slot name="icon"/>

    <span><slot/></span>

    <IconArrowTopRight v-if="external"/>

  </NuxtLink>
</template>

<script setup>
import {computed} from "vue";

const props = defineProps({
  active: {
    type: Boolean
  },
  activeClass: {
    type: String,
    default: 'active'
  },
  exactActive: {
    type: Boolean
  },
  exactActiveClass: {
    type: String,
    default: 'active-exact'
  },
  disabled: {
    type: Boolean,
  },
  href: {
    type: [String, Object],
  },
  to: {
    type: [String, Object],
  },
  external: {
    type: Boolean,
    default: false,
  },
  neverActive: {
    type: Boolean,
  }
})

const navLinkClass = computed(() => {
  return [
    'nav-link',
    !props.neverActive && props.active ? props.activeClass : null,
    !props.neverActive && props.exactActive ? props.exactActiveClass : null,
    props.neverActive ? 'never-active' : null,
    props.external ? 'external-link' : null
  ];
})

const rel = computed(() => {
  return props.external ? 'noopener noreferrer' : null;
})

const target = computed(() => {
  return props.external ? '_blank' : null;
})
</script>

<style lang="scss">
.nav-link {
  display: flex;
  gap: .75rem;
  align-content: center;
  align-items: center;

  span {
    flex-grow: 1;
  }

  svg {
    transition: .2s ease all;
    width: 1.5rem;
    min-width: 1.5rem;
    height: 1.5rem;

    &.icon-arrow-top-right {
      width: 1.125rem;
      min-width: 1.125rem;
      height: 1.125rem;
    }
  }

  &.active:not(.never-active) svg {
    &:not(.icon-arrow-top-right) {
      color: var(--bs-accent);
    }
  }
}

.nav.nav-pills {
  .nav-link:hover {
    background-color: rgba(255, 255, 255, .03);
  }
}

.nav-pills .nav-link {
  color: var(--bs-body-color);
  font-weight: 400;
  padding: 0.75rem 1rem;
}


.nav-anchor .nav-link {
  transition: .2s ease all;

  &:hover:not(.active) {
    position: relative;
    padding-left: 0.75rem;
  }

  &.active-exact:not(.never-active) {
    position: relative;
    padding-left: .75rem;

    &:before {
      content: '';
      display: block;
      width: .25rem;
      height: .25rem;
      background-color: var(--bs-primary);
      border-radius: 50%;
      position: absolute;
      left: 0;
      top: calc(50% - .125rem);
    }
  }
}
</style>

