# Temperature & Humidity Dashboard

A simple web application that displays real-time temperature and humidity data fetched from an API. The project is built using HTML, CSS, and JavaScript.

## Features
- Fetches temperature and humidity data from a REST API.
- Displays the data in a clean and responsive UI.
- Automatically updates the data every 10 seconds.

## Project Structure
```
index.html       - Main HTML file for the application.
styles.css       - CSS file for styling the application.
script.js        - JavaScript file for fetching and displaying data.
src/index.js     - Entry point for Node.js (currently unused).
package.json     - Project metadata and scripts.
README.md        - Project documentation.
```

## Getting Started

### Prerequisites
- A modern web browser.
- (Optional) Node.js and npm for running the project locally.

### Running the Application
1. Clone the repository:
   ```bash
   git clone https://github.com/Aleksandr802/temperature-humidity-dashboard.git
   ```
2. Navigate to the project directory:
   ```bash
   cd temperature-humidity-dashboard
   ```
3. Open index.html in your browser to view the application.

(Optional: If using Node.js)
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the application:
   ```bash
   npm start
   ```

## API
The application fetches data from the following API endpoint:
```
https://....amazonaws.com
```
Expected response format:
```json
{
  "temperature": 25,
  "humidity": 60
}
```

## License
