import useStore from "../store";

export default function TodoAdd() {
  const store = useStore();
  console.log(store);

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    store.addTodo();
  };
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input
          placeholder="add new todo"
          value={store.newTodo}
          onChange={(e: any) => store.setNewTodo(e.target.value)}
        />
        <button type="submit">add todo</button>
      </form>
    </>
  );
}
