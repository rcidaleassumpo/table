export async function getTodo(todoId: number) {
  return fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  ).then((res) => res.json());
}

export async function getAll() {
  const getTodos = Array(10)
    .fill(1)
    .map((_, ind) => getTodo(ind + 1));

  return Promise.all(getTodos);
}
