
"use client";
import React from 'react'
import Case from './Case'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



const HomeCases = () => {

    const [postPerPage, setPostPerPage] = useState(4)

    const apiUrl = 'https://iamjaseer.in/portfolio_jaseer/wp-json/wp/v2/'
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    let api = apiUrl + `case_studies?per_page=${postPerPage}&order=asc`;


function paginationHandler(){
   
}



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
            <section className='cases spacing-150 pb-0'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                        <h2 class="title-7 text-uppercase text-md-start text-center">Case studies —</h2>
                        <ul className="text-center works-wrpr list-unstyled">
                
                   
                {posts.map((post, i) => (
                        <li key={i} className='item'>
                            <Case case={post.id} type='1' title={post.title.rendered} link={post.acf.link} category={post.acf.type} media={post.fimg_url} />
                           </li> 
                    ))}
                    
                </ul>
                       
                        </div>
                    </div>
                </div>
              
                <div className="container-fluid mt-sm-4">
                    <div className="row">
                        <div className="col-xl-12 text-center">
                        <button onClick={paginationHandler} class="btn btn-view-more mx-auto">View More works</button>
                        </div>
                    </div>
                </div>
             </section>
        </>
    )
}

export default HomeCases

