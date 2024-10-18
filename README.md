# Main Street Locations 🚀

Main Street Locations is a React project developed with Vite, designed to display all Main Street Auto locations on a map through the integration of the Google Maps API. The project also includes a search functionality to find locations by city, state, or zip code using the Places Autocomplete API.

## Features

- Display all Main Street Auto office locations on a Google Map.
- Each location is represented by a marker on the map.
- Search for locations by city, state, or zip code using the Places Autocomplete API.
- Responsive design for mobile and desktop screens.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Vite**: A fast development build tool for modern web projects.
- **Redux**: State management for locations.
- **Google Maps API**: Used to display the map and add location markers.
- **Places Autocomplete API**: Integrated to enable location search by city, state, or zip code.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Cristianjs93/main-street-locations.git
   ```

2. Navigate to the project directory:

   ```bash
   cd main-street-locations
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Usage

1. Run the application:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:

   ```
   http://localhost:5173
   ```

3. Use the search bar at the top of the page to find specific locations by entering a city, state, or zip code. The Places Autocomplete API will suggest possible results as you type. For instance, try with McDonough.

4. Clicking on a marker will display the details of the selected location.

## Environment

Create a .env file in the root of the project and add your Google Maps API key in a variable called `VITE_MAP_API_KEY`

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request. Any contributions, whether improvements or bug fixes, are welcome!

## License

This project is licensed under the MIT License.
