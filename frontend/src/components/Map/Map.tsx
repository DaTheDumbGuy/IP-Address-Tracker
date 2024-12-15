import { MapContainer, TileLayer, Marker, Popup, useMap  } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

interface Location {
  lat: number;
  lng: number;
}interface RecenterMapProps {
  lat: number;
  lng: number;
}

export default function Map({ lat, lng }: Location) {
  const position: [number, number] = [lat, lng];

  return (
    <div id="map">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '100vh', width: '100%' }}
      >
        {/* Update map view when position changes */}
        <RecenterMap lat={lat} lng={lng} />

        {/* Map tiles */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Marker */}
        <Marker position={position}>
          <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

function RecenterMap({ lat, lng }: RecenterMapProps) {
    const map = useMap();
    map.setView([lat, lng]);
    return null;
  }