<template>
  <div class="w-3/4 mx-auto">
    <h1 class="text-xl pt-5 text-center">CRUD de Personas</h1>

    <Button
      @click="openModal"
      id="add-person-button"
      class="w-10 bg-emerald-600 text-gray-100 rounded-md"
      >+</Button
    >

    <the-modal
      :triggers="['add-person-button']"
      :show="show"
      @close-modal="closeModal"
    >
      <the-person-form @handle-submit="addPerson" @close-modal="closeModal" />
    </the-modal>

    <Suspense>
      <the-person-table
        @edit-person="editPerson"
        @delete-person="deletePerson"
      />
      <template #fallback>
        <table-skeleton />
      </template>
    </Suspense>
  </div>
</template>
<script setup>
import { defineAsyncComponent, ref } from "vue";
import { useForm } from "vee-validate";
import { schema } from "./schema";
import { usePersonsStore } from "../../stores/persons";
import Button from "../Button.vue";
import ThePersonForm from "./ThePersonForm.vue";
const TheModal = defineAsyncComponent(() => import("../modal/TheModal.vue"));
const ThePersonTable = defineAsyncComponent(() =>
  import("./ThePersonTable.vue")
);
const TableSkeleton = defineAsyncComponent(() =>
  import("../../components/skeleton/TableSkeleton.vue")
);
const { handleSubmit, resetForm, setValues } = useForm({
  validationSchema: schema,
});
const store = usePersonsStore();
const { createPerson, getPersonById, updatePerson, removePerson } = store;
const show = ref(false);
const edit = ref(false);
const editId = ref("");

const addPerson = handleSubmit(async (values) => {
  if (!edit.value) {
    await createPerson(values);
    closeModal();
    return;
  }

  await updatePerson(values, editId.value);
  editId.value = 0;
  edit.value = false;
  closeModal();
  2;
});

const editPerson = async (id) => {
  const person = await getPersonById(id);
  setValues({
    name: person.name,
    profession: person.profession,
  });

  edit.value = true;
  editId.value = person.id;
  openModal();
};

const deletePerson = async (id) => {
  const confirmation = confirm(
    "¿esta seguro que desea eliminar este registro?"
  );

  if (!confirmation) {
    return;
  }
  await removePerson(id);
};

const closeModal = () => {
  show.value = false;
  resetForm();
};

const openModal = () => {
  show.value = true;
};
</script>