import Head from 'next/head'
import Image from 'next/image'

export const Layout = ({children, title}) => {
  return (
    <>
      <Head>
        <title>{title || "Beach Grill by SABBIA"}</title>
        <meta name="author" content="CoeurMkt" />
        <meta name="description" content="" />
        <meta name="keywords" content="beachgrill, sabbia" />
      </Head>

      <main className="bg-[#1d1d1b]  ">
        <div className="flex flex-col items-center h-screen">
          <Image
            className=' mt-5'
            src="/img/logo-beach-grill.webp"
            alt="Beach Grill by SABBIA"
            width={200}
            height={100}
          />
          <div className='flex flex-col gap-5 justify-center items-center  h-full'>
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
