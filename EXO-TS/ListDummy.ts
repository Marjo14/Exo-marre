// Transformation interface générique 
// 1️⃣ Type d’un Todo
interface Todo {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}

// 2️⃣ Type générique pour une liste DummyJSON
interface ListDummy1<T> {
  todos: T[];     
  total: number;
  skip: number;
  limit: number;
}


// 3️⃣ Fonction générique GET
async function getDummy1<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Erreur HTTP : ${response.status}`);
  }

  const data: T = await response.json();
  return data;
}

// 4️⃣ Fonction principale : récupère la liste de todos
async function mainBi() {
  const todosList = await getDummy1<ListDummy1<Todo>>(
    "https://dummyjson.com/todos"
  );

  console.log(todosList.todos); // 👈 ici tu as tous les Todo
}

// 5️⃣ Exécuter main
mainBi();
