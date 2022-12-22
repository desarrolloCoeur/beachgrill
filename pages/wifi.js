import { Button } from '../components/Button'
import { Layout } from '../components/layouts/Layout'


export default function Home() {
  return (
    <>
      <Layout>
        <p className='text-white'>
            WIFI
        </p>
        <Button buttonText="Menu Principal" buttonUrl="/"/>
      </Layout>
    </>
  );
}