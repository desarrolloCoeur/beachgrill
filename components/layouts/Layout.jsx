import Head from 'next/head'
import Image from 'next/image'

export const Layout = ({children, title}) => {
  return (
    <>
      <Head>
        <title>{title || "Beach Grill by SABBIA"}</title>
        <meta name="author" content="CoeurMkt" />
        <meta name="description" content="Ofrecemos una nueva experiencia gastronómica basada en sabores de la parrilla frente al mar, con un servicio de muy alta calidad, ingredientes premium que te harán sentir en un lugar único." />
        <meta name="keywords" content="beachgrill, sabbia" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Beach Grill by SABBIA" />
        <meta property="og:description" content="Ofrecemos una nueva experiencia gastronómica basada en sabores de la parrilla frente al mar, con un servicio de muy alta calidad, ingredientes premium que te harán sentir en un lugar único." />
        <meta property="og:image" content="/img/beach-grill-google.webp" />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:site_name" content="Beach Grill" />
      </Head>

      <main className="flex h-screen items-center justify-center">
        <div className='flex flex-col items-center justify-center  '>
          <Image
            className='my-5 mx-auto'
            src="/img/logo-beach-grill.webp"
            alt="Beach Grill by SABBIA"
            width={200}
            height={100}
          />
          <div className='flex flex-col gap-5 justify-center items-center pb-5'>
            {children}
          </div>
        </div>
      </main>
    </>

  );
}
