import React, { useState, useRef, useEffect } from "react";
import ReactMapGL, { FlyToInterpolator } from "react-map-gl";
import styles from "@styles/Map.module.css";

function Map({ active }) {
  const coordinates = {
    luepa: [5.8117667, -61.4156333],
    toron: [5.7286833, -61.6312333],
    aponwao: [5.59685, -61.4946],
    chivaton: [5.5947833, -61.6353667],
    mantopai: [5.6483167, -61.7708167],
    kavanayen: [5.5856, -61.7519667],
    karuay: [5.6922833, -61.8605833],
  };

  const [map, setMap] = useState({
    viewport: {
      width: 200,
      height: 200,
      zoom: 14,
      latitude: 5.8117667,
      longitude: -61.4156333,
    },
  });

  useEffect(() => {
    const newViewport = {
      ...map.viewport,
      latitude: coordinates[active][0],
      longitude: coordinates[active][1],
      transitionInterpolator: new FlyToInterpolator(),
      transitionDuration: 5000,
    };
    setMap({ viewport: newViewport });
  }, []);

  return (
    <div className={styles.map}>
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken="pk.eyJ1IjoiY3hnYXJjaWEiLCJhIjoiY2tkbHBmeThoMDVkdzJzcDhpZzg1dWIycSJ9.8MSyx83vSO2XEalb6fY39Q"
        onViewportChange={(viewport) => setMap({ viewport })}
        {...map.viewport}
      />
    </div>
  );
}

export default Map;
