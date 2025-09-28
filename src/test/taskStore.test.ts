import { describe, it, expect, beforeEach } from "vitest"
import { setActivePinia, createPinia } from "pinia"
import { useTaskStore } from "@/stores/taskStore"

describe("Task Store", () => {
  beforeEach(() => {
    // รีเซ็ต Pinia ก่อนทุก test
    setActivePinia(createPinia())
    localStorage.clear()
  })

  it("should add a new task", () => {
    const store = useTaskStore()
    store.addTask("Test Task", "Description", "2025-01-01", "Work")

    expect(store.tasks.length).toBe(1)
    expect(store.tasks[0].title).toBe("Test Task")
    expect(store.tasks[0].completed).toBe(false)
  })

  it("should toggle task completed", () => {
    const store = useTaskStore()
    store.addTask("Toggle Task", "", "2025-01-02", "Personal")

    const id = store.tasks[0].id
    store.toggleTask(id)

    expect(store.tasks[0].completed).toBe(true)

    store.toggleTask(id)
    expect(store.tasks[0].completed).toBe(false)
  })

  it("should edit a task", () => {
    const store = useTaskStore()
    store.addTask("Old Title", "Old Desc", "2025-01-03", "Work")

    const id = store.tasks[0].id
    store.editTask(id, "New Title", "New Desc", "2025-02-01", "Urgent")

    expect(store.tasks[0].title).toBe("New Title")
    expect(store.tasks[0].description).toBe("New Desc")
    expect(store.tasks[0].dueDate).toBe("2025-02-01")
    expect(store.tasks[0].category).toBe("Urgent")
  })

  it("should delete a task", () => {
    const store = useTaskStore()
    store.addTask("Task to Delete", "", "", "Work")

    const id = store.tasks[0].id
    store.deleteTask(id)

    expect(store.tasks.length).toBe(0)
  })

  it("should delete completed tasks", () => {
    const store = useTaskStore()
    store.addTask("Task 1", "", "", "Work")
    store.addTask("Task 2", "", "", "Personal")

    // ทำให้ task แรกเป็น complete
    store.toggleTask(store.tasks[0].id)

    store.deleteCompleted()

    expect(store.tasks.length).toBe(1)
    expect(store.tasks[0].title).toBe("Task 2")
  })
})
