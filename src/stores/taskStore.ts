import { defineStore } from 'pinia'

export interface Task {
  id: number
  title: string
  description: string
  dueDate: string
  completed: boolean
  category: string
}

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [] as Task[],
    nextId: 1
  }),
  actions: {
    loadFromStorage() {
      const data = localStorage.getItem('tasks')
      if (data) {
        const parsed = JSON.parse(data) as Task[]
        this.tasks = parsed
        this.nextId = parsed.length ? Math.max(...parsed.map(t => t.id)) + 1 : 1
      }
    },
    saveToStorage() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },
    addTask(title: string, description: string, dueDate: string, category: string) {
      this.tasks.push({
        id: this.nextId++,
        title,
        description,
        dueDate,
        completed: false,
        category
      })
      this.saveToStorage()
    },
    toggleTask(id: number) {
      const task = this.tasks.find(t => t.id === id)
      if (task) task.completed = !task.completed
      this.saveToStorage()
    },
    deleteTask(id: number) {
      const task = this.tasks.find(t => t.id === id)
      if (task && confirm(`⚠️ คุณแน่ใจหรือไม่ว่าต้องการลบ "${task.title}" ?`)) {
        this.tasks = this.tasks.filter(t => t.id !== id)
        this.saveToStorage()
      }
    },



    editTask(id: number, newTitle: string, newDescription: string, newDueDate: string, newCategory: string) {
      const task = this.tasks.find(t => t.id === id)
      if (task) {
        task.title = newTitle
        task.description = newDescription
        task.dueDate = newDueDate
        task.category = newCategory
      }
      this.saveToStorage()
    },


    deleteCompleted() {
      if (confirm("⚠️ คุณแน่ใจหรือไม่ว่าต้องการลบ Completed tasks ทั้งหมด?")) {
        this.tasks = this.tasks.filter(t => !t.completed)
        this.saveToStorage()
      }
    }


  }
})
