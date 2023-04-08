import useStore from "../store";

export default function TodoListItems() {
  const store = useStore();

  return (
    <>
      {store.todos.map((todo) => (
        <div key={todo.id} style={{ display: "flex" }}>
          <input type="checkbox" checked={todo.isComplete} />
          <input
            value={todo.text}
            onChange={(e: any) => store.update(todo.id, e.target.value)}
          />
          <button onClick={() => store.remove(todo.id)}>remove</button>
        </div>
      ))}
    </>
  );
}
