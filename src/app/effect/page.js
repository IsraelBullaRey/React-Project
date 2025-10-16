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
        <div className="flex flex-col gap-4">
        <input
            type="number"
            min="1"
            max="10"
            className="border text-xl"
            onChange={(e) => {
            setIndex(e === "" ? 1 : parseInt(e.target.value, 10));
            }}
        />
        <button onClick={atras}>
            ⬅️ Atrás
        </button>
        <button onClick={adelante}>
            Adelante ➡️
        </button>
        <hr />
        <Character url={`${API_BASE_URL}/characters/${index}`}></Character>
        </div>
    );
}