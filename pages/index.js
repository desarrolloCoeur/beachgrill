import { Button } from '../components/Button'
import { Layout } from '../components/layouts/Layout'


export default function Home() {
  return (
    <>
      <Layout>
        <Button buttonUrl="#" buttonText="Alimentos" />
        <Button buttonUrl="#" buttonText="Bebidas" />
        <Button buttonUrl="/wifi" buttonText="Wifi" />
        <Button buttonUrl="#" buttonText="Facturacion" />
        <Button buttonUrl="#" buttonText="Feedback" />
        <Button buttonUrl="#" buttonText="Reservar" />
      </Layout>
    </>
  );
}
