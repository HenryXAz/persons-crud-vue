<script setup>
  import { toRefs } from 'vue'
  const props = ({
    type: {
      type: String,
    },
    class: {
      type: String,
    },
    click: {
      type: Function,
    }
  })
  

</script>

<template >
  <button
    :class="`${props.class} p-2`"
    :type="props.type"
    @click="click"
  >
    <slot name="content">

    </slot>
  </button>
</template>