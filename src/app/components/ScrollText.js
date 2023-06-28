
"use client";
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';



const ScrollText = () => {

    const apiUrl = 'http://localhost/iamjaseer-api/wp-json/wp/v2/'
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    let api = apiUrl + 'scroll_text?per_page=1';
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
                <section key={i} className="scroll-text spacing-150 text-center overflow">
                    <h2 className="marquee">
                        <span className='title title-2 font-weight-400 text-uppercase'>{post.title.rendered}</span>
                    </h2>
                </section>
            ))}
        </>
    )
}

export default ScrollText

