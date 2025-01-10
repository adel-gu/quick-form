<template>
  <div class="flex justify-between">
    <div class="w-[350px] h-screen border-r bg-gray-50">
      <field-palette />
    </div>
    <div class="h-screen">
      <form-canvas />
    </div>
    <div class="w-[350px] h-screen border-l bg-gray-50">
      <field-settings />
    </div>
  </div>
</template>

<script setup lang="ts">
import FieldPalette from './components/FieldPalette.vue'
import FieldSettings from './components/FieldSettings.vue'
import FormCanvas from './components/FormCanvas.vue'
</script>

<style scoped></style>
