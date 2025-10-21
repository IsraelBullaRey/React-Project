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
        setIndex(index+1);
    }

    function atras() {
        setIndex(index==1 ? 1 : index-1);
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
            max="10"
            className="border text-xl bg-white mt-2 mx-10 rounded-lg"
            onChange={(e) => {
            setIndex(e === "" ? 1 : parseInt(e.target.value, 10));
            }}
        />
        <div className="flex flex-col items-center justify-center">
            <button className="m-2 py-5 bg-indigo-300 rounded-lg hover:bg-indigo-400 hover:shadow-lg text-lg font-bold text-white w-40" onClick={atras}>
                ⬅️ Atrás
            </button>
            <button className="m-2 py-5 bg-indigo-300 rounded-lg hover:bg-indigo-400 hover:shadow-lg text-lg font-bold text-white w-40" onClick={adelante}>
                Adelante ➡️
            </button>
        </div>
        
        <hr />
        <Character url={`${API_BASE_URL}/characters/${index}`}></Character>
        </div>
    );
}