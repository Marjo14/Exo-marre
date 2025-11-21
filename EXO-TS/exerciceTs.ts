// 1️⃣ Interfaces
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

// 2️⃣ Fonction GET ➜ récupère TOUTES les todos
async function fetchTodos(): Promise<TodosResponse> {
  const response = await fetch("https://dummyjson.com/todos?limit=0"); // 👈 récupère toutes les todo

  if (!response.ok) {
    throw new Error(`Error HTTP : ${response.status}`);
  }

  const data: TodosResponse = await response.json();
  return data;
}

// 3️⃣ Fonction ➜ retourne seulement le tableau de todos
async function getOnlyTodos(): Promise<Todo[]> {
  const result = await fetchTodos();
  return result.todos;
}

// 4️⃣ Fonction ➜ affiche UNIQUEMENT les textes
async function mainBis() {
  const todos = await getOnlyTodos();

  for (const t of todos) {
    console.log(t.todo); // 👈 ici on affiche seulement la phrase
  }
}

// 5️⃣ Appel de la fonction principale
mainBis();
