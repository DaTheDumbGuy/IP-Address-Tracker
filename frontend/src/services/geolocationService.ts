import GeolocationData from "../types/geolocation";

// src/services/geolocationService.ts

export const fetchTestData = async ()=>{
    try{
        const response = await fetch('/api/test');
        if(!response.ok){
            throw new Error("Network response was not ok");
        }
        const data:GeolocationData = await response.json();
        return data;
    }catch(err){
        console.log('Error fetching data: ', err);
        throw err;
    }
}

export const fetchLocationData = async () => {
    try {
        const response = await fetch('/api/geolocation');
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
