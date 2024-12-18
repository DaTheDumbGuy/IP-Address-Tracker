import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './map.module.scss';
import L from 'leaflet';
import icolLocation from '../../assets/images/icon-location.svg';

interface Location {
  lat: number;
  lng: number;
}

const customIcon = L.icon({
  iconUrl: icolLocation, // Custom image
  iconSize: [35, 45], // Size of the icon
  iconAnchor: [16, 32], // Anchor for positioning
  popupAnchor: [0, -32], // Popup anchor point
});

export default function Map({ lat, lng }: Location) {
  const position: [number, number] = [lat, lng];

  return (
    <div className={styles['b-background']}>
      <div className={styles['b-background__header']}></div>
      <div id={styles['b-background__map']}>
        <MapContainer
          className={styles['b-background__mapContainer']}
          center={position}
          zoom={13}
          scrollWheelZoom={true}
          zoomControl={false}
        >
          {/* Update map view when position changes */}
          <RecenterMap lat={lat} lng={lng} />
          {/* Map tiles */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Marker */}
          <Marker position={position} icon={customIcon}>
            <Popup>Address</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

function RecenterMap({ lat, lng }: Location) {
  const map = useMap();
  map.setView([lat, lng]);
  return null;
}
