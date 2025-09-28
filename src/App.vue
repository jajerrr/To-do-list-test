<template>
  <div class="app px-6 py-8 bg-gray-50 min-h-screen">

    <header class="max-w-4xl mx-auto mb-8">
      <h1 class="text-3xl sm:text-4xl font-bold text-gray-800 flex items-center gap-3">
        <span class="text-green-500 text-4xl">✅</span>
        To-do List
      </h1>
      <p class="text-gray-500 mt-5 text-sm sm:text-base">
        Plan your tasks and stay organized!
      </p>
      <div class="mt-4 h-[2px] bg-gradient-to-r from-yellow-400 via-purple-400 to-purple-400 rounded-full w-full"></div>
    </header>


    <TaskForm :activeTab="activeTab" @change-tab="activeTab = $event" />
    <TaskList :activeTab="activeTab" />
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted } from 'vue'
import TaskForm from '@/components/TaskForm.vue'
import TaskList from '@/components/TaskList.vue'
import { useTaskStore } from '@/stores/taskStore'

const activeTab = ref<'all' | 'complete'>('all')
const store = useTaskStore()

onMounted(() => {
  store.loadFromStorage()
})
</script>
