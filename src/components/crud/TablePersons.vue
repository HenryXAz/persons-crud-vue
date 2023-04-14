<script setup>
import { onMounted, ref } from 'vue';
import { usePersonsStore } from '../../stores/persons'
import { storeToRefs } from 'pinia';
import PersonItem from './PersonItem.vue'

const personsStore = usePersonsStore()
const { persons } = storeToRefs(personsStore)


onMounted(async () => {
  const data = await fetch(`${import.meta.env.VITE_API_URL}api/persons`)
  const persons = await data.json()
  personsStore.pushData(persons)
})


</script>

<template>
  <table class="max-w-7xl mx-auto my-8">
    <thead>
      <tr class="bg-zinc-900 text-gray-200">
        <th class="p-2 font-light text-left">
          Nombre
        </th>
        <th class="p-2 font-light text-left">
          Profesión
        </th>
        <th class="p-2 font-light text-left">
          Acciones
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
      class="even:bg-indigo-200 dark:even:bg-darkmode-1"
      v-for="person in persons" :key="person.id"
      >
        <PersonItem 
          :person="person"
          :key="person.id"
        />
      </tr>
    </tbody>
  </table>
</template>