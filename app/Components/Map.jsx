"use client";
import React from "react";
import Image from "next/image";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import beyoglu from "@/public/BeyoğluŞubesi.png";
import fatih from "@/public/FatihŞubesi.jpg";
import gaziosmanpasa from "@/public/GaziosmanpaşaŞubesi.png";
import laleli from "@/public/LaleliŞubesi.png";
import "leaflet/dist/leaflet.css";

const markerLocations = [
  {
    position: [41.011756, 28.954756],
    name: "Laleli PizzaLand",
    address: "Istanbul, TUR",
    image: laleli,
  },
  {
    position: [41.01218, 28.950192],
    name: "Fatih PizzaLand",
    address: "Istanbul, TUR",
    image: fatih,
  },
  {
    position: [41.028906, 28.974285],
    name: "Beyoğlu PizzaLand",
    address: "Istanbul, TUR",
    image: beyoglu,
  },
  {
    position: [41.057901, 28.920892],
    name: "Gaziosmanpaşa PizzaLand",
    address: "Istanbul, TUR",
    image: gaziosmanpasa,
  },
];

function getIcon() {
  return new L.Icon({
    iconUrl:
      "https://cdn-icons-png.freepik.com/512/10239/10239486.png?ga=GA1.1.1316012144.1716721314",
    iconSize: [35, 31],
    iconAnchor: [12, 40],
    popupAnchor: [6, -41],
  });
}

export default function page() {
  return (
    <section className="flex justify-center mt-3">
      <MapContainer
        center={[41.0082, 28.9784]}
        zoom={13}
        zoomControl={false}
        className="w-1/2 h-[500px] rounded-2xl"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markerLocations.map((marker, index) => {
          return (
            <Marker
              key={index}
              position={marker.position}
              icon={getIcon()}
              opacity={0.8}
            >
              <Popup>
                <div className="grid h-40 grid-cols-2 w-80 gap-x-5 ">
                  <div className="flex flex-col justify-center ">
                    <h3 className="font-semibold ">{marker.name}</h3>
                    <p>{marker.address}</p>
                  </div>
                  <div>
                    <Image
                      src={marker.image}
                      width={140}
                      height={140}
                      alt="logo"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </section>
  );
}
