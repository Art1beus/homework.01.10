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

console.log(myTodo)