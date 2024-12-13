import { useEffect, useState } from "react";
import { fetchLocationData } from "./services/geolocationService.ts"



export default function App() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const locationData = await fetchLocationData();
            setData(locationData);
            console.log("Fetched Data: ", locationData);
        } catch (error:any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    fetchData();
  }, []);
  // fetchLocationData()
  // .then(data => {
  //     console.log('Fetched location data:', data);
  // })
  // .catch(error => {
  //     console.error('Error fetching location data:', error);
  // });
  return (
    <>
      <header>
        <h1>IP Address Tracker</h1>
        <div>
          <input type="text" />
          <button type="button">Button</button>
        </div>
      </header>
      <main></main>
    </>
  )
}
