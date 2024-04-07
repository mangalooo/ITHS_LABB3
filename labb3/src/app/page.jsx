//rfc + tabb

'use client';

import React from 'react';
import { useEffect } from 'react'

export default function Home() {

  // Set page title
  useEffect(() => {
    document.title = "Fun page";
  });

    return (
        <main className="text-center">

            <br />
            <br />
            <h1> Start </h1>

            <br />
            <br />

            <img
                
                src='https://scontent.fgse1-1.fna.fbcdn.net/v/t1.6435-9/153577250_10158218898839682_4668790504750444538_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zpAAdoOhIQUAb7qQOeN&_nc_ht=scontent.fgse1-1.fna&oh=00_AfDZFEJtf7RMR_LxBIuQQqBWX80-AsPqFxn7glsgWE_xlw&oe=66390A85'
                alt="GAIS pic"
                style={{ height: 500, width: 700 }}
            />          
        </main>
    )
}
