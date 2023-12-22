import React from 'react'
import Blog from '../components/blog/Blog'
import Head from 'next/head'

const blog = () => {
  return (
    <div>
      <Head>
        <title>Dhiran Portfolio</title>
        <meta name="description" content="Dhiran Sapkota" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Blog />
    </div>
  )
}

export default blog