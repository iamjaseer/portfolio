import React from 'react'
import {useEffect, useRef} from 'react';

export default function Theme() {
    const ref = useRef(null);

 
    useEffect(() => {
        console.log('className 👉️', ref.current.className);
    
        if (ref.current.classList.contains('light')) {
          console.log('Element contains class');
        } else {
          console.log('Element does NOT contain class');
        }
      }, []);

      

}

