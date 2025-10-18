function greet(name, callback) {
  console.log("Hello, " + name);
  callback(); // Call the callback function
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

//1️⃣ greet("Alice", sayGoodbye) calls greet().
//2️⃣ "Hello, Alice" prints.
//3️⃣ callback(); calls sayGoodbye(), which prints "Goodbye!".
