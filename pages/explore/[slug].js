import { useState } from "react";
import dynamic from "next/dynamic";
import { getAllPosts } from "@api/getPosts";
import Path from "@components/explore/Path";

export default function Explore({ allPosts }) {
  const [active, setActive] = useState("luepa");

  console.log(allPosts);

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

export async function getStaticProps() {
  const allPosts = getAllPosts(
    ["title", "date", "slug", "author", "coverImage", "excerpt"],
    "_explore"
  );

  return {
    props: { allPosts },
  };
}
