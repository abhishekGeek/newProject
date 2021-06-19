import React, { useState } from 'react';
import Navbar from './Navbar';

function Board() {
    const [square, setSquare] = useState(Array(9).fill(null));
    const [isNext, setNext] = useState(false);

    const calculateWinner = (square) => {
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
            if (square[a] && square[a] === square[b] && square[a] === square[c]) {
                return square[a];
            }
        }
        return null;
    }

    const winner = calculateWinner(square);
    const message = winner ? `The Winner is ${winner}` : `The Next player is ${isNext ? 'X' : 'O'}`;

    const clickHandler = (position) => {
        if (square[position] != null || winner)
            return;
        setSquare((prev) => {
            return prev.map((sq, pos) => {
                if (pos === position)
                    return isNext ? 'X' : 'O';
                return sq;
            })
        });
        setNext(() => !isNext);
    };

    return (
        <React.Fragment>
            <Navbar />
            <br /><br />
            <div className="container">
                <div className="text-center">
                    <p className="display-6">Welcome to the Tic-Tac-Toe Game</p>
                    <p className="display-10">{message}</p>
                </div>
                <br /><br />
                <div className="rows r-1">
                    <button type="button" onClick={() => clickHandler(0)}>{square[0]}</button>
                    <button type="button" onClick={() => clickHandler(1)}>{square[1]}</button>
                    <button type="button" onClick={() => clickHandler(2)}>{square[2]}</button>
                </div>
                <div className="rows r-2">
                    <button type="button" onClick={() => clickHandler(3)}>{square[3]}</button>
                    <button type="button" onClick={() => clickHandler(4)}>{square[4]}</button>
                    <button type="button" onClick={() => clickHandler(5)}>{square[5]}</button>
                </div>
                <div className="rows r-3">
                    <button type="button" onClick={() => clickHandler(6)}>{square[6]}</button>
                    <button type="button" onClick={() => clickHandler(7)}>{square[7]}</button>
                    <button type="button" onClick={() => clickHandler(8)}>{square[8]}</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Board;