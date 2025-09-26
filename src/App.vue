<template>
  <div class="app px-6 py-8 bg-gray-50 min-h-screen">

    <header class="max-w-4xl mx-auto mb-8">
      <h1 class="text-3xl sm:text-4xl font-bold text-gray-800 flex items-center gap-3">
        <span class="text-green-500 text-4xl">✅</span>
        To-do List
      </h1>
      <p class="text-gray-500 mt-2 text-sm sm:text-base">
        Plan your tasks and stay organized!
      </p>
      <div class="mt-4 h-[2px] bg-gradient-to-r from-yellow-400 via-purple-400 to-purple-400 rounded-full w-full"></div>
    </header>


    <TaskForm />
    <TaskList />
  </div>
</template>


<script setup>
import { onMounted } from 'vue'
import { useTaskStore } from './stores/taskStore'
import TaskForm from './components/TaskForm.vue'
import TaskList from './components/TaskList.vue'

const store = useTaskStore()

onMounted(() => {
  store.loadFromStorage()
})
</script>
