import Image from 'next/image';
import { BackButtonEn } from '../../components/BackButtonEn';

import { Layout } from '../../components/layouts/Layout'


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
          Wifi : SabbiaGuests 
        </p>

        <p className='text-white'>
          Password: Sabbia123
        </p>

        <BackButtonEn/>
      </Layout>
    </>
  );
}