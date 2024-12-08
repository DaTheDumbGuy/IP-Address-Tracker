import { fetchLocationData } from "./services/geolocationService"


export default function App() {
  fetchLocationData()
  .then(data => {
      console.log('Fetched location data:', data);
  })
  .catch(error => {
      console.error('Error fetching location data:', error);
  });
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
