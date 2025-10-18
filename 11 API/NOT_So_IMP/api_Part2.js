fetch('https://api.example.com/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'John Doe', age: 30 }), // Send data as JSON
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));