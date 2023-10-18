import React, { useState } from "react";
import { MapMarker, MapMarkerProps, Marker } from "react-native-maps";
import IconPoint from "../assets/point.svg";
interface MyMarkerProps extends MapMarkerProps {
  lat: number;
  lng: number;
  title?: string;
  description?: string;
  icon?: any;
}

export default function MyMarker({
  lat,
  lng,
  title = "",
  description = "",
  icon = null,
}: MyMarkerProps) {
  return (
    <Marker
      title={title}
      description={description}
      coordinate={{
        latitude: lat,
        longitude: lng,
      }}
      icon={icon}
    ></Marker>
  );
}
