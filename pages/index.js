import React, { useState, useRef, useEffect } from "react";
import styles from "@styles/Home.module.css";
import { getAllPosts } from "@api/getPosts";
import PreviewContainer from "@components/post/preview-container";
import Posts from "@components/post/posts";
import { ReactComponent as Sun } from "@assets/sun-icon.svg";
import { ReactComponent as Moon } from "@assets/moon-icon.svg";

export default function Home({ allPosts }) {
  const posts = allPosts.slice(0, 3);
  const kuke = useRef(null);
  const postSection = useRef(null);

  // const DynamicComp = dynamic(() =>
  //   import("@components/loading/Loader").then((mod) => {
  //     console.log("loading");
  //     return mod.Loader;
  //   })
  // );

  const [dark, setDark] = useState(false);

  function handleClick() {
    setDark(!dark);
  }

  return (
    <div className={dark ? styles.mainDark : styles.mainLight}>
      <div className={styles.controlBar}>
        {dark ? <Sun onClick={handleClick} /> : <Moon onClick={handleClick} />}
      </div>
      <section
        className={dark ? styles.sectionDark : styles.sectionLight}
        ref={postSection}
      >
        <h1 className={styles.title}>GRAN SABANA</h1>
        <PreviewContainer>
          <Posts posts={posts} />
        </PreviewContainer>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(
    ["title", "date", "slug", "author", "coverImage", "excerpt"],
    "_posts",
    "dateDescending"
  );

  return {
    props: { allPosts },
  };
}
