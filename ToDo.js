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
}

const myTodo = new TodoList("Мои задачи")
myTodo.addTask("Купить молоко")
myTodo.addTask("Сделать домашку")
myTodo.addTask("Позвонить маме")

console.log(myTodo)