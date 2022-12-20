import React from 'react'
import Link from 'next/link'


export const Button = ({buttonUrl,buttonText}) => {
  return (
    <Link className='text-white' href={buttonUrl}>{buttonText}</Link>
  )
}
