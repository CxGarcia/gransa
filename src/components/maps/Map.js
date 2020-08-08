import { useState, useRef } from "react";

import ReactMapGL, { FlyToInterpolator } from "react-map-gl";
import styles from "@styles/Map.module.css";

export default function Map() {
  const ref = useRef(null);
  const [map, setMap] = useState({
    viewport: {
      width: 200,
      height: 200,
      latitude: 5.8117667,
      longitude: -61.4156333,
      zoom: 11,
    },
  });

  function handleClick(event) {
    event.preventDefault();
    const currentViewport = {
      ...map.viewport,
      latitude: +event.target.getAttribute("lat"),
      longitude: +event.target.getAttribute("lon"),
      transitionDuration: 5000,
      transitionInterpolator: new FlyToInterpolator(),
    };

    setMap({ viewport: currentViewport });
  }

  return (
    <div className={styles.map}>
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken="pk.eyJ1IjoiY3hnYXJjaWEiLCJhIjoiY2tkbHBmeThoMDVkdzJzcDhpZzg1dWIycSJ9.8MSyx83vSO2XEalb6fY39Q"
        onViewportChange={(viewport) => setMap({ viewport })}
        {...map.viewport}
      />

      <button onClick={handleClick} ref={ref} lat="5.6483167" lon="-61.7708167">
        change coordinates
      </button>
    </div>
  );
}
