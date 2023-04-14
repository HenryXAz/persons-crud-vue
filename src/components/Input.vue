<script setup>
import { Field, ErrorMessage } from 'vee-validate'

const props = defineProps({
  type: {
    type: String,
  },
  name: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  value: {
    type: String,
  },
  model: {
    type: String,
  }
})

</script>

<template>
  <Field 
    class="p-2 border border-gray-400 bg-transparent dark:border-darkmode-3"
    :name="name"
    :type="type"
    :placeholder="placeholder"
    :value="value"
  />
  <ErrorMessage :name="name" class="text-red-500" />
  {{ model }}
</template>