class TodoList {
    constructor(name, tasks = []) {
        this.tasks = tasks
        this.name = name
    }
    addTask(description) {
        this.tasks.push({
            id: this.tasks.length + 1,
            description: description,
            status: false
        })
    }
    completeTask(taskId) {
        this.tasks[taskId - 1].status = true
    }
    deleteTask(taskId) {
        this.tasks.splice(taskId - 1, 1)
    }
    getAllTasks() {
        return this.tasks
    }
    getCompletedTasks() {
        let completedTasks = []
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].status === true) {
                completedTasks.push(this.tasks[i])
            }
        }
        return completedTasks
    }
    getPendingTasks() {
        let pendingTasks = []
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].status === false) {
                pendingTasks.push(this.tasks[i])
            }
        }
        return pendingTasks
    }
    getTaskCount() {
        let total = this.tasks.length
        let completed = 0
        let pending = 0
        for (let i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i].status === true) {
                completed++
            } else {
                pending++
            }
        }
        return {total: total, completed: completed, pending: pending}
    }
}

const myTodo = new TodoList("Мои задачи")

// Добавляем задачи
myTodo.addTask("Купить молоко")
myTodo.addTask("Сделать домашку")
myTodo.addTask("Позвонить маме")

// Отмечаем как выполненную
myTodo.completeTask(1)

// Удаляем выбранную задачу
myTodo.deleteTask(1)

// Получение всех заданий
myTodo.getAllTasks()

// Получение только выполненых заданий
myTodo.getCompletedTasks()

// Получение только НЕвыполненых заданий
myTodo.getPendingTasks()

// Получение статистики по заданиям
myTodo.getTaskCount()

console.log(myTodo)