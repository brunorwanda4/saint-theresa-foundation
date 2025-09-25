"use client";

import { useEffect, useMemo } from "react";
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from "react-leaflet";
import type { LatLngTuple } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import locations from "@/constants/locations";

type Location = {
  id: string;
  name: string;
  lat: number;
  lng: number;
  type?: "base" | "pharmacy" | "mobile" | "office";
  description?: string;
};

function AutoFitBounds({ locations }: { locations: Location[] }) {
  const map = useMap();

  useEffect(() => {
    if (!locations.length) return;

    if (locations.length === 1) {
      const { lat, lng } = locations[0];
      map.setView([lat, lng], 14, { animate: false });
      return;
    }

    const bounds = L.latLngBounds(
      locations.map((l) => [l.lat, l.lng] as LatLngTuple)
    );
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 14, animate: false });
  }, [locations, map]);

  return null;
}

export default function OperationsMapInner() {
  // Kigali fallback center (only used before bounds fit)
  const defaultCenter: [number, number] = [-1.9441, 30.0619];

  const colorFor = (type?: Location["type"]) => {
    switch (type) {
      case "pharmacy":
        return "#ca8a04"; // yellow-600
      case "mobile":
        return "#2563eb"; // blue-600
      case "office":
        return "#0ea5e9"; // cyan-500
      case "base":
      default:
        return "#1e3a8a"; // blue-900
    }
  };

  // Stable key so MapContainer remounts if the list changes (defensive)
  const mapKey = useMemo(() => locations.map((l) => l.id).join("|"), []);

  return (
    <section aria-labelledby="ops-map-title" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <h2 id="ops-map-title" className="text-2xl md:text-3xl font-bold text-blue-900">
            Where We Operate
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-600">
            Bases for mobile clinics, community pharmacies, digital health, and outreach.
          </p>
        </div>

        <div className="relative h-[420px] overflow-hidden rounded-xl border border-gray-200 shadow-sm">
          <MapContainer
            key={mapKey}
            center={defaultCenter}
            zoom={12}
            className="h-full w-full"
            scrollWheelZoom
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />

            {/* Auto-fit the view to the markers */}
            <AutoFitBounds locations={locations as Location[]} />

            {locations.map((loc) => (
              <CircleMarker
                key={loc.id}
                center={[loc.lat, loc.lng]}
                radius={8}
                pathOptions={{
                  color: colorFor(loc.type),
                  fillColor: colorFor(loc.type),
                  fillOpacity: 0.9,
                  weight: 1.5,
                }}
              >
                <Popup>
                  <div className="space-y-1">
                    <p className="font-semibold">{loc.name}</p>
                    {loc.description && (
                      <p className="text-sm text-gray-700">{loc.description}</p>
                    )}
                    {loc.type && (
                      <p className="text-xs text-gray-500">Type: {loc.type}</p>
                    )}
                  </div>
                </Popup>
              </CircleMarker>
            ))}
          </MapContainer>
        </div>

        <p className="mt-3 text-center text-xs text-gray-500">
          Planned sites (pharmacies &amp; mobile units) per the 2025–2027 action plan.
        </p>
      </div>
    </section>
  );
}
