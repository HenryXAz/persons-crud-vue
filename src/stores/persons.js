import { defineStore } from 'pinia'
import { reactive} from 'vue'

export const usePersonsStore = defineStore('persons', {
  state: () => ({
    persons: reactive([])
  }),
  actions: {
    async getPersons() {
      const response = await fetch(`${import.meta.env.VITE_API_URL}api/persons`)
      this.persons =  [...await response.json()]
    },
    async getPersonById(id) {
      const response = await fetch(`${import.meta.env.VITE_API_URL}api/persons/${id}`)
      return await response.json(0)
    },  
    async createPerson(person) {
      const response = await fetch(`${import.meta.env.VITE_API_URL}api/persons`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(person),
      })
      const newPerson = await response.json()
      this.persons.unshift(newPerson)
    },
    async updatePerson(person, id) {
      const response = await fetch(`${import.meta.env.VITE_API_URL}api/persons/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(person),
      })

      const indexPerson = this.persons.findIndex(person => person.id === id)

      this.persons[indexPerson] = {
        id,
        name: person.name,
        profession: person.profession,
      }
    },
    async removePerson(id) {
      await fetch(`${import.meta.env.VITE_API_URL}api/persons/${id}`, {
        method: 'DELETE',
      })
      const indexPerson = this.persons.findIndex(person => person.id === id)
      this.persons.splice(indexPerson, 1)
    }
  }
})