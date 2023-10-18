import React from "react";
import MapView, { MapViewProps, PROVIDER_GOOGLE } from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";
import MyMarker from "./MyMarker";
const { width } = Dimensions.get("window");

interface MyMapsProps extends MapViewProps {
  type?: "standard" | "satellite" | "hybrid" | "terrain" | "none";
  lat: number;
  lng: number;
  title: string;
  points: any[];
}
export default function MyMap({
  type = "standard",
  lat,
  lng,
  points,
  children,
  initialRegion,
  region,
  title = "Seu carro",
  ...rest
}: MyMapsProps) {
  return (
    <MapView
      style={styles.map}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      mapType={type}
      userLocationPriority="high"
      userLocationAnnotationTitle="Você"
      showsMyLocationButton={true}
      showsCompass={true}
      showsBuildings={true}
      showsTraffic={true}
      showsIndoors={true}
      showsIndoorLevelPicker={true}
      showsPointsOfInterest={true}
      showsScale={true}
      initialRegion={initialRegion}
      region={region}
    >
      <MyMarker
        lat={lat}
        lng={lng}
        title={title}
        coordinate={{ latitude: lat, longitude: lng }}
      />
      {points.map((point, index) => (
        <MyMarker
          key={point.id}
          lat={Number(point.latitude)}
          lng={Number(point.longitude)}
          title={point.name}
          description={point.name}
          icon={require("../assets/point.png")}
          coordinate={{ latitude: lat, longitude: lng }}
        />
      ))}
      {children}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
