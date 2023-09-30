
"use client";
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link'
import Carousel from 'react-elastic-carousel'


function Blog(props) {

    const apiUrl = 'https://iamjaseer.in/portfolio_jaseer/wp-json/wp/v2/'
    let api = apiUrl + 'blogs?per_page=3&order=asc';
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
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
            <section className="blogs spacing-100 pt-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-12 mx-auto">
                            <h4 className='title-6 text-uppsercase font-weight-400'>BLOGS</h4>
                        </div>
                    </div>
                    <div className="row mt-2 g-0">
                        <div className='col-12'>
                            <Carousel
                                itemsToShow={3}
                                showArrows={false}
                                pagination={false}
                                itemPadding={[0, 50, 50, 0]}
                                itemsToScroll={1}
                                enableAutoPlay={true}
                                breakPoints={[
                                    {
                                        width: 1,
                                        itemsToShow: 1,
                                        itemPadding: [0, 0, 0, 0]
                                    },
                                    { width: 850, itemsToShow: 2 },
                                    { width: 1750, itemsToShow: 3 },
                                ]}
                            >
                                {posts.map((post, i) => (
                                    <>
                                        {/* ITEM START */}
                                        <div key={i}>
                                            <Link href={{ pathname: '/blog-single', query: { blog_id: post.id } }}>
                                                <img src={post.fimg_url} className='d-block w-100' alt={post.title.rendered} />
                                                <p className='body-2 mt-2'>{post.title.rendered}</p>
                                            </Link>
                                        </div>
                                        {/* ITEM END */}
                                    </>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}


export default Blog

