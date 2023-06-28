
"use client";
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';



const Footer = () => {

  const apiUrl = 'http://localhost/iamjaseer-api/wp-json/wp/v2/'
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  let api = apiUrl + 'contact?per_page=1';
  useEffect(() => {
    setLoading(true)
    axios.get(api)
      .then(res => {
        //console.log(res)
        setPosts(res.data)
        setLoading(false)
      })
  }, [setPosts])


  return (
    <>
      {posts.map((post, i) => (
        <footer className='py-5' key={i}>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12 d-sm-flex d-grid align-items-center justify-content-between col-main'>
                <p className='m-0'>
                  © JASEER ALI
                </p>
                <div className='links d-flex align-items-center justify-content-sm-end'>
                  <a href={'mailto:' + post.acf.email}>Mail</a>
                  <a href={post.acf.linkedin['url']}>LinkedIn</a>
                  <a href={post.acf.cv}>Read.cv</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      ))}
    </>
  )
}

export default Footer

