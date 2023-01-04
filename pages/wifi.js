import { Button } from '../components/Button'
import { Layout } from '../components/layouts/Layout'


export default function Home() {
  return (
    <>
      <Layout>

        <p className='text-white'>
          Red Wifi: SabbiaGuests 
        </p>

        <p className='text-white'>
          Clave : Sabbia123
        </p>

        <Button buttonText="Back" buttonUrl="/"/>
      </Layout>
    </>
  );
}