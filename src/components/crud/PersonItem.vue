<script setup>
import { ref } from 'vue'
import Button from '../Button.vue'
import Form from '../Form.vue'
import Input from '../Input.vue'
import { usePersonsStore } from '../../stores/persons';
import * as Yup from 'yup'

const props = defineProps({
  person: {
    type: Object,
  }
})

const personsStore = usePersonsStore()

const schema = Yup.object().shape({
  name: Yup.string()
    .required('el nombre es obligatorio*')
    .min(2, 'el nombre debe de contener mínimo 2 caracteres*'),
  profession: Yup.string()
    .required('la profesión es requerida*')
})

const onSubmit = async (values) => {
  const person = JSON.stringify(values)
  const update = await fetch(`${import.meta.env.VITE_API_URL}api/persons/${values.id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: person,
  })

  if(update.status === 200) {
    const personData = JSON.parse(person)
    personsStore.updatePerson(personData)
  }
  
  edit.value = !edit.value
}

const edit = ref(false)

const editPerson = (id) => {
  edit.value = !edit.value
}

const deletePerson = async (id) => {
  const deleted = await fetch(`${import.meta.env.VITE_API_URL}api/persons/${id}`, {
    method: 'DELETE',
  })

  if(deleted.status === 200) {
    personsStore.deletePerson(id)
  }
}

</script>

<template>
  <template v-if="!edit">
    <td class="p-2" >
    {{ person.name }}
  </td>

  <td class="p-2" >
    {{ person.profession }}
  </td>
  <td class="p-2">
    <div class="w-full flex gap-2">
      <Button type="button" class="rounded-md bg-gray-500 text-gray-100" @click="() => { editPerson(person.id) }">
        <template #content>
          editar
        </template>
      </Button>
      <Button type="button" class=" rounded-md bg-red-500 text-gray-100" @click="() => { deletePerson(person.id) }">
        <template #content>
          eliminar
        </template>
      </Button>
    </div>
  </td>
  </template>
  <td scope="3" v-if="edit" class="p-2 flex">
    <Form
      :schema="schema"
      :onSubmit="onSubmit"
      class="flex gap-2 "
    >
    <template #content>
      <Input name="id" type="hidden" :value="person.id"/> 
      <div class="flex flex-col">
        <Input type="text" name="name" placeholder="nombre..." :value="person.name"/>
      </div>
      <div class="flex flex-col">
        <Input type="text" name="profession" placeholder="profesion" :value="person.profession" />
      </div>
    </template>

    <template #actions>
      <Button 
        class="bg-indigo-500 text-gray-100 rounded-md h-10"
        type="submit">
        <template #content>
          actualizar
        </template>
      </Button>
      <Button 
        class="bg-red-500 text-gray-100 rounded-md h-10"
        type="button"
        @click="() => {edit = !edit}"
        >
        <template #content>
          cancelar
        </template>
      </Button>
    </template>
    </Form>
  </td>

</template>