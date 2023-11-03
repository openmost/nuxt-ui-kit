<template>
  <ToolOutputCard class="tool-output-card" title="Copy this URL">
    <template #actions>
      <Button
        v-if="url"
        variant="outline-primary"
      >
        <template #icon>
          <IconCopy/>
        </template>
        <span>Copy link</span>
      </Button>
    </template>
    <FormTextarea
      v-if="url"
      rows="5"
      :value="url"
    />
  </ToolOutputCard>
</template>

<script setup lang="ts">
defineProps({
  url: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss">
.tool-output-card {

  textarea {
    background-color: var(--bs-surface);
    border-width: 0;
  }

}
</style>
