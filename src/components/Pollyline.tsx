import { LatLng, MapPolylineProps, Polyline } from "react-native-maps";

interface PollylineProps extends MapPolylineProps {
  startPoint: LatLng;
  endPoint: LatLng;
  strokeColor?: string;
}

export default function Pollyline({
  startPoint,
  endPoint,
  strokeColor = "#fff",
  ...rest
}: PollylineProps) {
  return (
    <Polyline
      coordinates={[startPoint, endPoint]}
      strokeColor={strokeColor} // fallback for when `strokeColors` is not supported by the map-provider
      strokeColors={[
        "#7F0000",
        "#00000000", // no color, creates a "long" gradient between the previous and next coordinate
        "#B24112",
      ]}
      strokeWidth={6}
    />
  );
}
