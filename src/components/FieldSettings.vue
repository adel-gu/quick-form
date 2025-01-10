<template>
  <div>
    <div class="px-4" v-if="activeField">
      <div class="flex items-center justify-between">
        <h2 class="text-3xl my-4" v-if="activeField.name">{{ activeField?.name }}</h2>
        <h2 class="text-3xl my-4" v-else>field name</h2>
        <button class="bg-red-100 hover:bg-red-700 size-fit rounded-md px-1 py-0.5 transition-all">
          &#128465;
        </button>
      </div>

      <div>
        <h3 class="text-xl my-4">Properties</h3>
        <div class="h-[1px] mb-8 bg-gray-200" />

        <ul class="px-4 space-y-6">
          <li class="flex justify-between items-center">
            <label for="name"> Name </label>
            <input
              type="text"
              id="name"
              class="bg-white border border-gray-300 py-1 px-1.5 w-48 rounded-lg shadow-sm outline-none focus:ring focus:ring-green-500 focus:border-green-500 transition-all text-sm"
              :placeholder="activeField.name"
              v-model="activeField.name"
            />
          </li>
          <li class="flex justify-between items-center">
            <label for="type"> Input type </label>
            <select
              name="cars"
              id="type"
              class="bg-white border border-gray-300 py-1 px-1.5 w-48 rounded-lg shadow-sm outline-none focus:ring focus:ring-green-500 focus:border-green-500 transition-all text-sm"
              :placeholder="activeField.type"
              v-model="activeField.type"
            >
              <option value="text">Text</option>
              <option value="email">Email</option>
              <option value="password">Password</option>
            </select>
          </li>
          <div class="h-[1px] mb-8 bg-gray-200" />
          <li class="flex justify-between items-center">
            <label for="label">Label</label>
            <input
              type="text"
              id="label"
              class="bg-white border border-gray-300 py-1 px-1.5 w-48 rounded-lg shadow-sm outline-none focus:ring focus:ring-green-500 focus:border-green-500 transition-all text-sm"
              :placeholder="activeField.label"
              v-model="activeField.label"
            />
          </li>
          <li class="flex justify-between items-center">
            <label for="placeholder">Placeholder</label>
            <input
              type="text"
              id="placeholder"
              class="bg-white border border-gray-300 py-1 px-1.5 w-48 rounded-lg shadow-sm outline-none focus:ring focus:ring-green-500 focus:border-green-500 transition-all text-sm"
              :placeholder="activeField.placeholder"
              v-model="activeField.placeholder"
            />
          </li>
          <li class="flex items-center gap-6">
            <label for="required">Required!</label>
            <input
              type="checkbox"
              id="required"
              :checked="activeField.required"
              v-model="activeField.required"
            />
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      <p class="p-5 text-xl">Select an input item to start editing</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFieldStore } from '../stores/fields.ts'
import { computed } from 'vue'

const { getActiveField } = useFieldStore()

const activeField = computed(() => getActiveField())
</script>

<style scoped></style>
