import useStore from "../store";

export default function TodoAdd() {
  const store = useStore();
  return (
    <>
      <form>
        <input
          placeholder="add new todo"
          value={store.newTodo}
          onChange={(e) => store.setNewTodo(e.target.value)}
        />
        <button onClick={() => store.addTodo()}>add todo</button>
      </form>
    </>
  );
}
