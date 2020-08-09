import { useState } from "react";
import dynamic from "next/dynamic";
import { FlyToInterpolator } from "react-map-gl";
import Path from "@components/explore/Path";

export default function Explore() {
  const [active, setActive] = useState("luepa");

  function handleActive(point) {
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
      <Path handleActive={handleActive} active={active} />
      <DynamicComponentWithNoSSR active={active} />
    </div>
  );
}
