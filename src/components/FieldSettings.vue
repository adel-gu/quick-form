<template>
  <div class="px-4">
    <div class="flex items-center justify-between">
      <h2 class="text-3xl my-4">Field Name</h2>
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
          />
        </li>
        <li class="flex justify-between items-center">
          <label for="name"> Input type </label>
          <input
            type="text"
            id="name"
            class="bg-white border border-gray-300 py-1 px-1.5 w-48 rounded-lg shadow-sm outline-none focus:ring focus:ring-green-500 focus:border-green-500 transition-all text-sm"
          />
        </li>
        <div class="h-[1px] mb-8 bg-gray-200" />
        <li class="flex justify-between items-center">
          <label for="name">Label</label>
          <input
            type="text"
            id="name"
            class="bg-white border border-gray-300 py-1 px-1.5 w-48 rounded-lg shadow-sm outline-none focus:ring focus:ring-green-500 focus:border-green-500 transition-all text-sm"
          />
        </li>
        <li class="flex justify-between items-center">
          <label for="name">Placeholder</label>
          <input
            type="text"
            id="name"
            class="bg-white border border-gray-300 py-1 px-1.5 w-48 rounded-lg shadow-sm outline-none focus:ring focus:ring-green-500 focus:border-green-500 transition-all text-sm"
          />
        </li>
        <li class="flex items-center gap-6">
          <label for="name">Required!</label>
          <input type="checkbox" id="name" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
