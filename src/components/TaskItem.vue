<template>
  <li class="w-full mx-auto max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl
           flex flex-col sm:flex-row justify-between items-start sm:items-center
           gap-4 p-4 sm:p-5 bg-white rounded-lg shadow-md border border-gray-200 mb-2">

    <div class="flex items-start gap-5 sm:gap-4 w-full min-w-0 order-1">
      <input type="checkbox" :checked="task.completed" @change="store.toggleTask(task.id)"
        class="h-5 w-5 mt-1 accent-blue-500 shrink-0" />


      <div class="flex-1 min-w-0 space-y-1">
        <div class="flex flex-col gap-1 items-start w-full min-w-0">
          <div class="flex  gap-2  ">
            <span class="block w-full font-semibold text-sm sm:text-base whitespace-normal break-words min-w-0"
              :class="{ 'line-through text-gray-400': task.completed }">
              {{ task.title }}
            </span>

            <span :class="[
              'inline-flex items-center gap-1 text-xs font-medium px-2 py-1 rounded flex-shrink-0',
              {
                'bg-blue-100 text-blue-700': task.category === 'Work',
                'bg-green-100 text-green-700': task.category === 'Personal',
                'bg-red-100 text-red-700': task.category === 'Urgent',
              }
            ]">
              {{ categoryEmoji[task.category] }} {{ task.category }}
            </span>



          </div>

          <span v-if="task.description" class="block w-full italic text-gray-500 whitespace-normal break-words min-w-0">
            {{ task.description }}
          </span>
        </div>



        <div class="text-xs sm:text-sm flex flex-wrap gap-2 items-center break-words">
          <span class="shrink-0 font-medium" :class="isOverdue && !task.completed ? 'text-red-600' : 'text-[#1C14FF]'">
            Due: {{ task.dueDate || '—' }}
          </span>

          <span v-if="isOverdue && !task.completed" class="text-red-600 font-semibold ml-1">
            Overdue!
          </span>
        </div>

      </div>
    </div>


    <div class="flex gap-2 w-full sm:w-auto justify-end sm:justify-start
             order-3 sm:order-2">
      <button @click="showEditModal = true"
        class="flex items-center gap-2 px-3 py-1.5 bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor" class="w-4 h-4">
          <path
            d="M416.9 85.2L372 130.1L509.9 268L554.8 223.1C568.4 209.6 576 191.2 576 172C576 152.8 568.4 134.4 554.8 120.9L519.1 85.2C505.6 71.6 487.2 64 468 64C448.8 64 430.4 71.6 416.9 85.2zM338.1 164L122.9 379.1C112.2 389.8 104.4 403.2 100.3 417.8L64.9 545.6C62.6 553.9 64.9 562.9 71.1 569C77.3 575.1 86.2 577.5 94.5 575.2L222.3 539.7C236.9 535.6 250.2 527.9 261 517.1L476 301.9L338.1 164z" />
        </svg>
        <span>Edit</span>
      </button>

      <button @click="store.deleteTask(task.id)"
        class="flex items-center gap-2 px-3 py-1.5 bg-red-500 text-white rounded-md hover:bg-red-600 transition text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="currentColor" class="w-4 h-4">
          <path
            d="M232.7 69.9L224 96L128 96C110.3 96 96 110.3 96 128C96 145.7 110.3 160 128 160L512 160C529.7 160 544 145.7 544 128C544 110.3 529.7 96 512 96L416 96L407.3 69.9C402.9 56.8 390.7 48 376.9 48L263.1 48C249.3 48 237.1 56.8 232.7 69.9zM512 208L128 208L149.1 531.1C150.7 556.4 171.7 576 197 576L443 576C468.3 576 489.3 556.4 490.9 531.1L512 208z" />
        </svg>
        <span>Delete</span>
      </button>

    </div>


    <div v-if="showEditModal"
      class="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm bg-white/10 p-4">
      <div class="bg-white rounded-xl shadow-xl w-full max-w-md p-5 sm:p-6 space-y-4">
        <h2 class="text-lg sm:text-xl font-semibold text-gray-800">Edit Task</h2>
        <form @submit.prevent="saveEdit" class="space-y-4">
          <input v-model="editTitle" placeholder="Title"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            required />
          <textarea v-model="editDescription" placeholder="Description"
            class="w-full px-4 py-2 border border-gray-300 rounded-md resize-none h-24 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>


          <div class="grid grid-cols-2 gap-3 pt-4">

            <input type="date" v-model="editDueDate"
              class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none" />

            <select v-model="editCategory" class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none">
              <option value="Work">💼 Work</option>
              <option value="Personal">🏡 Personal</option>
              <option value="Urgent">⏰ Urgent</option>
            </select>

          </div>


          <div class="flex justify-end gap-3 pt-2">
            <button type="submit" class="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
              Save
            </button>
            <button type="button" @click="showEditModal = false"
              class="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </li>
</template>



<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTaskStore, type Task } from '@/stores/taskStore'

const props = defineProps<{ task: Task }>()
const store = useTaskStore()

const showEditModal = ref(false)
const editTitle = ref(props.task.title)
const editDescription = ref(props.task.description)
const editDueDate = ref(props.task.dueDate)
const editCategory = ref(props.task.category)

//edit
const saveEdit = () => {
  if (editTitle.value.trim()) {
    store.editTask(props.task.id, editTitle.value, editDescription.value, editDueDate.value, editCategory.value)
    showEditModal.value = false
  }
}

//overdue
const isOverdue = computed(() => {
  if (!props.task.dueDate) return false
  const today = new Date().toISOString().split('T')[0]
  return props.task.dueDate < today
})


const categoryEmoji: Record<string, string> = {
  Work: "💼",
  Personal: "🏡",
  Urgent: "⏰",
}


</script>
