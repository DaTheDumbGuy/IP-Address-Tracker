import { useEffect, useState, useRef } from "react";
import { fetchLocationData } from "../services/geolocationService";
import GeolocationData from "../types/geolocation";

export function useGeolocation() {
    const [data, setGeoData] = useState<GeolocationData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const locationData = await fetchLocationData(null);
                setGeoData(locationData);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    async function handleAddress(e: React.FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();

        const ipAddress = inputRef.current?.value.trim();
        const ipRegex = /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/;

        if (!ipAddress || !ipRegex.test(ipAddress)) {
            setError("Please enter a valid IP address.");
            return;
        }

        try {
            const locationData = await fetchLocationData(ipAddress);
            setGeoData(locationData);
            setError(null);
        } catch (err: any) {
            setGeoData(null);
            setError(err.message || "An unknown error occurred.");
        }
    }

    return { data, loading, error, inputRef, handleAddress, setError };
}
