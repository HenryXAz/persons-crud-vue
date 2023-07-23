<template>
  <div
    class="w-full h-auto mx-auto px-2 py-4 rounded-lg bg-transparent"
    v-if="props.show"
  >
    <div
      class="fixed overflow-y-scroll z-10 top-0 left-0 h-full w-full bg-gray-900/25 dark:bg-darkmode-0/75"
    >
      <div
        v-outside-click="{
          listener: () => {
            emits('close-modal');
          },
          triggers: props.triggers,
        }"
        class="max-w-xl py-5 mt-5 mb-10 rounded-lg h-auto bg-white dark:bg-darkmode-1 mx-auto"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  triggers: {
    type: Array,
    default: [],
  },
  show: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["close-modal"]);
</script>