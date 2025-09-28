<template>
  <ul>
    <TaskItem v-for="task in sortedTasks" :key="task.id" :task="task" />
  </ul>

  <div v-if="sortedTasks.length === 0" class="text-center text-gray-500 py-4">
    <span v-if="activeTab === 'all'">No tasks yet</span>
    <span v-else>No completed tasks</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTaskStore } from '@/stores/taskStore'
import TaskItem from '@/components/TaskItem.vue'

const store = useTaskStore()

const props = defineProps<{
  activeTab: 'all' | 'complete'
}>()


const filteredTasks = computed(() => {
  return props.activeTab === 'all'
    ? store.tasks.filter(t => !t.completed)
    : store.tasks.filter(t => t.completed)
})


const sortedTasks = computed(() => {
  return [...filteredTasks.value].sort((a, b) => {
    if (!a.dueDate) return 1 
    if (!b.dueDate) return -1
    return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
  })
})
</script>
