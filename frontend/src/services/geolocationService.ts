import GeolocationData from "../types/geolocation";

// src/services/geolocationService.ts

export const fetchLocationData = async (inputValue:any) => {
    console.log(inputValue);
    const url = inputValue ? `/api/geolocation?ipAddress=${encodeURIComponent(inputValue)}`: '/api/geolocation';
    console.log(url);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data:GeolocationData = await response.json(); // This parses the JSON 
        console.table(data)
        return data; // Return the parsed data
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error to handle it in the calling component
    }
};
