import Image from 'next/image';
import { BackButton } from '../components/BackButton'

import { Layout } from '../components/layouts/Layout'


export default function WiFi() {
  return (
    <>
      <Layout>
        <Image
          src="/img/wifi-sabbia-qrcode.webp"
          alt="QR Code de Wifi"
          width={100}
          height={100}
        />
        <p className='text-white'>
          Red Wifi: SabbiaGuests 
        </p>

        <p className='text-white'>
          Clave : Sabbia123
        </p>

        <BackButton/>
      </Layout>
    </>
  );
}