import { Button } from '../components/Button';
import { Layout } from '../components/layouts/Layout'


export default function Menu() {
  return (
    <>
      <Layout>
        <Button buttonUrl="/assets/menu-beach-grill.pdf" buttonText="Alimentos" targetWindow="_blank"/>
        <Button buttonUrl="/assets/menu-bebidas-beach-grill.pdf" buttonText="Bebidas" targetWindow="_blank"/>
        <Button buttonUrl="/assets/menu-cocteleria-beach-grill.pdf" buttonText="Coctelería" targetWindow="_blank"/>
        <Button buttonUrl="/wifi" buttonText="WiFi"/>
        <Button buttonUrl="/facturacion" buttonText="Facturacion"/>
        <Button buttonUrl="https://docs.google.com/forms/d/e/1FAIpQLScewlS5idETo_hjfiWXAptv6CK5UMNSfJtJmGrBRvr_ayI7Jg/viewform" buttonText="Feedback" targetWindow="_blank"/>
        <Button buttonUrl="/reservar" buttonText="Reservar"/>
      </Layout>


    </>
  );
}
