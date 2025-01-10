import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IField } from '../types/index.d.ts'

const DEFAULT_FIELD = {
  type: 'text',
  name: 'text',
  label: 'Text',
  placeholder: 'Enter your text',
  required: true,
}

export const useFieldStore = defineStore('fields_store', () => {
  const store = ref<{ activeField: string; fields: IField[] }>({
    activeField: '',
    fields: [],
  })

  function addField() {
    const uuid = `text-field-${Math.random().toString(36).slice(2, 9)}`
    store.value.fields.push({ id: uuid, ...DEFAULT_FIELD })
  }

  function setActiveField(id: string) {
    store.value.activeField = store.value.fields.find((field) => field.id === id)?.id || ''
  }

  function getActiveField() {
    return store.value.fields.find((field) => field.id === store.value.activeField)!
  }

  function removeField(id: string) {
    const isCurrentActiveField = store.value.fields.find((field) => field.id === id)?.id
    if (isCurrentActiveField) {
      store.value.activeField = ''
    }
    store.value.fields = store.value.fields.filter((field) => field.id !== id)
  }

  return { store, addField, setActiveField, getActiveField, removeField }
})
