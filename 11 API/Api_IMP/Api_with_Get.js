async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data', {
      method: 'GET', // optional, GET is default
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log('Fetched Data:', data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();
