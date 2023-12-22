import React from "react";
import Project from "../components/project/Project";
import Head from "next/head";

const projects = () => {
  return (
    <div>
      <Head>
        <title>Dhiran Portfolio</title>
        <meta name="description" content="Dhiran Sapkota" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Project />
    </div>
  );
};

export default projects;
