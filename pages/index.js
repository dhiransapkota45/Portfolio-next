import Head from "next/head";
import Hero from "../components/home/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dhiran Portfolio</title>
        <meta name="description" content="Dhiran Sapkota" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className="h-screen bg-black text-white">prama</div> */}
      <Hero />
    </>
  );
}
