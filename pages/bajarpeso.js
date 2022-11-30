import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import ButtonBack from "../components/buttonback";

export default function Bajarpeso() {
    const router = useRouter();
    const {peso,estatura,sexo,objetivo} = router.query;
    if (sexo=="hombre") {
      return(
        <div>
        <Head>
        <title>Bajar</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex justify-center min-h-screen items-center bg-white md:flex-row flex-col">
    
      <div className="text-center">

      <h1 className="text-4xl font-bold text-center p-6 md:text-4xl "> <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500'> Sistema Experto </span> entrenador gimnasio
     </h1>
     <span className="font-bebas-neue text-6xl text-yellow-400">BAJAR PESO</span>
     <span className=" font-bebas-neue"> {peso} KG</span>
     <h2 className=" font-bebas-neue text-3xl"> {sexo}</h2>
     <ButtonBack/>
      </div>
  <div className="w-full">
  <div  className="flex flex-col">
  <div  className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div  className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div  className="overflow-hidden">
        <table  className="min-w-full">
          <thead  className="border-b">
            <tr>
              <th scope="col"  className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Parte del cuerpo 
              </th>
              <th scope="col"  className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Ejercicio
              </th>
              <th scope="col"  className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Serie
              </th>
              <th scope="col"  className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Repeticiones
              </th>
            </tr>
          </thead>
          <tbody>
            <tr  className="border-b">
              <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Quadriceps/Gluteos</td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Leg Press (Prensa)
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                4
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                7
              </td>
              
            </tr>
            <tr  className="bg-white border-b">
              <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Biceps Femoral</td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Maquina de biceps Femoral
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                4
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 7
              </td>
            </tr>
            <tr  className="bg-white border-b">
              <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"> Espalda superior</td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               Remo con cable sentado
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 4
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 7
              </td>
            </tr>
            <tr  className="bg-white border-b">
              <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Pecho</td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               Pecho en banco plano
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 4
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 7
              </td>
            </tr>
            <tr  className="bg-white border-b">
              <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Hombros</td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Hombro con mancuernas
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 4
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 7
              </td>
            </tr>
            <tr  className="bg-white border-b">
              <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Trapecios</td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               Encogimiento con mancuerna
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 4
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 7
              </td>
            </tr>
            <tr  className="bg-white border-b">
              <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Triceps</td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               Triceps con cable (Pushdown)
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 4
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 7
              </td>
            </tr>
            <tr  className="bg-white border-b">
              <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Biceps</td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               Biceps con barra
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 4
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 7
              </td>
            </tr>
            <tr  className="bg-white border-b">
              <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Espalda baja</td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Extensiones de espalda
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 4
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 7
              </td>
            </tr>
            <tr  className="bg-white border-b">
              <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Pantorrilla</td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               Pantorrillas parado
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 4
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 7
              </td>
            </tr>
            <tr  className="bg-white border-b">
              <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Ante brazo</td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               Encogimiento de muñeca con barra
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 4
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 7
              </td>
            </tr>
            <tr  className="bg-white border-b">
              <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Abdominales</td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                Encogimientos
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 4
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 7
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  </div>

            </main>
        </div>
      )
    }else{
      return(
        <div>
        <Head>
        <title>Mantenerse</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <main className="flex justify-center min-h-screen items-center bg-white md:flex-row flex-col">
        
      <div className="text-center">
      <h1 className="text-4xl font-bold text-center p-6 md:text-4xl "> <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500'> Sistema Experto </span> entrenador gimnasio
     </h1>
     <span className="font-bebas-neue text-6xl text-yellow-400">BAJAR PESO</span>
     <span className=" font-bebas-neue"> {peso} KG</span>
     <h2 className=" font-bebas-neue text-3xl"> {sexo}</h2>
     <ButtonBack/>

      </div>
  <div className="w-full">
  <div  className="flex flex-col">
  <div  className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div  className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div  className="overflow-hidden">
        <table  className="min-w-full">
          <thead  className="border-b">
            <tr>
              <th scope="col"  className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Parte del cuerpo 
              </th>
              <th scope="col"  className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Ejercicio
              </th>
              <th scope="col"  className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Serie
              </th>
              <th scope="col"  className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Repeticiones
              </th>
            </tr>
          </thead>
          <tbody>

 
            <tr  className="bg-white border-b">
              <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"> Espalda superior</td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               Remo con cable sentado
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 4
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 7
              </td>
            </tr>
            <tr  className="bg-white border-b">
              <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Pecho</td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               Pecho en banco plano
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 8
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 5
              </td>
            </tr>
            <tr  className="bg-white border-b">
              <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Hombros</td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Hombro con mancuernas
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 5
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 8
              </td>
            </tr>
            <tr  className="bg-white border-b">
              <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Trapecios</td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               Encogimiento con mancuerna
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 5
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 8
              </td>
            </tr>
            <tr  className="bg-white border-b">
              <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Triceps</td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               Triceps con cable (Pushdown)
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 5
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 8
              </td>
            </tr>
            <tr  className="bg-white border-b">
              <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Biceps</td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               Biceps con barra
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 5
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 8
              </td>
            </tr>

            <tr  className="bg-white border-b">
              <td  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Pantorrilla</td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               Pantorrillas parado
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 4
              </td>
              <td  className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 7
              </td>
            </tr>


          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  </div>

            </main>
            
        </div>
      )
    }
    }