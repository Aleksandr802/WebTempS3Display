const apiUrl = 'https://ykugjza793.execute-api.us-east-2.amazonaws.com';

async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        // Assuming JSON structure: { "temperature": 25, "humidity": 60 }
        const temperature = data.temperature || '--';
        const humidity = data.humidity || '--';

        // Update the page with the fetched data
        document.getElementById('temperature').textContent = `Temperature: ${temperature} °C`;
        document.getElementById('humidity').textContent = `Humidity: ${humidity} %`;

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Fetch data every 10 seconds
setInterval(fetchData, 10000);

// Fetch data immediately on page load
fetchData();
