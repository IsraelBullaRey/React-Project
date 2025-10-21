"use client";

import { useEffect, useState } from "react";
import Character from "../components/character";

const API_BASE_URL = "https://thesimpsonsapi.com/api";

export default function SimpsonsPage() {
    const [index, setIndex] = useState(1);
    //   const listOfUrls = [];

    //   for (let i = 1; i <= 100; i++) {
    //     listOfUrls.push();
    //   }

    function adelante() {
        setIndex(index==1182 ? 1 : index+1);
    }

    function atras() {
        setIndex(index==1 ? 1182 : index-1);
    }

    return (
        <div className="flex flex-col gap-4 justify-center bg-indigo-100 h-screen">
        <div className="bg-indigo-300 text-3xl font-bold text-center mt-7 text-white">
            Simpsons API
        </div>
        <div className="text-center">
            Ingresa el número correspondiente al personaje que deseas buscar o usa las flechas para moverte.
        </div>
        <input
            type="number"
            min="1"
            max="1182"
            className="border text-xl bg-white mt-2 mx-10 rounded-lg"
            value={index} //convierte al <input> en un componente controlado
            onChange={(e) => {
                const val = parseInt(e.target.value, 10);
                if(isNaN(val)) { //Si está vacío (no es número) lo posiciona a 1
                    setIndex(1);
                }else{
                    //Si no está vacío entonces lo limita entre 1 y 1182
                    //que es la cantidad maxima de personajes.
                    const limite = Math.min(1182, Math.max(1, val)); 
                    //Math.max garantiza que el valor nunca sea menor que 1, si val es -10, el mayor entre -10 y 1 es 1.
                    //Math.min garantiza que el valor no exceda de 1182, si val es 2000, math.max lo deja en 2000 ya que es mayor a 1
                    //Más en el Math.min se seleccionará 1182 ya que es el minimo entre 2000 y 1182.
                    setIndex(limite);
                }
            }}
        />
        <div className="flex flex-col items-center justify-center">
            <button className="m-2 py-5 bg-indigo-300 rounded-lg hover:bg-indigo-400 hover:shadow-lg text-lg font-bold text-white w-40" 
                    onClick={atras}>
                ⬅️ Atrás
            </button>
            <button className="m-2 py-5 bg-indigo-300 rounded-lg hover:bg-indigo-400 hover:shadow-lg text-lg font-bold text-white w-40" 
                    onClick={adelante}>
                Adelante ➡️
            </button>
        </div>
        
        <hr />
        <Character url={`${API_BASE_URL}/characters/${index}`}></Character>
        </div>
    );
}