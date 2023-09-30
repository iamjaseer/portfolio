
"use client"
import React, { useState, useRef, useEffect } from 'react';
import Header from '../app/components/Header'
import Footer from '../app/components/Footer'
import AnimatedCursor from "react-animated-cursor"
import '../../public/static/scss/theme.min.css'


export const metadata = {
  title: 'Welcome to iamjaseeer',
  description: 'I am a developer and UI designer',
}



export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
              <link rel="manifest" href="/site.webmanifest"/>
                <meta name="msapplication-TileColor" content="#da532c"/>
                  <meta name="theme-color" content="#ffffff"/>
                  <link rel="preconnect" href="https://fonts.googleapis.com" />
                  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto:wght@300;400&display=swap" rel="stylesheet" />
                </head>
                <body>
                  {/* <AnimatedCursor
                    innerSize={10}
                    outerSize={10}
                    outerAlpha={0}
                    innerScale={1}
                    outerScale={5}

                    innerStyle={{
                      backgroundColor: 'var(--cursor-color)'
                    }}
                    outerStyle={{
                      border: '1px solid var(--cursor-color)',
                    }}
                    clickables={[
                      'a',
                      'input[type="text"]',
                      'input[type="email"]',
                      'input[type="number"]',
                      'input[type="submit"]',
                      'input[type="image"]',
                      'label[for]',
                      'select',
                      'textarea',
                      'button',
                      '.link'
                    ]}
                  /> */}
                  <Header theme="light" />

                  {/* <SmoothScroll> */}
                  <div className='mt-1 mt-sm-0'>
                    {children}
                  </div>
                  <Footer />
                  {/* </SmoothScroll> */}
                </body>
              </html>
              )
}
