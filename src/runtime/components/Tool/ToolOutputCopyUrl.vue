<template>
  <ToolOutputCard title="Copy this URL">

    <template #actions>
      <Button variant="outline-primary" v-if="url">

        <template #icon>
          <IconCopy/>
        </template>

        <span>Copy link</span>

      </Button>
    </template>

    <FormTextarea rows="5" :value="url" v-if="url"/>

  </ToolOutputCard>
</template>

<script setup lang="ts">
const props = defineProps({
  url: {
    type: String
  }
})
</script>
