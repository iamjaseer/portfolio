
"use client";
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

const About1 = () => {

  const apiUrl = 'http://localhost/iamjaseer-api/wp-json/wp/v2/'
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  let api = apiUrl + 'about_1?per_page=1';
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
        <section key={i} className="spacing-150 d-grid align-items-end">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-8 mx-auto">
                <h2 className="title-7 text-uppercase"
                  dangerouslySetInnerHTML={{
                    __html: post.title.rendered,
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}

export default About1

