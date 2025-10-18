


async function fetchData() {
  const output = document.getElementById("output");

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    // Show on the screen instead of just console
    output.innerHTML = `
      <h3>Title: ${data.title}</h3>
      <p>${data.body}</p>
    `;
  } catch (error) {
    output.innerHTML = `<p style="color:red;">❌ ${error.message}</p>`;
  }
}
