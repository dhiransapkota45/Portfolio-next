import React from "react";
import AboutMe from "../components/about/AboutMe";

const about = () => {
  return (
    <>
      <Head>
        <title>Dhiran Portfolio</title>
        <meta name="description" content="Dhiran Sapkota" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AboutMe />
    </>
  );
};

export default about;
