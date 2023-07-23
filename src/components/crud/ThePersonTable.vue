<template>
  <div class="min-w-2xl relative overflow-x-auto">
    <table class="max-w-7xl mx-auto my-8">
      <thead>
        <tr class="bg-zinc-900 text-gray-200">
          <th class="p-2 font-light text-left">Nombre</th>
          <th class="p-2 font-light text-left">Profesión</th>
          <th class="p-2 font-light text-left">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="even:bg-indigo-200 dark:even:bg-darkmode-1"
          v-for="person in persons"
          :key="person.id"
        >
          <td class="p-4">{{ person.name }}</td>
          <td class="p-4">{{ person.profession }}</td>
          <td class="p-4">
            <div class="flex gap-2">
              <Button
                @click="
                  () => {
                    emits('edit-person', person.id);
                  }
                "
                class="bg-indigo-500 text-gray-100 rounded-md p-2"
              >
                editar
              </Button>
              <Button
                @click="
                  () => {
                    emits('delete-person', person.id);
                  }
                "
                class="bg-red-500 text-gray-100 rounded-md p-2"
                type="button"
              >
                eliminar
              </Button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { usePersonsStore } from "../../stores/persons";
import { storeToRefs } from "pinia";
import Button from "../Button.vue";

const store = usePersonsStore();
const { persons } = storeToRefs(store);
const { getPersons } = store;

const emits = defineEmits(["edit-person", "delete-person"]);

await getPersons();
</script>