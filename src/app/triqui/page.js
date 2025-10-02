'use client'

import { useState } from 'react';
import './globals.css';

function Square({ value, onSquareClick }) {
    return (
        <button class="border-4 border-indigo-400 bg-indigo-600 h-20 w-20 text-center" onClick={onSquareClick}>
            {value}
        </button>
    );
}

function Board({ xIsNext, squares, onPlay }) {
    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) {
        return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = '✖️';
        } else {
            nextSquares[i] = '⭕';
        }
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = '✨Ganador✨: ' + winner;
    } else if (!winner && !squares.includes(null)) {
        status = '🥀Empate🥀';
    } else {
        status = 'Siguiente jugador: ' + (xIsNext ? '✖️' : '⭕');
    }

    return (
        <>
        <div class="bg-indigo-400 rounded-lg m-5 p-5 flex justify-center text-center text-xl sm:text-2xl font-bold flex-auto">{status}</div>
        <div class="bg-indigo-50 rounded-lg m-2 py-5 p-2 sm:m-10 sm:mx-20 sm:p-20">
            <div class="flex text-center justify-center flex-auto">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div class="flex text-center justify-center flex-auto">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div class="flex text-center justify-center flex-auto">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </div>
        
        </>
    );
}

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
        description = 'Ir al movimiento #' + move;
        } else {
        description = 'Reiniciar juego';
        }
        return (
        <li key={move}>
            <button class="m-3 bg-indigo-500 rounded-lg w-40 m:w-60 h-10 hover:bg-indigo-700 hover:shadow-lg" onClick={() => jumpTo(move)}>{description}</button>
        </li>
        );
    });

    return (
        <div class="bg-[url('https://i.pinimg.com/1200x/82/93/50/8293509819e69907fc8eb32555d1352f.jpg')] bg-cover bg-center h-screen">
        <div class="bg-indigo-200 rounded-lg m-5 sm:m-10 p-2 sm:mx-20">
            <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div class="flex justify-center">
            <div class="bg-indigo-300 rounded-lg p-1 m-3 mx-10 sm:m-10 sm:p-2 sm:mx-100 flex justify-center text-center flex flex-auto">
                <ol class="bg-indigo-200 rounded-lg m-2 w-20 sm:m-5 sm:w-100 flex flex-wrap justify-center flex-auto">{moves}</ol>
            </div>
        </div>
        </div>
    );
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
