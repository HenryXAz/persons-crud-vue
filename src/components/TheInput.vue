<template>
  <input
    :type="props.type"
    :name="props.name"
    :placeholder="props.placeholder"
    v-model="value"
    class="p-2 outline-none dark:focus:border-indigo-200/75 focus:border-indigo-400 border-2 border-gray-400 bg-transparent dark:border-darkmode-3"
  >  
  <p class="text-red-500">
    {{  errorMessage }}
  </p>
</template>

<script setup>
import { useField } from 'vee-validate'

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  name: {
    type: String
  },
  placeholder: {
    type: String,
  },
  value: {
    type: String,
  },
  model: {
    type: String,
    default: 'default'
  }
})


const { value, errorMessage } = useField(props.name)
</script>