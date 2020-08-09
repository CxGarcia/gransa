import { useState } from "react";
import dynamic from "next/dynamic";
import { FlyToInterpolator } from "react-map-gl";
import Path from "@components/explore/Path";

export default function Explore() {
  const [coordinates, setCoordinates] = useState({
    latitude: 5.8117667,
    longitude: -61.4156333,
  });

  const [active, setActive] = useState("luepa");

  function handleCoordinates(point) {
    // setActive({ point: point, lat: lat, lon: lon });
    // setCoordinates({
    //   latitude: lat,
    //   longitude: lon,
    //   active: "toron",
    // });
    setActive(point);
  }

  // function handleDrag(viewport) {
  //   setMap({ viewport });
  // }

  const DynamicComponentWithNoSSR = dynamic(
    () => import("@components/maps/Map"),
    {
      ssr: false,
    }
  );

  return (
    <div>
      <Path handleCoordinates={handleCoordinates} />
      <DynamicComponentWithNoSSR coordinates={coordinates} active={active} />
    </div>
  );
}
