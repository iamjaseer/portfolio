"use client";
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Case from '../components/Case'
import { useSearchParams } from 'next/navigation'



const CaseSingle = () => {

    const searchParams = useSearchParams()
    const search = searchParams.get('case_id')
    const nextCase = searchParams.get('case_id')
    const nextCaseSet = +nextCase + 1

    const apiUrl = 'https://iamjaseer.in/portfolio_jaseer/wp-json/wp/v2/'
    const [posts, setPosts] = useState([])
    const [postsMore, setPostsMore] = useState([])
    const [loading, setLoading] = useState(false)

    let api = apiUrl + 'case_studies?include=' + search
    let apiMore = apiUrl + 'case_studies?per_page=1&include=' + nextCaseSet
    //alert(apiMore)

    useEffect(() => {
        setLoading(true)
        axios.get(api)
            .then(res => {
                //console.log(res)
                setPosts(res.data)
                setLoading(false)
            })
    }, [setPosts])


    //MORE
    useEffect(() => {
        setLoading(true)
        axios.get(apiMore)
            .then(res => {
                //console.log(res)
                setPostsMore(res.data)
                setLoading(false)
            })
    }, [setPostsMore])


    return (
        <>

            {posts.map((post, i) => (
                <>
                    {/* HERO START */}
                    <section key={i} className="spacing-100 pb-0 d-grid align-items-end">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xl-12 mx-auto">
                                    <h1 className="title-4 text-uppercase">{post.title.rendered}</h1>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* HERO END */}
                    {/* ADDITION TEXT START */}
                    <section className="spacing-100 pt-0 d-grid align-items-end mt-5">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xl-10 mx-auto">
                                    <p>{post.acf.short_info} —</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* ADDITION TEXT END */}
                    {/* INFO START */}
                    <section className="blog-single spacing-100 d-grid align-items-end">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xl-10 mx-auto">

                                    <div className='content-case-single'
                                        dangerouslySetInnerHTML={{
                                            __html: post.content.rendered,
                                        }}
                                    />
                                    {
                                        post.acf.live_view ? (
                                            <div className='mt-5 live-view' id={post.acf.live_view}>
                                                <a href={post.acf.live_view} className='btn' target='_blank'>Live view</a>
                                            </div>
                                        ) : (
                                            <>
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* INFO START */}
                </>
            ))}
            {/* MORE CASES START */}
            {postsMore.map((postsMoreData, i) => (
                <>
                    <section key={i} className="spacing-100 d-grid align-items-end border-top">
                        <div className="container-fluid">
                            <div className="row spacing-50 pt-0">
                                <div className="col-xl-10 mx-auto">
                                    <h1 className="title-3 text-uppercase">NEXT CASE</h1>
                                </div>
                            </div>
                            <Case case={postsMoreData.id} type='3' title={postsMoreData.title.rendered} category={postsMoreData.acf.case_type} media={postsMoreData.fimg_url} />
                        </div>
                    </section>
                </>
            ))}
            {/* MORE CASES END */}

        </>
    )
}

export default CaseSingle