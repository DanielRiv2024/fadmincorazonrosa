import React, { useState, useMemo, useRef } from "react";
import {
  GoogleMap,
  Marker,
  useLoadScript,
  OverlayView,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import { FaMapMarkerAlt } from "react-icons/fa";

const MapContainer = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyArZHyy5dmwbZ8pxd7jY1AYDViWLttc-TE",
    libraries: ["places"],
  });

  const [center, setCenter] = useState({ lat: 9.9281, lng: -84.0907 });
  const [markerPosition, setMarkerPosition] = useState(null);

  const mapOptions = {
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    zoomControl: false,
    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f5f5",
          },
        ],
      },
      {
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161",
          },
        ],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#f5f5f5",
          },
        ],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#bdbdbd",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#dadada",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5",
          },
        ],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#c9c9c9",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
    ],
  };

  const mapRef = useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onPlacesChanged = () => {
    const places = searchBoxRef.current.getPlaces();
    if (places.length > 0) {
      const place = places[0];
      setCenter({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
      setMarkerPosition({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
    }
  };

  const searchBoxRef = useRef(null);

  if (!isLoaded) return "Cargando mapa...";

  return (
    <div
      className="flex flex-col justify-center "
    >
      <StandaloneSearchBox
        onLoad={(ref) => (searchBoxRef.current = ref)}
        onPlacesChanged={onPlacesChanged}
      >
        <input
          type="text"
          placeholder="Buscar lugar..."
          className="border border-2 border-cyan-700 rounded w-full py-2 px-3 text-cyan-700 leading-tight focus:outline-none focus:border-cyan-500 bg-white font-semibold my-5"
        />
      </StandaloneSearchBox>
      <div className="border border-2 border-cyan-700 rounded-xl">
        <GoogleMap
          mapContainerStyle={{
            width: "400px",
            height: "390px",
            borderRadius: "10px",
            borderColor: "#0E7490",
            border: "2px",
          }}
          zoom={15}
          center={center}
          onLoad={onMapLoad}
          options={mapOptions}
        >
          {markerPosition && (
            <Marker
              position={markerPosition}
              icon={<FaMapMarkerAlt color="red" />}
            />
          )}
        </GoogleMap>
      </div>
    </div>
  );
};

export default MapContainer;
