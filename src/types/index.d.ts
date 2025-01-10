import { InputTypes } from '@/stores/fields'

export interface IField {
  id: string
  type: InputTypes.TEXT
  label: string
  placeholder: string
  required?: boolean
}
