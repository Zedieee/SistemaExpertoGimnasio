import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ButtonBack from "../components/buttonback";
export default function SubirPeso() {
  const router = useRouter();
  const { peso, estatura, sexo, objetivo } = router.query;
  const pesoIdeal = (estatura - 100 - (estatura - 150) / 3).toPrecision(2);
  return (
    <div>
      <Head>
        <title>Tonificar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center min-h-screen items-center bg-white  flex-col gap-8">
        <div className="text-center">
          <h1 className="md:text-4xl text-xl font-bold text-gray-900">
            Por su salud y seguridad, <span className="">no podemos</span> dar una rutina con tu peso
            actual
          </h1>
          <p className="md:text-2xl text-lg font-light text-gray-900 p-4">
            muchas gracias por tu comprensión
          </p>
          <p>
            tu estatura es de{" "}
            <span className="font-bebas-neue text-6xl text-red-400">
              {estatura}
            </span>
            <span className=" font-bebas-neue"> cm </span> y tu peso es de{" "}
            <span className="font-bebas-neue text-6xl text-yellow-400">
              {peso}
            </span>{" "}
            <span className=" font-bebas-neue"> KG</span>
          </p>
          <p className="">
            tu peso ideal es de{" "}
            <span className="font-bebas-neue text-6xl text-yellow-400">
              {pesoIdeal}
            </span>{" "}
            <span className=" font-bebas-neue"> KG</span>
          </p>
        
        </div>
        <ButtonBack />
      </main>

    </div>
  );
}
