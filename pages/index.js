import Head from "next/head";
import { useState } from "react";
import   { useRouter } from "next/router";
import Alert from "../components/alert";

export default function Home() {
  const router = useRouter();
  const [estatura, setEstatura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [sexo, setSexo] = useState("hombre");
  const [objetivo, setObjetivo] = useState(false);
  const [view , setView] = useState(false);
  const[path, setPath] = useState("");
  const [path2, setPath2] = useState("");

  const handleChangeEstatura = (e) => {
    setEstatura(e.target.value);
  };

  const handleChangePeso = (e) => {
    setPeso(e.target.value);
  };
  const handleChangeSexo = (e) => {
    setSexo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (sexo && objetivo) {
      case "hombre" && false:
        if (estatura <= 150 && peso <= 44 || estatura >=155 && estatura<=160 && peso <50 || estatura >= 161 && estatura <= 165 && peso < 53 || estatura >= 166 && estatura <= 170 && peso <56 || estatura >= 171 && estatura <= 175 && peso <60 || estatura >= 176 && estatura <= 180 && peso <63 || estatura >= 181 && estatura <= 185 && peso < 67 ||estatura >= 186 && estatura <= 190 && peso <71 ) {
          router.push( {
            pathname: "/subirpeso",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          })

        }
        if (estatura >= 150 && estatura < 155 && peso >= 45 && peso <= 60) {
          router.push({
            pathname: "/mantenerse",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        }
        if (estatura >= 155 && estatura <= 160 && peso >= 50 && peso <= 56) {
          router.push({
            pathname: "/mantenerse",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        }
        if (estatura >= 161 && estatura <= 165 && peso >= 53 && peso <= 60) {
          router.push({
            pathname: "/mantenerse",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        }
        if (estatura >= 166 && estatura <= 170 && peso >= 56 && peso <= 63) {
          router.push({
            pathname: "/mantenerse",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        }
        if (estatura >= 171 && estatura <= 175 && peso >= 60 && peso <= 67) {
          router.push({
            pathname: "/mantenerse",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        }
        if (estatura >= 176 && estatura <= 180 && peso >= 63 && peso <= 71) {
          router.push({
            pathname: "/mantenerse",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        }
        if (estatura >= 181 && estatura <= 185 && peso >= 67 && peso <= 75) {
          router.push({
            pathname: "/mantenerse",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        }
        if (estatura >= 186 && estatura <= 190 && peso >= 71 && peso <= 78) {
          router.push({
            pathname: "/mantenerse",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        }
        if (estatura >= 150 && estatura <= 155 && peso >= 57) {
          setView(true);
          setPath("/sacarmusculo");
          setPath2("/bajarpeso");
        }
        if (estatura >= 155 && estatura <= 160 && peso > 56) {
          setView(true);
          setPath("/sacarmusculo");
          setPath2("/bajarpeso");
        }
        if (estatura >= 161 && estatura <= 155 && peso > 60) {
          setView(true);
          setPath("/sacarmusculo");
          setPath2("/bajarpeso");
        }
        if (estatura >= 166 && estatura <= 170 && peso > 63) {
          setView(true);
          setPath("/sacarmusculo");
          setPath2("/bajarpeso");
        }
        if (estatura >= 171 && estatura <= 175 && peso > 67) {
          setView(true);
          setPath("/sacarmusculo");
          setPath2("/bajarpeso");
        }
        if (estatura >= 176 && estatura <= 180 && peso > 71) {
          setView(true);
          setPath("/sacarmusculo");
          setPath2("/bajarpeso");
        }
        if (estatura >= 181 && estatura <= 185 && peso > 75) {
          setView(true);
          setPath("/sacarmusculo");
          setPath2("/bajarpeso");
        }
        if (estatura >= 186 && estatura <= 190 && peso > 78) {
          setView(true);
          setPath("/sacarmusculo");
          setPath2("/bajarpeso");
        }

        break;
      case "hombre" && true:
        if (estatura <= 150 && peso < 47 || estatura >=155 && estatura<=160 && peso <50 || estatura >= 161 && estatura <= 165 && peso < 53 || estatura >= 166 && estatura <= 170 && peso <56 || estatura >= 171 && estatura <= 175 && peso <60 || estatura >= 176 && estatura <= 180 && peso <63 || estatura >= 181 && estatura <= 185 && peso < 67 ||estatura >= 186 && estatura <= 190 && peso <71 ) {
          router.push( {
            pathname: "/subirpeso",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          })
        
        }
        if(estatura >= 150 && estatura <= 155 && peso > 60 || estatura >= 155 && estatura <= 160 && peso > 56 || estatura >= 161 && estatura <= 165 &&  peso > 60 || estatura >= 166 && estatura <= 170 && peso > 63 || estatura >= 171 && estatura <= 175 && peso > 67 ||estatura >= 176 && estatura <= 180 && peso > 71 || estatura >= 180 && estatura <= 185 && peso > 75 || estatura >= 186 && estatura <= 190 && peso >78){
          setView(true);
          setPath("/sacarmusculo");
          setPath2("/bajarpeso");
        }
        if (estatura >= 150 && estatura <= 155 && peso >= 47 && peso < 60) {
          router.push({
            pathname: "/sacarmusculo",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        }
        if (estatura >= 155 && estatura <= 160 && peso >= 50 && peso <= 56) {
          router.push({
            pathname: "/sacarmusculo",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        }
        if (estatura >= 161 && estatura <= 165 && peso >= 53 && peso <= 60) {
          router.push({
            pathname: "/sacarmusculo",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        }
        if (estatura >= 166 && estatura <= 170 && peso >= 56 && peso <= 63) {
          router.push({
            pathname: "/sacarmusculo",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        }
        if (estatura >= 171 && estatura <= 175 && peso >= 60 && peso <= 67) {
          router.push({
            pathname: "/sacarmusculo",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        }
        if (estatura >= 176 && estatura <= 180 && peso >= 63 && peso <= 71) {
          router.push({
            pathname: "/sacarmusculo",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        }
        if (estatura >= 180 && estatura <= 185 && peso >= 67 && peso <= 75) {
          router.push({
            pathname: "/sacarmusculo",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        }
        if (estatura >= 186 && estatura <= 190 && peso >= 71 && peso <= 78) {
          router.push({
            pathname: "/sacarmusculo",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        } 
        break;
      case "mujer" && false:
        if (estatura == 0 || peso == 0) {
          alert("Por favor ingrese todos los datos");
        }
        if (estatura>=150 && estatura <= 155 && peso <= 44 ||estatura >= 144 && estatura <= 150 && peso < 49 ||estatura >= 150 && estatura <= 155 && peso < 51||estatura >= 156 && estatura <= 160 && peso <54 ||estatura >= 161 && estatura <= 165 && peso < 56 || estatura >= 166 && estatura <= 170 && peso < 59 || estatura >= 171 && estatura <= 175 && peso <62 ||estatura >= 176 && estatura <= 180 && peso < 60) {
          router.push( {
            pathname: "/subirpeso",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          })
          
        }
        
        if (estatura >= 144 && estatura <= 150 && peso >= 49 && peso <= 56) {
          router.push({
            pathname: "/mantenerse",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        }
        if (estatura >= 150 && estatura <= 155 && peso >= 45 && peso <= 57) {
          router.push({
            pathname: "/mantenerse",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        }
        if (estatura >= 150 && estatura <= 155 && peso >= 51 && peso <= 59) {
          router.push({
            pathname: "/mantenerse",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        }
        if (estatura >= 156 && estatura <= 160 && peso >= 54 && peso <= 61) {
          router.push({
            pathname: "/mantenerse",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        }
        if (estatura >= 161 && estatura <= 165 && peso >= 56 && peso <= 64) {
          router.push({
            pathname: "/mantenerse",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        }
        if (estatura >= 166 && estatura <= 170 && peso >= 59 && peso <= 67) {
          router.push({
            pathname: "/mantenerse",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        }
        if (estatura >= 171 && estatura <= 175 && peso >= 62 && peso <= 70) {
          router.push({
            pathname: "/mantenerse",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        }
        if (estatura >= 176 && estatura <= 180 && peso >= 60 && peso <= 72) {
          router.push({
            pathname: "/mantenerse",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        }

        if (estatura >= 144 && estatura <= 150 && peso > 57) {
          setView(true);
          setPath("/sacarmusculo");
          setPath2("/bajarpeso");

        }
        if (estatura >= 150 && estatura <= 155 && peso > 59) {
          setView(true);
          setPath("/sacarmusculo");
          setPath2("/bajarpeso");
        }
        if (estatura >= 156 && estatura <= 160 && peso > 61) {
          setView(true);
          setPath("/sacarmusculo");
          setPath2("/bajarpeso");
        }
        if (estatura >= 161 && estatura <= 165 && peso > 64) {
          setView(true);
          setPath("/sacarmusculo");
          setPath2("/bajarpeso");
        }
        if (estatura >= 166 && estatura <= 170 && peso > 67) {
          setView(true);
          setPath("/sacarmusculo");
          setPath2("/bajarpeso");
        }
        if (estatura >= 171 && estatura <= 175 && peso > 70) {
          setView(true);
          setPath("/sacarmusculo");
          setPath2("/bajarpeso");
        }
        if (estatura >= 176 && estatura <= 180 && peso > 72) {
          setView(true);
          setPath("/sacarmusculo");
          setPath2("/bajarpeso");
        }

        break;
      case "mujer" && true:
        if (estatura <= 150 && peso < 47 ||estatura >= 144 && estatura <= 150 && peso < 49 ||estatura >= 150 && estatura <= 155 && peso < 51||estatura >= 156 && estatura <= 160 && peso <54 ||estatura >= 161 && estatura <= 165 && peso < 56 || estatura >= 166 && estatura <= 170 && peso < 59 || estatura >= 171 && estatura <= 175 && peso <62 ||estatura >= 176 && estatura <= 180 && peso < 60) {
          router.push( {
            pathname: "/subirpeso",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          })
          
        }
        if(estatura >= 144 && estatura <= 150 && peso >56 || estatura >= 150 && estatura <= 155 && peso >57 ||estatura >= 150 && estatura <= 155 && peso >59 || estatura >= 156 && estatura <= 160 && peso >61 || estatura >= 161 && estatura <= 165 && peso >64 || estatura >= 166 && estatura <= 170 && peso >67 || estatura >= 171 && estatura <= 175 && peso >70 || estatura >= 176 && estatura <= 180 && peso >72){
            setView(true)
            setPath("/sacarmusculo");
            setPath2("/bajarpeso");
        }

        if (estatura >= 144 && estatura <= 150 && peso >= 49 && peso <= 56 ) {
          router.push({
            pathname: "/sacarmusculo",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        }
        if (estatura >= 150 && estatura <= 155 && peso >= 47 && peso <= 57) {
          router.push({
            pathname: "/sacarmusculo",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        }
        if (estatura >= 150 && estatura <= 155 && peso >= 51 && peso <= 59) {
          router.push({
            pathname: "/sacarmusculo",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        }

        if (estatura >= 156 && estatura <= 160 && peso >= 54 && peso <= 61) {
          router.push({
            pathname: "/sacarmusculo",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        }
        if (estatura >= 161 && estatura <= 165 && peso >= 56 && peso <= 64) {
          router.push({
            pathname: "/sacarmusculo",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        }
        if (estatura >= 166 && estatura <= 170 && peso >= 59 && peso <= 67) {
          router.push({
            pathname: "/sacarmusculo",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        }
        if (estatura >= 171 && estatura <= 175 && peso >= 62 && peso <= 70) {
          router.push({
            pathname: "/sacarmusculo",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        }
        if (estatura >= 176 && estatura <= 180 && peso >= 60 && peso <= 72) {
          router.push({
            pathname: "/sacarmusculo",
            query: {
              peso: peso,
              estatura: estatura,
              sexo: sexo,
              objetivo: objetivo,
            },
          });
        } 
        break;
    }
  };

  return (
    <div>
      <Head>
        <title>Practica 12</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     
      <main className="flex flex-col justify-center min-h-screen items-center bg-white">
      {view && <Alert peso={peso} estatura={estatura} objetivo={objetivo}  sexo={sexo} path={path} path2={path2} />}
        <div className=" md:w-3/5 md:h-4/5">
          <h1 className="text-4xl font-bold text-center p-8 md:text-5xl">
            {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
              {" "}
              SISTEMA EXPERTO{" "}
            </span>{" "}
            Entrenador gimnasio
          </h1>
          <form action="#" onSubmit={handleSubmit} className="">
            <div className="flex flex-col items-center ">
              <label className="text-2xl font-semibold text-center p-2">
                Estatura (cm)
              </label>
              <input
                className="border-2  w-3/5 h-10 px-4 rounded"
                onChange={handleChangeEstatura}
                type="number"
                name="estatura"
                id="estatura"
                placeholder="180"
                required
              />
              <label className="text-2xl font-semibold text-center p-2">
                Peso (kg)
              </label>
              <input
                className="border-2  w-3/5 h-10 rounded px-4 "
                onChange={handleChangePeso}
                type="number"
                name="peso"
                id="peso"
                placeholder="80"
                required
              />
              <label className="text-2xl font-semibold text-center p-2">
                Sexo
              </label>
              <select
                onChange={handleChangeSexo}
                defaultValue={sexo}
                className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline w-3/5 h-10"
                name="sexo"
                id="sexo"
              >
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
              </select>
              <label className="text-2xl font-semibold text-center p-4">
                Tonificar 
              </label>

              <label className="inline-flex relative items-center mr-5 cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only peer"
                  checked={objetivo}
                  readOnly
                />
                <div
                  onClick={() => {
                    setObjetivo(!objetivo);
                  }}
                  className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"
                ></div>
              </label>
            </div>
            <div className="flex justify-center p-2">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-10 rounded mt-5"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
       
      </main>
    </div>
  );
}
