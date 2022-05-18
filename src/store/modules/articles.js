const state = {
  articles: [],
};

const getters = {
  allArticles: (state) => {
    return state.articles;
  },
};

const actions = {
  async fetchTodos({ commit }) {
    commit("setTodos", response.data);
  },

  async deleteTodo({ commit }, id) {
    commit("removeTodo", id);
  },

  async updateTodo({ commit }, updatedTodo) {
    commit("updateTodo", response.data);
  },

  async addTodo({ commit }, title) {
    const response = await axios.post(
      `https://jsonplaceholder.typicode.com/todos`,
      { title: title, completed: false }
    );

    commit("addTodo", response.data);
  },

  async filterTodos({ commit }, event) {
    // Get the limit
    commit("setTodos", response.data);
  },
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  removeTodo: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo.id !== id)),
  updateTodo: (state, updatedTodo) => {
    // Find index
    const index = state.todos.findIndex((todo) => todo.id === updatedTodo.id);

    if (index !== -1) {
      state.todos.splice(index, 1, updatedTodo);
    }
  },
  addTodo: (state, newTodo) => state.todos.unshift(newTodo),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
