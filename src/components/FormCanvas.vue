<template>
  <div>
    <ul
      class="mt-12 border rounded-md shadow w-[650px] min-h-[300px] px-2 py-6 space-y-5"
      ref="parent"
      @drop="handleDrop"
      @dragover="allowDrop"
    >
      <li
        v-for="(field, index) in fields"
        :key="field.id"
        :index="index"
        class="hover:cursor-pointer"
      >
        <component
          :is="getFieldComponent(field.type)"
          :field="field"
          class="relative z-0 m-4 pointer-events-none hover:pointer-events-none"
          @click="handleSelectedField(field.id)"
        />
      </li>
      <!-- <div
        v-for="(field, index) in derivedFields"
        :key="index"
        :index="index"
        class="relative border border-purple-500"
      >


        <div class="hidden" :class="{ active: selectedField === field.id }">
          <button
            class="bg-red-400 p-1 rounded-md flex items-center justify-center absolute -top-8 right-0"
            @click="handleRemoveField(field.id)"
          >
            <div>D</div>
          </button>
        </div>
      </div> -->
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useDragAndDrop } from 'vue-fluid-dnd'
import { storeToRefs } from 'pinia'
import { useFieldStore } from '../stores/fields.ts'
import { ref } from 'vue'

import TextField from './dynamic-fields/TextField.vue'
import type { InputTypes } from '@/stores/fields.ts'

const { fields } = storeToRefs(useFieldStore())
const { selectActiveField, addField } = useFieldStore()

const selectedField = ref('')
const { parent } = useDragAndDrop(fields)

function getFieldComponent(type: InputTypes) {
  const components = {
    text: TextField,
  }
  return components[type]
}

function handleSelectedField(id: string) {
  selectedField.value = selectActiveField(id) ?? ''
  console.log(selectActiveField(id))
}

function handleDrop(e: DragEvent) {
  e.preventDefault()
  const data = e.dataTransfer?.getData('field')
  if (data === 'text') {
    addField(data ?? '')
  }
  e.dataTransfer?.clearData()
}

function allowDrop(e: DragEvent) {
  e.preventDefault()
  console.log('dragin over')
}
</script>

<style scoped></style>
