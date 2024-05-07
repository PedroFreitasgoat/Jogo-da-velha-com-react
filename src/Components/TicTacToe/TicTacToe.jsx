import React, { useState } from 'react';
import './TicTacToe.css';

import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';

const TicTacToe = () => {
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);

    const toggle = (index) => {
        if (lock || data[index] !== "") {
            return;
        }
        
        setLock(true);
        const newData = [...data];
        newData[index] = count % 2 === 0 ? "x" : "o";
        setData(newData);
        setCount(count + 1);
        setLock(false);
    };

    const renderIcon = (value) => {
        if (value === "x") {
            return <img src={cross_icon} alt="Cross" />;
        } else if (value === "o") {
            return <img src={circle_icon} alt="Circle" />;
        }
        return null;
    };

    const resetGame = () => {
        setData(["", "", "", "", "", "", "", "", ""]);
        setCount(0);
        setLock(false);
    };


    const checkWin = () => {
        if(data[0]===data[1] && data[1]===data[2] && data[2]!=="")
            {
              won(data);
        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!=="") 
            {
                won(data);
            }
            else if(data[6]===data[7] && data[7]===data[8] && data[8]!=="") 
                {
                    won(data);
                }
                else if(data[0]===data[3] && data[3]===data[6] && data[6]!=="") 
                    {
                        won(data);
                    }
                    else if(data[1]===data[4] && data[4]===data[7] && data[7]!=="") 
                        {
                            won(data);
                        }
                        else if(data[2]===data[5] && data[5]===data[8] && data[8]!=="") 
                            {
                                won(data);
                            }
                            else if(data[0]===data[4] && data[4]===data[8] && data[8]!=="") 
                                {
                                    won(data);
                                }
                                else if(data[0]===data[1] && data[1]===data[2] && data[2]!=="") 
                                    {
                                        won(data);
                                    }
                                    else if(data[2]===data[4] && data[4]===data[6] && data[6]!=="") 
                                        {
                                            won(data);
                                        }
    }

    const won = (winner) => {
        setLock(true)
    }

    return (
        <div className='container'>
            <h1 className="title">Jogo da Velha Com <span>React</span></h1>
            <div className="board">
                <div className="row1">
                    <div className="boxes" onClick={() => toggle(0)}>{renderIcon(data[0])}</div>
                    <div className="boxes" onClick={() => toggle(1)}>{renderIcon(data[1])}</div>
                    <div className="boxes" onClick={() => toggle(2)}>{renderIcon(data[2])}</div>
                </div>
                <div className="row2">
                    <div className="boxes" onClick={() => toggle(3)}>{renderIcon(data[3])}</div>
                    <div className="boxes" onClick={() => toggle(4)}>{renderIcon(data[4])}</div>
                    <div className="boxes" onClick={() => toggle(5)}>{renderIcon(data[5])}</div>
                </div>
                <div className="row3">
                    <div className="boxes" onClick={() => toggle(6)}>{renderIcon(data[6])}</div>
                    <div className="boxes" onClick={() => toggle(7)}>{renderIcon(data[7])}</div>
                    <div className="boxes" onClick={() => toggle(8)}>{renderIcon(data[8])}</div>
                </div>
            </div>
            <button className="reset" onClick={resetGame}>Reset</button>
        </div>
    );
};

export default TicTacToe;
