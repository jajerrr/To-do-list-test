<template>

  <div class="w-full max-w-3xl mx-auto flex justify-between items-center mb-6 px-4 sm:px-0">
    <h1 class="text-2xl font-bold text-gray-800">MY TASKS</h1>
    <button @click="showModal = true"
      class="flex items-center gap-2 px-3 py-1.5 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition">

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
        <path
          d="M12 5c.552 0 1 .448 1 1v5h5c.552 0 1 .448 1 1s-.448 1-1 1h-5v5c0 .552-.448 1-1 1s-1-.448-1-1v-5H6c-.552 0-1-.448-1-1s.448-1 1-1h5V6c0-.552.448-1 1-1z" />
      </svg>
      <span>Add Task</span>
    </button>


  </div>

  <div v-if="showModal" class="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm bg-white/10 p-4">
    <div class="bg-white rounded-xl shadow-xl w-full max-w-md p-5 sm:p-6 space-y-4">
      <h2 class="text-lg sm:text-xl font-semibold text-gray-800">Add New Task</h2>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <input v-model="title" placeholder="Task title" required
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none" />

        <textarea v-model="description" placeholder="Description"
          class="w-full px-4 py-2 border border-gray-300 rounded-md resize-none h-24 focus:outline-none"></textarea>

        <div class="grid grid-cols-2 gap-3 pt-4">
  <input 
    type="date" 
    v-model="dueDate" 
    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
  />
  <select 
    v-model="category" 
    class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    <option value="Work">💼 Work</option>
    <option value="Personal">🏡 Personal</option>
    <option value="Urgent">⏰ Urgent</option>
  </select>
</div>

        <div class="flex justify-end space-x-[5%] pt-4">
          <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded-md transition">
            Add
          </button>
          <button type="button" @click="showModal = false"
            class="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition">
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { useTaskStore } from '@/stores/taskStore'

const showModal = ref(false)

const store = useTaskStore()

const title = ref('')
const description = ref('')
const dueDate = ref('')
const category = ref('Work')

const handleSubmit = () => {
  if (title.value.trim()) {
    store.addTask(title.value, description.value, dueDate.value, category.value)
    title.value = ''
    description.value = ''
    dueDate.value = ''
    category.value = 'Work'
    showModal.value = false
  }
}
</script>


<style>

</style>
