import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Router from "next/router";
import styles from "@styles/Nav.module.css";
import { ReactComponent as Logo } from "@assets/logo.svg";
import { ReactComponent as Explore } from "@assets/explore.svg";
import { ReactComponent as About } from "@assets/about.svg";
import { ReactComponent as Blog } from "@assets/blog.svg";

export default function Nav() {
  const menu = useRef(null);
  const logo = useRef(null);
  const explore = useRef(null);
  const blog = useRef(null);
  const about = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.from(menu.current, 1, {
      scaleY: 0,
      transformOrigin: "50% 50%",
    });

    tl.staggerFrom(
      [logo.current, explore.current, about.current, blog.current],
      3,
      {
        scale: 0,
        transformOrigin: "50% 50%",
        ease: "expo.out",
        // ease: "elastic.out(1, 0.5)",
      },
      0.25
    );

    return function cleanup() {
      console.log("cleaning up");
    };
  }, []);

  return (
    <div>
      <nav className={styles.main_menu} id="main-menu" ref={menu}>
        <Link href="/">
          <a className={styles.logo}>
            <Logo ref={logo} className={styles.menu_icon} />
          </a>
        </Link>
        <ul>
          <Link href="/explore">
            <li>
              <Explore className={styles.menu_icon} ref={explore} />
            </li>
          </Link>
          <Link href="/about">
            <li>
              <About className={styles.menu_icon} ref={about} />
            </li>
          </Link>
          <Link href="/blog">
            <li>
              <Blog className={styles.menu_icon} ref={blog} />
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
