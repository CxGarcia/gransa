import dynamic from "next/dynamic";
import Path from "@components/explore/Path";

export default function Explore() {
  const DynamicComponentWithNoSSR = dynamic(
    () => import("@components/maps/Map"),
    {
      ssr: false,
    }
  );
  return (
    <div>
      <Path />
      <DynamicComponentWithNoSSR />
    </div>
  );
}
