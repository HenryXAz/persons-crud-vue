<script setup>
import {  ref } from 'vue'
import Form from '../Form.vue'
import Input from '../Input.vue'
import Button from '../Button.vue'
import * as Yup from 'yup'
import { usePersonsStore } from '../../stores/persons'

const personsStore = usePersonsStore()

const schema = Yup.object().shape({
  name: Yup.string()
    .required('el nombre es obligatorio*')
    .min(2, 'el nombre debe de contener mínimo 2 caracteres*'),
  profession: Yup.string()
    .required('la profesión es requerida*')
})

const onSubmit = async (values, { resetForm }) => {
  const person = JSON.stringify({
    name: values.name,
    profession: values.profession,
  })

  const save = await fetch(`${import.meta.env.VITE_API_URL}api/persons`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: person,
  })

  const personCreated = await save.json()
  personsStore.pushData([personCreated])

  resetForm()
  show.value = false
}

const toggleShowForm = () => {
  show.value = !show.value
}

const show = ref(false)

</script>

<template>

  <div class="max-w-lg mx-auto mb-4">
    <Button
    type="button"
    class="w-10 bg-emerald-600 text-gray-100 rounded-md"
    @click="toggleShowForm"
  >
    <template #content>
      +
    </template>
  </Button>
  </div>

  <div v-show="show">
    <Form 
    :schema="schema" 
    :onSubmit="onSubmit" 
    class="max-w-lg bg-white dark:bg-darkmode-1 rounded-xl flex flex-col gap-5 shadow-xl mx-auto p-4">
    <template #content>
      <div class="flex flex-col">
        <Input type="text" name="name" placeholder="nombre..." />
      </div>
      <div class="flex flex-col">
        <Input type="text" name="profession" placeholder="profesion" />
      </div>
    </template>


    <template #actions>
      <Button 
        class="bg-indigo-500 dark:bg-indigo-600 text-gray-100"
        type="submit">
        <template #content>
          crear
        </template>
      </Button>
    </template>
  </Form>
  </div>
</template>