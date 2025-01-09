<template>
  <div class="flex justify-between">
    <div class="w-[350px] h-screen border-r bg-gray-50">
      <field-palette />
    </div>
    <div class="h-screen"></div>
    <div class="w-[350px] h-screen border-l bg-gray-50"></div>
  </div>
</template>

<script setup lang="ts">
import FieldPalette from './components/FieldPalette.vue'
</script>

<style scoped></style>
