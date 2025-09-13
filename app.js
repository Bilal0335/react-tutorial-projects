// * Sample todos array
let todos = [
  { id: 1, title: "Learn JS", completed: true },
  { id: 2, title: "Learn React", completed: false },
  { id: 3, title: "Practice Coding", completed: false }
];

// * 1) forEach → sirf iterate karna (side-effect)
console.log("👉 All Todos (using forEach):");
todos.forEach((todo) => {
  console.log(todo.title);
});

// * 2) map → new array banana (sirf titles nikalna)
const titles = todos.map((todo) => todo.title);
console.log("👉 Titles only (using map):", titles);

// * 3) filter → condition se filter karna (completed todos)
const completedTodos = todos.filter((todo) => todo.completed);
console.log("👉 Completed Todos (using filter):", completedTodos);

// * 4) for...in → object ke keys par loop karna
const user = { id: 101, name: "Bilal", role: "Developer" };
console.log("👉 User object keys & values (using for...in):");
for (let key in user) {
  console.log(key, ":",user[key]);
}

// * 5) for...of → array ke elements par loop karna (values directly milti hain)
console.log("👉 All Todos (using for...of):");
for (let todo of todos) {
  console.log(todo.id, "-", todo.title, "-", todo.completed ? "✅ Done" : "❌ Not Done");
}
