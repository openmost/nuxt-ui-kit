<template>
  <ToolOutputCard class="tool-output-card" title="Copy this URL">
    <template #actions>
      <Button
        v-if="url"
        variant="outline-primary"
        @click="copyToClipboard">
        <template #icon>
          <IconCopy/>
        </template>
        <span>Copy link</span>
      </Button>
    </template>
    <FormTextarea
      v-if="url"
      :rows="textareaRows"
      :value="url"
    />
    <Alert v-else variant="danger">URL is missing</Alert>
  </ToolOutputCard>
</template>

<script setup lang="ts">

const props = defineProps({
  url: {
    type: [String, URL],
    default: ''
  },
  textareaRows: {
    type: Number,
    default: 5
  }
})

function copyToClipboard() {
  navigator.clipboard.writeText(props.url);
}
</script>

<style lang="scss">
.tool-output-card {

  textarea {
    background-color: var(--bs-surface);
    border-width: 0;
  }

}
</style>
