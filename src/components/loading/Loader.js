import React, { useState, useEffect } from "react";
import Router, { useRouter } from "next/router";
import FullScreen from "@components/layout/Layout";

export default function Loader() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.pathname && setLoading(true);
    // handleComplete event was not firing
    const handleComplete = (url) =>
      url === router.pathname && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    <FullScreen>
      <h1 className={styles.title}>LOADING.....</h1>
      {/*I have an animation here*/}
    </FullScreen>
  );
}
