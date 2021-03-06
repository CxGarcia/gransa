import Head from "next/head";

export default function Meta() {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.css"
        rel="stylesheet"
      />
      <title>Gran Sabana Blog</title>
    </Head>
  );
}
