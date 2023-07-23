<script setup>
import { defineAsyncComponent, onMounted } from "vue";
import ToggleTheme from "./components/ToggleTheme.vue";
import TheIndex from "./components/crud/TheIndex.vue";
onMounted(() => {
  if (
    localStorage.theme === "dark" ||
    (!localStorage.theme &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
});
</script>

<template>
  <div
    class="w-full h-full absolute inset-0 overflow-y-auto bg-gray-100 dark:bg-darkmode-0 dark:text-gray-200"
  >
    <toggle-theme />

    <the-index />
  </div>
</template>
<style scoped></style>
