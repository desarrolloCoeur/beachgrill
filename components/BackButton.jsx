import Image from 'next/image';
import Link from 'next/link'


export const BackButton = () => {

  return (
    <Link className='text-white bg-[#fb755f] text-center text-xl py-2 rounded-full w-10 h-10' href="/" > 
      <Image
        src='/img/back.png'
        alt="Back Arrow"
        width={25}
        height={25}
        className="mx-auto"
      />
    
    </Link>
  )

}
