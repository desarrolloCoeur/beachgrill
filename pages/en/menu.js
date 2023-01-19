import { Button } from '../../components/Button';
import { Layout } from '../../components/layouts/Layout'


export default function MenuEn() {
  return (
    <>
      <Layout>
        <Button buttonUrl="/assets/menu-beach-grill-en.pdf" buttonText="Food" targetWindow="_blank"/>
        <Button buttonUrl="/assets/menu-bebidas-beach-grill.pdf" buttonText="Beverages" targetWindow="_blank"/>
        <Button buttonUrl="/assets/menu-cocteleria-beach-grill.pdf" buttonText="Cocktail" targetWindow="_blank"/>
        <Button buttonUrl="/en/wifi" buttonText="WiFi"/>
        <Button buttonUrl="/en/facturacion" buttonText="Billing"/>
        <Button buttonUrl="https://docs.google.com/forms/d/e/1FAIpQLScewlS5idETo_hjfiWXAptv6CK5UMNSfJtJmGrBRvr_ayI7Jg/viewform" buttonText="Feedback" targetWindow="_blank"/>
        <Button buttonUrl="/en/reservar" buttonText="Book Now"/>
      </Layout>


    </>
  );
}
