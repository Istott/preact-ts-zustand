import { create } from "zustand";

type Todo = {
  id: number;
  text: string;
  isComplete: boolean;
};

const updateTodo = (todos: Todo[], id: number, text: string): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text,
  }));

const toggleTodo = (todos: Todo[], id: number): Todo[] =>
  todos.map((todo) => ({
    ...todo,
    isComplete: todo.id === id ? !todo.isComplete : todo.isComplete,
  }));

const removeTodo = (todos: Todo[], id: number): Todo[] =>
  todos.filter((todo) => todo.id !== id);

const addTodo = (todos: Todo[], text: string): Todo[] => {
  return [
    ...todos,
    {
      id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
      text,
      isComplete: false,
    },
  ];
};

type Store = {
  todos: Todo[];
  newTodo: string;
  addTodo: () => void;
  setNewTodo: (text: string) => void;
  update: (id: number, text: string) => void;
  remove: (id: number) => void;
  toggle: (id: number) => void;
};

const useStore = create<Store>((set) => ({
  todos: [
    {
      id: 1,
      text: "bob",
      isComplete: false,
    },
  ],
  newTodo: "",
  addTodo() {
    set((state) => ({
      ...state,
      todos: addTodo(state.todos, state.newTodo),
      newTodo: "",
    }));
  },
  setNewTodo(text: string) {
    set((state) => ({
      ...state,
      newTodo: text,
    }));
  },
  update(id: number, text: string) {
    set((state) => ({
      ...state,
      todos: updateTodo(state.todos, id, text),
    }));
  },
  toggle(id: number) {
    set((state) => ({
      ...state,
      todos: toggleTodo(state.todos, id),
    }));
  },
  remove(id: number) {
    set((state) => ({
      ...state,
      todos: removeTodo(state.todos, id),
    }));
  },
}));

export default useStore;
