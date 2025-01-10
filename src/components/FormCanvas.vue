<template>
  <div class="mt-24">
    <ul
      class="border rounded-md shadow w-[650px] px-8 py-10 space-y-6"
      ref="parent"
      @drop="handleDrop"
      @dragover="allowDrop"
    >
      <li
        v-for="(field, index) in fields"
        :key="field.id"
        class="hover:cursor-pointer"
        :class="{ active: isActive === field.id }"
        @click="setActiveField(field.id)"
      >
        <component
          :index="index"
          :is="getFieldComponent()"
          :field="field"
          class="relative z-0 pointer-events-none hover:pointer-events-none"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useDraggable } from 'vue-draggable-plus'
import { storeToRefs } from 'pinia'
import { useFieldStore } from '../stores/fields.ts'
import { computed, ref } from 'vue'

import TextField from './dynamic-fields/TextField.vue'

const { setActiveField, addField } = useFieldStore()
const { store } = storeToRefs(useFieldStore())

const isActive = computed(() => store.value.activeField)
const fields = computed(() => store.value.fields)

const parent = ref()

useDraggable(parent, {
  animation: 150,
})

function getFieldComponent() {
  const components = {
    text: TextField,
  }
  return components.text
}

function handleDrop(e: DragEvent) {
  e.preventDefault()
  const data = e.dataTransfer?.getData('text')
  if (data === 'add-field') {
    addField()
  }
  e.dataTransfer?.clearData()
}

function allowDrop(e: DragEvent) {
  e.preventDefault()
}
</script>

<style scoped>
.active {
  @apply border border-green-500;
}
</style>
