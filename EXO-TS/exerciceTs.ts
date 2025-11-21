1// Define datas type
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

2// Récupérer les information de l'API 
async function fetchTodos(): Promise<TodosResponse> {
  const response = await fetch("https://dummyjson.com/todos");
  console.log("RAW RESPONSE :", response);

  if (!response.ok) {
    throw new Error(`Error HTTP : ${response.status}`);
  }

  const data: TodosResponse = await response.json();
  console.log("DATA JSON :", data); 

  return data;
}

async function main() {
  const result = await fetchTodos();
  console.log("RESULT in Main :", result);
}

main();


