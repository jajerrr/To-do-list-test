<template>
  <ul>
    <TaskItem v-for="task in filteredTasks" :key="task.id" :task="task" />
  </ul>

  <div v-if="filteredTasks.length === 0" class="text-center text-gray-500 py-4">
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
</script>
