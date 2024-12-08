// src/services/geolocationService.ts

export const fetchLocationData = async () => {
    try {
        const response = await fetch('http://localhost:5173/api/geolocation');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json(); // This parses the JSON 
        return data; // Return the parsed data
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error to handle it in the calling component
    }
};
