import Head from 'next/head'
import fetch from 'cross-fetch'
import React, { useState, useEffect } from 'react';

export default function Index() {
  /*useEffect(() => {
    var start = Date.now();
    fetch("//api.github.com/users/lquixada");
    var end = Date.now();

    console.log((end-start) + "ms");
  }, []);*/

  return (
    <div className="flex">
      <Head>
        <title>Hey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-center">Hi</h1>
      </main>
    </div>
  )
}