import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const STORAGE_KEY = 'vuetify-todos'

let parse = function () {
  let toParse = ''
  if (window.localStorage.getItem(STORAGE_KEY)) {
    toParse = window.localStorage.getItem(STORAGE_KEY)
  } else {
    toParse = '[]'
  }
  console.log('parseado!')
  return JSON.parse(toParse)
}

const state = {
  todos: parse()
}

const mutations = {
  addTodo (state, todo) {
    state.todos.push(todo)
  },
  removeTodo (state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },
  editTodo (state, todo) {

    const idx = state.todos.findIndex((element) => element.uid === todo.todo.uid)
    const textFilt = todo.text ? todo.text : todo.todo.text; 
    const doneFilt = todo.done === undefined ? todo.todo.done : todo.done ;

    state.todos[idx] = {
      ...todo.todo,
      text: textFilt,
      done: doneFilt
    }
  }
}

const actions = {
  addTodo (store, text) {
    store.commit('addTodo', {
      uid: Date.now(),
      text,
      done: false
    })
  },
  removeTodo (store, todo) {
    store.commit('removeTodo', todo)
  },
  toggleTodo (store, todo) {
    store.commit('editTodo', { todo:todo, done: !todo.done })
  },
  editTodo (store, data) {
    store.commit('editTodo', { todo: data.todo, text: data.value })
  },
  toggleAll (store, done) {
    store.state.todos.forEach(function (todo) {
      return store.commit('editTodo', { todo, done })
    })
  },
  clearCompleted (store) {
    store.state.todos.filter(function (todo) { return todo.done })
      .forEach(function (todo) {
        return store.commit('removeTodo', todo)
      })
  }
}

const plugins = [function (store) {
  store.subscribe(function (mutation, data) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data.todos))
  })
}]

export default new Vuex.Store({
  state,
  mutations,
  actions,
  plugins
})