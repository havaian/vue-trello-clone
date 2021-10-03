const app = Vue.createApp({
    data() {
      return {
        newTodoText: '',
        todos: [
          {
            id: 1,
            title: 'Learn Vue.js',
            class: 'todo',
          },
        ],
        doings: [
            {
              id: 1,
              title: 'Create Trello Clone',
              class: 'doing',
            },
        ],
        dones: [
            {
              id: 1,
              title: 'Design the app',
              class: 'done',
            },
        ],
        nextTodoId: 2
      }
    },
    methods: {
      addNewTodo() {
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText,
          class: "todo",
        })
        this.newTodoText = ''
      },
    }
})

app.component('todo-item', {
    template: `
        <li>
        {{ title }}
        <button @click="$emit('remove')">❌</button>
        </li>
    `,
    props: ['title'],
    emits: ['remove']
})

app.mount('#todo-list')