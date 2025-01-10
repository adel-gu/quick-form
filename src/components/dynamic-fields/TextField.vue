<template>
  <div>
    <!-- Label -->
    <label :for="field.id" class="block text-sm font-medium text-gray-700">
      {{ field.label }} <span v-show="field.required" class="text-red-500">*</span>
    </label>

    <!-- Input Field -->
    <input
      :id="field.id"
      :name="field.id"
      :type="field.type"
      :placeholder="field.placeholder"
      class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
    />
  </div>
</template>

<script setup lang="ts">
import type { IField } from '@/types/index'

defineProps<{
  field: IField
}>()
</script>

<style lang="scss" scoped></style>
