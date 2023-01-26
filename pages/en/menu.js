import { Button } from '../../components/Button';
import { Layout } from '../../components/layouts/Layout'


export default function MenuEn() {
  return (
    <>
      <Layout>
        <Button buttonUrl="/assets/menu-beach-grill-en.pdf" buttonText="MENU" targetWindow="_blank"/>
        <Button buttonUrl="/assets/menu-bebidas-beach-grill.pdf" buttonText="WINE LIST" targetWindow="_blank"/>
        <Button buttonUrl="/assets/menu-cocteleria-beach-grill.pdf" buttonText="COCKTAILS" targetWindow="_blank"/>
        <Button buttonUrl="/en/wifi" buttonText="WIFI"/>
        <Button buttonUrl="/en/facturacion" buttonText="INVOICE"/>
        <Button buttonUrl="https://docs.google.com/forms/d/e/1FAIpQLScewlS5idETo_hjfiWXAptv6CK5UMNSfJtJmGrBRvr_ayI7Jg/viewform" buttonText="FEEDBACK" targetWindow="_blank"/>
        <Button buttonUrl="/en/reservar" buttonText="RESERVATIONS"/>
      </Layout>


    </>
  );
}
