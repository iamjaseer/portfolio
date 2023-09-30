
"use client";
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link'


const Hero = () => {

    const apiUrl = 'https://iamjaseer.in/portfolio_jaseer/wp-json/wp/v2/'
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    let api = apiUrl + 'hero?per_page=1';
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
                <section key={i} className="hero spacing-100 pb-0 d-grid align-items-center">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-8 mx-auto">
                                <h1 className="title-5 text-uppercase"
                                    dangerouslySetInnerHTML={{
                                        __html: post.title.rendered,
                                    }}
                                />
                                <Link href='/cases' className='btn btn-lg mt-4'>My Works</Link>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </>
    )
}

export default Hero

