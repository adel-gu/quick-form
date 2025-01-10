import type { IField } from '../types/index.d.ts'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export enum InputTypes {
  TEXT = 'text',
}

const TEXT_FIELD = {
  type: InputTypes.TEXT,
  label: 'Name',
  placeholder: 'Enter your name',
  required: true,
}

const INITIAL_FIELDS = [TEXT_FIELD]

export const useFieldStore = defineStore('fields', () => {
  const fields = ref<IField[]>([])

  function addField(type: string) {
    const uuid = `text-field-${Math.random().toString(36).slice(2, 9)}`
    if (type) {
      const field = INITIAL_FIELDS.find((field) => field.type === type)!
      fields.value.push({ id: uuid, ...field })
    }
  }

  function selectActiveField(id: string) {
    return fields.value.find((field) => field.id === id)?.id
  }

  function removeField(id: string) {
    fields.value = fields.value.filter((field) => field.id !== id)
  }

  return { fields, addField, selectActiveField, removeField }
})
