import { defineStore } from 'pinia'

export const usePersonsStore = defineStore('persons', {
  state: () => {
    return {
      persons: [],
    }
  },
  actions: {
    async pushData(data) {
      this.persons.unshift(...data)
    },
    async editPerson(person) {
      this.person = person
    },
    updatePerson(personUpdate) {
      const personFound = this.persons.find(person => person.id === personUpdate.id)

      if(personFound) {
        personFound.name = personUpdate.name
        personFound.profession = personUpdate.profession
      }
    } 
    ,
    deletePerson(id) {
      const person = this.persons.find(person => person.id === id)

      if(person) {
        this.persons.splice(this.persons.indexOf(person), 1)
      }
    },
  },
})