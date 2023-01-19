import { Layout } from "../components/layouts/Layout";
import Image from "next/image";
import Link from "next/link";

export default function Home(){
    return(
        <>
            <Layout>
                <h1 className="text-white text-xl uppercase"> IDIOMA/LANGUAGE </h1>
                <div className="flex w-full justify-around">
                    <div>
                        <Link href="/menu">
                        
                            <Image
                                src="/img/mexico.svg"
                                alt="QR Code de Wifi"
                                width={60}
                                height={80}
                            />
                        </Link>
                    </div>
                    <div>
                        <Link href="/en/menu">
                            <Image
                                src="/img/estados-unidos.svg"
                                alt="QR Code de Wifi"
                                width={65}
                                height={80}
                            />   
                        </Link>

                    </div>
                </div>
            </Layout>
        </>

    );
}