import React from 'react'
import Link from 'next/link'

const Brand = () => {
  return (
    <Link href="/">
      <p className='brand'>iamjaseer</p>
        {/* <img src="/static/images/brand.svg" className='d-block brand' alt='Jaseer ali'/> */}
    </Link>
  )
}

export default Brand