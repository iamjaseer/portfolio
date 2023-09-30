
"use client";
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link'


const About2 = () => {

    const apiUrl = 'https://iamjaseer.in/portfolio_jaseer/wp-json/wp/v2/'
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    let api = apiUrl + 'about_2?per_page=1';
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
                <section key={i} className="spacing-100 d-grid align-items-end" id="about">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xl-8 mx-auto">
                                <h2 className="title-5 text-uppercase mb-5"
                                    dangerouslySetInnerHTML={{
                                        __html: post.title.rendered,
                                    }}
                                />
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: post.content.rendered,
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

export default About2

