
"use client";
import React from 'react'
import Case from '../components/Case'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link'



const CaseStudies = () => {

  const [postPerPage, setPostPerPage] = useState(4)

  const apiUrl = 'https://iamjaseer.in/portfolio_jaseer/wp-json/wp/v2/'
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isActive, setActive] = React.useState(false);



  useEffect(() => {
    let api = apiUrl + 'case_studies?per_page=100&order=asc'
    setLoading(true)
    axios.get(api)
      .then(res => {
        //console.log(res)
        setPosts(res.data)
        setLoading(false)
        //console.log(api)
      })
  }, [setPosts])


  const updateAll = () => {

    let api = apiUrl + 'case_studies?per_page=100'
    setLoading(true)
    axios.get(api)
      .then(res => {
        //console.log(res)
        setPosts(res.data)
        setLoading(false)
        // //console.log(api)
      })


  }

  const update = (e) => {


    let api = apiUrl + 'case_studies?per_page=100&case_type=' + e.currentTarget.getAttribute('data-item')
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
      {/* HERO START */}
      <section className="spacing-100 pb-0  align-items">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 mx-auto">
              <h1 className="title-3">SELECTED CASES</h1>
              <div className="col-xl-6 mx-auto">
              <p>Here are a few past client projects and other professional works. I've worked on.</p>
            </div>
            </div>
          </div>
        </div>
      </section>
      {/* HERO END */}
      {/* FILTER START */}
      {/* <section className="spacing-50 pt-0 d-grid align-items-end mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12 d-flex align-items-center justify-content-center">
              <div className='filter-items d-sm-flex d-none'>
                <Link href={'/cases/#cases'} className='btn' onClick={updateAll}>All</Link>
                <Link href={'/cases/#cases'} className='btn' data-item={'CMS'} onClick={update}>CMS</Link>
                <Link href={'/cases/#cases'} className='btn' data-item={'UX/UI'} onClick={update}>UX/UI</Link>
                <Link href={'/cases/#cases'} className='btn' data-item={'Web design'} onClick={update} >Web design</Link>
              </div>
              <div className="dropdown w-100 d-sm-none" onClick={() => setActive(!isActive)}>
                <button className='btn dropdown-toggle w-100' data-bs-toggle="dropdown" aria-expanded="false" onClick={updateAll}>All</button>
                <ul className={`dropdown-menu ${isActive ? "dropdown-menu show" : ""}`}>
                  <li><Link href={'/cases/#cases'} className='dropdown-item' data-item={'CMS'} onClick={update}>CMS</Link></li>
                  <li><Link href={'/cases/#cases'} className='dropdown-item' data-item={'UX/UI'} onClick={update}>UX/UI</Link></li>
                  <li><Link href={'/cases/#cases'} className='dropdown-item' data-item={'Web design'} onClick={update} >Web design</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* FILTER END */}
      {/* CASES START */}
      <section className="spacing-100 d-grid align-items- mt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className='case-section d-grid' id='cases'>
                <ul className='list-unstyled cases-inner'>
                  {posts.map((post, i) => (
                    <li key={i}>
                      <Case case={post.id} type='2' link={post.acf.link} title={post.title.rendered} category={post.acf.case_type} media={post.fimg_url} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CASES END */}
    </>
  )
}

export default CaseStudies

