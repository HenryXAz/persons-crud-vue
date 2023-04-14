<script setup>
import PersonsForm from './components/crud/PersonsForm.vue'
import TablePersons from './components/crud/TablePersons.vue'
import ToggleTheme from './components/ToggleTheme.vue'

</script>

<template>
  <div class="w-full h-full absolute inset-0 overflow-y-auto bg-gray-100 dark:bg-darkmode-0 dark:text-gray-200">
    <ToggleTheme />

    <h1 class="text-xl pt-5 text-center">CRUD de Personas</h1>

    <PersonsForm />

    <div class="w-full overflow-x-auto">
      <TablePersons />
    </div>
  </div>
</template>

<style scoped></style>
