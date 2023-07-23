<template>
  <form
    @submit.prevent="
      () => {
        emits('handle-submit');
      }
    "
  >
    <div class="flex flex-col gap-2 p-2">
      <label for="name">Nombre:</label>
      <the-input name="name" placeholder="ingrese nombre..." />
    </div>
    <div class="flex flex-col gap-2 p-2">
      <label for="profession">Profesión:</label>
      <the-input name="profession" placeholder="ingrese profesión..." />
    </div>

    <div class="flex flex-col p-2 gap-4 sm:flex-row justify-center my-5">
      <Button type="submit" class="bg-indigo-500 text-gray-200 rounded-md p-2"
        >agregar</Button
      >
      <Button
        type="button"
        class="bg-transparent p-2 border border-gray-600 hover:bg-gray-200 dark:hover:bg-darkmode-0 rounded-md"
        @click="
          () => {
            emits('close-modal');
          }
        "
      >
        cancelar
      </Button>
    </div>
  </form>
</template>

<script setup>
import TheInput from "../TheInput.vue";
import Button from "../Button.vue";

const emits = defineEmits(["close-modal", "handle-submit"]);
</script>