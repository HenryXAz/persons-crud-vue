<script setup>
import Sun from '../assets/sun.svg'
import Moon from '../assets/moon.svg'
import Button from './Button.vue'
import { onMounted, ref } from 'vue';


const localTheme = ref(localStorage.theme )
  const systemTheme = ref(window.matchMedia('(prefers-color-scheme:dark)').matches)


onMounted(() => {

  if(localTheme.value === 'dark' || (!localTheme.value && systemTheme.value)) {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
  }
})


const toggleTheme = () => {
  document.documentElement.classList.toggle('dark')

  if(localStorage.theme === 'dark') {
    localStorage.theme = 'light'
    localTheme.value = 'light'
  } else {
    localStorage.theme = 'dark'
    localTheme.value = 'dark'
  }


  // if(localTheme.value === 'dark' || (!localTheme.value && systemTheme.value)) {
  //   document.documentElement.classList.add('dark')
  //   localStorage.theme = 'light'
  // } else {
  //   document.documentElement.classList.remove('dark')
  //   localStorage.theme = 'dark'
  // }
}

</script>

<template> 
<div
  class="w-full mx-auto mt-10"
>
  <div class="max-w-lg mx-auto ">
    <Button
      @click="toggleTheme"
    >
  <template #content>
    <img v-if="localTheme === 'light'" :src="Moon" alt="cambiar a tema oscuro">
    <img v-if="localTheme === 'dark'" :src="Sun" alt="cambiar a tema claro">
  </template>
</Button>
  </div>
</div>

</template>