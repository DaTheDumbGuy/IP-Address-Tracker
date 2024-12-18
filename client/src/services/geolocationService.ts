import GeolocationData from "../types/geolocation";

export const fetchLocationData = async (inputValue:any) => {
    const url = inputValue ? `${import.meta.env.VITE_API_URL}?ipAddress=${encodeURIComponent(inputValue)}`: `${import.meta.env.VITE_API_URL}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data:GeolocationData = await response.json();
        return data; 
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; 
    }
};
