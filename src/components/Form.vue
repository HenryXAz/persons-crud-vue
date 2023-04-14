<script setup>
import { Form } from 'vee-validate'

const props = defineProps({
  schema: {
    type: Object,
  },
  onSubmit: {
    type: Function
  }
})
</script>


<template>
  <Form
    @submit="onSubmit"
    :validation-schema="schema"
  >
    <slot name="content">
    </slot>

    <slot name="actions">
    </slot>
  </Form>
</template>
