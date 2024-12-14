import { useEffect, useRef, useState } from "react";
import { fetchLocationData } from "./services/geolocationService.ts"



export default function App() {
  const [data, setGeoData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const fetchData = async () => {
        try {
            const locationData = await fetchLocationData(null);
            setGeoData(locationData);
            console.log("Fetched Data: ", locationData)
        } catch (error:any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    fetchData();
  }, []);
  async function handleAddress(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault(); // Prevent form reload

    const ipAddress = inputRef.current?.value.trim(); // Get the input value

    // Validate IP address format (optional)
    const ipRegex = /^(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[0-1]?[0-9][0-9]?)$/;

    if (!ipAddress || !ipRegex.test(ipAddress)) {
        setError("Please enter a valid IP address.");
        return;
    }

    try {
        // Make a GET request to your API with the input IP address
        const locationData = await fetchLocationData(ipAddress);

        setGeoData(locationData); // Store the fetched data in state
        setError(null); // Clear any previous error
        console.log("Fetched Data(Input): ", locationData)
    } catch (err: any) {
        setGeoData(null); // Clear previous data
        setError(err.message || "An unknown error occurred.");
    }
  }
  return (
    <>
      <header>
        <h1>IP Address Tracker</h1>
        <form action="" onSubmit={handleAddress}>
          <input 
            ref={inputRef}
            type="text" 
            placeholder="Enter IP Address"
            aria-label="IP Address"
          />
          <button type="submit">Search</button>
        </form>
        {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
      </header>
      <main>
        <section>
          <div>
            <h2>IP Address</h2>
            <p>{data?.ip}</p>
          </div>

          <div>
            <h2>Location</h2>
            <p>{data?.location.country}, {data?.location.region} {data?.location.city}</p>
          </div>

          <div>
            <h2>Timezone</h2>
            <p>UTC {data?.location.timezone}</p>
          </div>

          <div>
            <h2>ISP</h2>
            <p>{data?.isp}</p>
          </div>
          
        </section>
      </main>
    </>
  )
}
