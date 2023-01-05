import { Button } from '../components/Button';
import { Layout } from '../components/layouts/Layout'


export default function Home() {
  return (
    <>
      <Layout>
        <Button buttonUrl="/assets/menu-beach-grill.pdf" buttonText="Alimentos" targetWindow="_blank"/>
        <Button buttonUrl="/assets/menu-bebidas-beach-grill.pdf" buttonText="Bebidas" targetWindow="_blank"/>
        <Button buttonUrl="/assets/menu-cocteleria-beach-grill.pdf" buttonText="Coctelería" targetWindow="_blank"/>
        <Button buttonUrl="/wifi" buttonText="WiFi"/>
        <Button buttonUrl="/" buttonText="Facturacion"/>
        <Button buttonUrl="/" buttonText="Feedback"/>
        <Button buttonUrl="/" buttonText="Reservar"/>
      </Layout>


    </>
  );
}
