import useStore from "../store";

export default function TodoListItems() {
  const store = useStore();
  return (
    <>
      {store.todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.text}</p>
        </div>
      ))}
    </>
  );
}
