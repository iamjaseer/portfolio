
"use client";
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Contact = () => {

  const apiUrl = 'https://iamjaseer.in/portfolio_jaseer/wp-json/wp/v2/'
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  let api = apiUrl + 'contact?per_page=1';
  useEffect(() => {
    setLoading(true)
    axios.get(api)
      .then(res => {
        console.log(res)
        setPosts(res.data)
        setLoading(false)
      })
  }, [setPosts])


  return (
    <>
      {posts.map((post, i) => (
        <section className="hero contact">
         <div className="container-fluid spacing-100 pb-0 d-grid align-items-between h-100">
            <div className="row">
              <div className="col-xl-7 mx-auto">
                <h1 className="title-6 text-uppercase">Let's make<br className='d-xl-block' />
                  something great —</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-7 mx-auto">
                <div className='row'>
                  <div className="col-lg-6 mx-auto">
                    <p className='body-2 text-muted m-0'>E-mail</p>
                    <a href={'mailto:' + post.acf.email} className='title-7 font-weight-500 text-uppercase primary-font'>{post.acf.email}</a>
                  </div>
                  <div className="col-lg-6 mx-auto mt-5 mt-lg-0">
                    <p className='body-2 text-muted m-0'>Phone</p>
                    <a href={'tel:' + post.acf.phone} className='title-7 font-weight-500 text-uppercase primary-font'>{post.acf.phone}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}

export default Contact



