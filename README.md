# Weather App

This is a simple weather application built with Node.js and Express.js that fetches weather data from the OpenWeatherMap API based on user input.

## Features

- Allows users to enter the name of a city to get the current weather information.
- Displays the temperature, weather description, and an icon representing the current weather condition.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/weather-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd weather-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the server:

    ```bash
    node app.js
    ```

2. Open your web browser and navigate to `http://localhost:3000`.

3. Enter the name of a city in the provided input field and submit the form.

4. The application will display the current weather information for the specified city.

## Environment Variables

This application requires the use of an API key from OpenWeatherMap to fetch weather data. **Do not** include API keys or other sensitive information directly in your code or in public repositories. Instead, set up an environment variable to securely store your API key.

1. Sign up for an account on [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) and obtain your API key.

2. Set up an environment variable named `OPENWEATHERMAP_API_KEY` on your system and assign it your API key.

   ```bash
   export OPENWEATHERMAP_API_KEY="your_api_key_here"
