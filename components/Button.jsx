import React from 'react'
import Link from 'next/link'

export const Button = ({buttonUrl,buttonText,targetWindow}) => {

  return (
    <Link className='text-white bg-[#fb755f] w-36 text-center text-xl py-2 rounded-full' href={buttonUrl} target={targetWindow}> {buttonText}</Link>
  )
}
