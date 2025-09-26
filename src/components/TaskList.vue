<template>
  <ul>
    <TaskItem v-for="task in store.tasks" :key="task.id" :task="task" />
  </ul>
</template>

<script setup >
import { useTaskStore } from '@/stores/taskStore'
import TaskItem from '/src/components/TaskItem.vue'

const store = useTaskStore()
</script>
