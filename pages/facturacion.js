import { BackButton } from '../components/BackButton';
import { Button } from '../components/Button';
import { Layout } from '../components/layouts/Layout'


export default function Facturacion() {
  return (
    <>
      <Layout>
        <p className='text-white text-center max-w-lg mx-5'>
       
        Le solicito sea tan amable de enviarme la siguiente informacion:
        </p>
        <ol className='text-white text-center'>
            <li>1.-Constancia de situacion fiscal </li>
            <li>2.-Correo electronico </li>
            <li>3.-Forma de pago </li>
            <li>4.-Uso de CDFI </li>
            <li>5.-Foto del Ticket</li>
        </ol>
        <p className='text-white text-center max-w-lg mx-5'>
        Favor de enviarnos la informacion completa, de otra manera el proceso de facturacion pudiera prolongarse varios dias.
        Agradeciendo de antemano sus finas atenciones quedamos atentos para elaborar su factura.
        Atentamente 
        Manuel Soto 
        Atención a clientes
        Sabbia Beach Club La Cruz

        </p>
        
        <Button buttonUrl="https://wa.me/+523221589452" buttonText="WhatsApp" targetWindow="_blank"/>


        <BackButton/>

      </Layout>


    </>
  );
}
