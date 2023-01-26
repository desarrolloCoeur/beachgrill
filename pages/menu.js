import { Button } from '../components/Button';
import { Layout } from '../components/layouts/Layout'


export default function Menu() {
  return (
    <>
      <Layout>
        <Button buttonUrl="/assets/menu-beach-grill.pdf" buttonText="MENU" targetWindow="_blank"/>
        <Button buttonUrl="/assets/menu-bebidas-beach-grill.pdf" buttonText="VINOS" targetWindow="_blank"/>
        <Button buttonUrl="/assets/menu-cocteleria-beach-grill.pdf" buttonText="COCTELERIA" targetWindow="_blank"/>
        <Button buttonUrl="/wifi" buttonText="WIFI"/>
        <Button buttonUrl="/facturacion" buttonText="FACTURACION"/>
        <Button buttonUrl="https://docs.google.com/forms/d/e/1FAIpQLScewlS5idETo_hjfiWXAptv6CK5UMNSfJtJmGrBRvr_ayI7Jg/viewform" buttonText="FEEDBACK" targetWindow="_blank"/>
        <Button buttonUrl="/reservar" buttonText="RESERVAR"/>
      </Layout>


    </>
  );
}
