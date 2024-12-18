import { useEffect, useRef, useState } from "react";
import { fetchLocationData } from "../../services/geolocationService.ts";
import Map from "../../components/Map/Map.tsx";
import Header from "../../components/Header/Header.tsx";
import { eventFormType } from "../../types/header.ts";
import ShowData from "../../components/ShowData/ShowData.tsx";

export default function Home(){
    const [data, setGeoData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const locationData = await fetchLocationData(null);
                setGeoData(locationData);
            } catch (error:any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    async function handleAddress(e: eventFormType): Promise<void> {
    e.preventDefault(); // Prevent form reload

    const ipAddress = inputRef.current?.value.trim(); // Get the input value

    // Validate IP address format
    const ipRegex = /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/;

    if (!ipAddress || !ipRegex.test(ipAddress)) {
        setError("Please enter a valid IP address.");
        return;
    }

    try {
        // Make a GET request to API with the input IP address
        const locationData = await fetchLocationData(ipAddress);

        setGeoData(locationData); // Store the fetched data in state
        setError(null); // Clear any previous error
    } catch (err: any) {
        setGeoData(null); // Clear previous data
        setError(err.message || "An unknown error occurred.");
    }
    }
    return(
        <>
        <Header handleAddress={handleAddress} inputRef={inputRef} error={error}/>

        {/* Show Data */}
        <main>
            <ShowData 
                ip={data?.ip} 
                country={data?.location.country}
                region={data?.location.region}
                city={data?.location.city}
                timezone={data?.location.timezone}
                isp={data?.isp}
            />

            {/* Map Section */}
            {!loading && data?.location?.lat && data?.location?.lng && (
                <Map lat={data.location.lat} lng={data.location.lng} />
            )}
        </main>
        
        </>
    )
}