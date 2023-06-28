"use client";
import React from 'react'
import Link from 'next/link'


function Case(props) {

    if (props.type == '1') {
        return (
            <>
                <div className='case d-grid w-100'>
                    <Link href={{ pathname: '/case-single', query: { case_id: props.case } }}>
                        <div className='heading d-sm-flex align-items-end justify-content-between'>
                            <h3 className='title title-5 font-weight-400 text-uppercase'>{props.title}</h3>
                            <p className='text-muted cat'>{props.category}</p>
                        </div>
                        <div className='media-wrpr position-relative'>
                            <img src={props.media} className='d-block w-100' alt={props.title} />
                        </div>
                    </Link>
                </div>
            </>
        )

    } else if (props.type == '2') {
        return (
            <>

                <div className='case d-grid w-100' data-case={props.category}>
                    <Link href={{ pathname: '/case-single', query: { case_id: props.case } }}>
                        <div className='media-wrpr position-relative'>
                            <img src={props.media} className='d-block w-100' alt={props.title} />
                        </div>
                        <div className='heading d-sm-flex align-items-end justify-content-between'>
                            <p className='mb-0 mt-2'>{props.title}</p>
                        </div>
                    </Link>
                </div>

            </>
        )
    }
    else {
        return (
            <>
                <div className="row mt-sm-5" data-case={props.category}>
                    <div className='col-xl-10 mx-auto'>
                        <Link href={{ pathname: '/case-single', query: { case_id: props.case } }}>
                            <div className='row'>
                                <div className="col-xl-4 offset-xl-2">
                                    <h1 className="title-6 text-uppercase me-xl-3">{props.title}</h1>
                                </div>
                                <div className="col-xl-6 mt-3 mt-xl-0">
                                    <div className='media-wrpr position-relative'>
                                        <img src={props.media} className='d-block w-100' alt={props.title} />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}

export default Case