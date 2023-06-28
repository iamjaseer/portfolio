
"use client";
import React from 'react'
import Case from './Case'
import { useEffect, useState } from 'react';
import axios from 'axios';



const HomeCases = () => {

    const apiUrl = 'http://localhost/iamjaseer-api/wp-json/wp/v2/'
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    let api = apiUrl + 'case_studies?per_page=2';
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
            <section className='cases'>
                <ul className='d-grid list-unstyled'>
                    {posts.map((post, i) => (
                        <li key={i} className='d-flex'>
                            <Case case={post.id} type='1' title={post.title.rendered} category={post.acf.type} media={post.fimg_url} />
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default HomeCases

