"use client";
import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Carousel from 'react-elastic-carousel'


const BlogSingle = () => {

    const searchParams = useSearchParams()
    const blogid = searchParams.get('blog_id')

    const apiUrl = 'http://localhost/iamjaseer-api/wp-json/wp/v2/'

    const [posts, setPosts] = useState([]);
    const [postsMore, setPostsMore] = useState([]);

    const [loading, setLoading] = useState(false);

    let api = apiUrl + 'blogs?include=' + blogid
    let api2 = apiUrl + 'blogs?per_page=3&order=asc&exclude=' + blogid;

    useEffect(() => {
        setLoading(true)
        axios.get(api)
            .then(res => {
                //console.log(res)
                setPosts(res.data)
                setLoading(false)
            })
    }, [setPosts])


    useEffect(() => {
        setLoading(true)
        axios.get(api2)
            .then(res => {
                //console.log(res)
                setPostsMore(res.data)
                setLoading(false)
            })
    }, [setPostsMore])



    const update = (e) => {

        let api = apiUrl + 'blogs?include=156' + e.currentTarget.getAttribute('data-item')
        setLoading(true)
        axios.get(api)
            .then(res => {
                //console.log(res)
                setPosts(res.data)
                setLoading(false)
                // //console.log(api)
            })
    }

    useEffect(() => { }, [setPosts])

    return (
        <>
            {/* BLOG SINGLE START */}
            <section className="blog-single spacing-100 pt-sm-5 d-grid align-items-end" id="blogsingle">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-8 mx-auto">
                            {posts.map((post, i) => (
                                <div key={i.toString()}>
                                    <img src={post.fimg_url} className='d-block w-100' alt={post.title.rendered} />
                                    <div className='content-blog mt-5'>
                                        <h1>{post.title.rendered}</h1>
                                        <span
                                            dangerouslySetInnerHTML={{
                                                __html: post.content.rendered,
                                            }}
                                        />
                                        <p className='text-muted mt-4'>Release {post.formatted_date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* BLOG SINGLE END */}
            {/* BLOG MORE START */}
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
                                {postsMore.map((postmoreblog, i) => (
                                    <>
                                        {/* ITEM START */}
                                        <div key={i.toString()}>
                                            <Link href={{ pathname: '/blog-single', query: { blog_id: postmoreblog.id } }} data-item={postmoreblog.id} onClick={update}>
                                                <img src={postmoreblog.fimg_url} className='d-block w-100' alt={postmoreblog.title.rendered} />
                                                <p className='body-2 mt-2'>{postmoreblog.title.rendered}</p>
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
            {/* BLOG MORE END */}
        </>
    )
}

export default BlogSingle