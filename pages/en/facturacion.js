import { BackButtonEn } from '../../components/BackButtonEn';
import { Button } from '../../components/Button';
import { Layout } from '../../components/layouts/Layout'


export default function Facturacion() {
  return (
    <>
      <Layout>
        <p className='text-white text-center max-w-lg mx-5'>
          I request you to be so kind as to send me the following information:
        </p>
        <ol className='text-white text-center'>
            <li>1.-Proof of tax situation </li>
            <li>2.-Email </li>
            <li>3.-Payment method </li>
            <li>4.-Use of CDFI </li>
            <li>5.-Photo of the Ticket</li>
        </ol>
        <p className='text-white text-center max-w-lg mx-5'>
        Please send us the complete information, otherwise the billing process could take several days.
        Thanking you in advance for your fine attentions, we remain attentive to prepare your invoice.
        </p>
        
        <p  className='text-white text-center max-w-lg mx-5'> 
          Sincerely <br></br>

          Manuel Soto <br></br>

          Customer Service <br></br>

          Sabbia Beach Club La Cruz  <br></br>
        </p>
        <Button buttonUrl="https://wa.me/+523221589452" buttonText="WhatsApp" targetWindow="_blank"/>


        <BackButtonEn/>

      </Layout>


    </>
  );
}
