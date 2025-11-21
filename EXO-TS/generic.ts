// 1) Interfaces 
interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

interface TodosResponse {
  todos: Todo[];
  total: number;
  skip: number;
  limit: number;
}

// 2) Fonction générique
async function getDummy<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Erreur HTTP : ${response.status}`);
  }

  const data: T = await response.json();
  return data;
}

// 3) Fonction main qui utilise getDummy
async function main() {
  const todosResponse = await getDummy<TodosResponse>("https://dummyjson.com/todos");
  console.log(todosResponse);
}

// 4) Appel de main (en dehors de main !)
main();
