import React, { useEffect, useRef, createRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import DrawSVG from "gsap/dist/DrawSVGPlugin";
import styles from "@styles/Path.module.css";

export default function Path({ handleActive, active }) {
  gsap.registerPlugin(ScrollTrigger, DrawSVG); //check if process is happening on client or server side

  const luepa = useRef(null);
  const aponwao = useRef(null);
  const toron = useRef(null);
  const chivaton = useRef(null);
  const mantopai = useRef(null);
  const activePoint = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      activePoint.current,
      2,
      {
        display: "block",
        transformOrigin: "center center",
        scale: 0.4,
        opacity: 1,
        fill: "#daa520",
        strokeWidth: "2px",
        stroke: "#daa520",
      },
      {
        scale: 1.1,
        opacity: 0,
        repeat: 10,
        ease: "power2.out",
      }
    );

    return function cleanup() {
      //Finish and kill previous animation
      tl.progress(1);
      tl.kill();
    };
  }, [active]);

  function handleClick(event) {
    event.preventDefault();
    const point = event.target.getAttribute("name");
    handleActive(point);
  }

  return (
    <div className={styles.container}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 242.21 108.75"
        className={styles.svg}
      >
        <title>Route</title>
        <g className={styles.route}>
          <path
            d="M133.32,43.8a3.49,3.49,0,0,0,4,.31c.46-.25,1.52-1.57,2-1.78,1.89-.84,6.29,1.55,9.44,2s6.94-2.83,7.76-2.8c1.19,0,2.39,2.61,4.28,3.26a19.18,19.18,0,0,0,5.91.74l10,.21c1.65,0,3.4.42,4.88-.29a8.86,8.86,0,0,1,3.79-1.17c.77,0,1.94.38,2.71.46a6.9,6.9,0,0,0,5.48-2"
            transform="translate(-7.06 -8.7)"
          />
          <path
            d="M165.62,85.27c.38.84,1,2,1.41,2.63s1,1.89,1.59,2A74.24,74.24,0,0,1,176,91.56c.82.37,2.48,1.16,3.29,1.54,2,.94,3.39.39,5.5,1.1l2.67,4A6,6,0,0,0,189.1,100a86.28,86.28,0,0,1,8,4.88c1.3,1,3.55,7.49,3.44,10.5"
            transform="translate(-7.06 -8.7)"
          />
          <path
            d="M123,98.92c2.3,2.27,5.75,5.6,8,8.3"
            transform="translate(-7.06 -8.7)"
          />
          <path
            d="M75.66,93.26a11.39,11.39,0,0,1-3.14-1.86,37.05,37.05,0,0,1-3.18-3.21C67.81,86.41,66,85.92,64,84.79a9.54,9.54,0,0,1-4.73-5.87"
            transform="translate(-7.06 -8.7)"
          />
          <path
            d="M247.2,10.73c-1,3.9-6,7.34-10.56,8.7s-6.28,1-8.43,2.14c-1.57.84-3.16,5.79-4.75,6.59-7.23,3.63-14.64-2.29-19.53-2.12,0,0-6.72,7.29-9.36,12-1.17,2.08-.75,3-1,7.74-.12,2-3.48,2.75-3.46,4.7.07,6.64-2.91,6.88-3.4,7.5-1.43,1.79-.17,4.18-4.44,7.45-4,3.07-8.26,10.15-9.16,13.06-2.84,1.55-7.92-.79-7.48,6.77-1.08,1.8.53,2.2-10.46,2.79-4,.22-5.78,1.59-9.56,1.69-2.07.06-6.29-.69-8.15,0a19.1,19.1,0,0,0-4.24,2.66c-1,.79-1,2.62-2,3.35-2.57,1.84-3.92,1.1-6.83,2.57-4.37,2.2-6.4,2.25-8.79,3.67-1.86,1.1-2,1.87-3.86,2.39-1.15-.44-2.16-1.13-3.31-3.25-.9-1.63-.4-7.93-2.09-10.44-2.11-3.13-3.6-4.62-4.76-4.93-1.55.2-3.17,5.27-5.74,5-2.37-.27-4-2.58-6.42-3.32s-4.13-.21-6.58.49c-2.74.79-6.57,4.64-7.94,6.74-2.57,4-6.85,14.68-8,14.45-1.37-.33-3.6-7-5.72-8.5-.67-.49-9.26-6.19-10.15-6.31s-4.79.54-5.79.54c-2.06,0-5.76-1.46-7.76-1.85-6.06-1.16-7.28-1-11.45-7.08-2.07-3-5.51-4.22-6.4-8.2-.41-1.81-1.73-6.75-2.95-8.3-1.35-1.7-3.82-1.77-5.17-3.47S9.34,63.17,9.1,61.15"
            transform="translate(-7.06 -8.7)"
          />
        </g>
        <g ref={luepa}>
          <path
            ref={active === "luepa" ? activePoint : null}
            className={styles.outerPoint}
            d="M249,10.75A1.81,1.81,0,1,1,247.23,9,1.79,1.79,0,0,1,249,10.75Z"
            transform="translate(-7.06 -8.7)"
          />
          <ellipse
            className={styles.point}
            onClick={handleClick}
            name="luepa"
            cx="247.22"
            cy="10.74"
            rx="1.18"
            ry="1.19"
            transform="translate(227.3 249.15) rotate(-89.51)"
          />
        </g>
        <g id="toron">
          <path
            ref={active === "toron" ? activePoint : null}
            className={styles.outerPoint}
            d="M135.14,43.84a1.81,1.81,0,1,1-1.79-1.8A1.79,1.79,0,0,1,135.14,43.84Z"
            transform="translate(-7.06 -8.7)"
          />
          <ellipse
            className={styles.point}
            onClick={handleClick}
            name="toron"
            cx="133.34"
            cy="43.82"
            rx="1.18"
            ry="1.19"
            transform="translate(81.31 168.08) rotate(-89.51)"
          />
        </g>
        <g id="aponwao">
          <path
            ref={active === "aponwao" ? activePoint : null}
            className={styles.outerPoint}
            d="M202.41,115.43a1.81,1.81,0,1,1-1.79-1.8A1.8,1.8,0,0,1,202.41,115.43Z"
            transform="translate(-7.06 -8.7)"
          />
          <ellipse
            className={styles.point}
            onClick={handleClick}
            name="aponwao"
            cx="200.61"
            cy="115.41"
            rx="1.18"
            ry="1.19"
            transform="translate(76.42 306.32) rotate(-89.51)"
          />
        </g>
        <g id="chivaton">
          <path
            ref={active === "chivaton" ? activePoint : null}
            className={styles.outerPoint}
            d="M132.89,107.25a1.81,1.81,0,1,1-1.79-1.81A1.81,1.81,0,0,1,132.89,107.25Z"
            transform="translate(-7.06 -8.7)"
          />
          <ellipse
            className={styles.point}
            onClick={handleClick}
            name="chivaton"
            cx="131.08"
            cy="107.23"
            rx="1.18"
            ry="1.19"
            transform="translate(15.67 228.69) rotate(-89.51)"
          />
        </g>
        <g id="mantopai">
          <path
            ref={active === "mantopai" ? activePoint : null}
            className={styles.outerPoint}
            d="M61,78.94a1.8,1.8,0,0,1-3.6,0,1.8,1.8,0,0,1,3.6,0Z"
            transform="translate(-7.06 -8.7)"
          />
          <ellipse
            className={styles.point}
            onClick={handleClick}
            name="mantopai"
            cx="59.24"
            cy="78.93"
            rx="1.18"
            ry="1.19"
            transform="translate(-27.26 128.79) rotate(-89.51)"
          />
        </g>
        <g id="kavanayen">
          <path
            ref={active === "kavanayen" ? activePoint : null}
            className={styles.outerPoint}
            d="M68.76,109.18a1.81,1.81,0,1,1-1.79-1.8A1.8,1.8,0,0,1,68.76,109.18Z"
            transform="translate(-7.06 -8.7)"
          />
          <ellipse
            className={styles.point}
            onClick={handleClick}
            name="kavanayen"
            cx="66.95"
            cy="109.16"
            rx="1.18"
            ry="1.19"
            transform="translate(-49.84 166.48) rotate(-89.51)"
          />
        </g>
        <g id="karuay">
          <path
            ref={active === "karuay" ? activePoint : null}
            className={styles.outerPoint}
            d="M10.92,61.17a1.81,1.81,0,1,1-1.79-1.8A1.79,1.79,0,0,1,10.92,61.17Z"
            transform="translate(-7.06 -8.7)"
          />
          <ellipse
            className={styles.point}
            onClick={handleClick}
            name="karuay"
            cx="9.12"
            cy="61.16"
            rx="1.18"
            ry="1.19"
            transform="translate(-59.18 61.05) rotate(-89.51)"
          />
        </g>
      </svg>
    </div>
  );
}

// const [elRefs, setElRefs] = React.useState([]);

// useEffect(() => {
//   // add or remove refs
//   setElRefs((elRefs) =>
//     Array(7)
//       .fill()
//       .map((x, i) => elRefs[i] || createRef())
//   );
// }, []);
