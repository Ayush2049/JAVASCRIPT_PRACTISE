async function submitPost() {
  const title = document.getElementById("postTitle").value;
  const body = document.getElementById("postBody").value;
  const resultDiv = document.getElementById("result");

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1 // optional, just part of fake API
      })
    });

    if (!response.ok) {
      throw new Error('Failed to create post');
    }

    const data = await response.json();

    resultDiv.innerHTML = `
      <h3>✅ Post Created!</h3>
      <p><strong>ID:</strong> ${data.id}</p>
      <p><strong>Title:</strong> ${data.title}</p>
      <p><strong>Body:</strong> ${data.body}</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = `<p style="color:red;">❌ ${error.message}</p>`;
  }
}
