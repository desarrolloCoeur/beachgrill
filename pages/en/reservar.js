import { BackButtonEn } from '../../components/BackButtonEn';
import { Button } from '../../components/Button';
import { Layout } from '../../components/layouts/Layout'



export default function Reservar() {
  return (
    <>
      <Layout>
        <Button buttonUrl="https://wa.me/+523221589452" buttonText="WhatsApp"/>
        <Button buttonUrl="tel:+523221589452" buttonText="Call Now"/>
        <BackButtonEn/>
      </Layout>
    </>
  );
}
