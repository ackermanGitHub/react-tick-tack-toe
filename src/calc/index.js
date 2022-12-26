import React, { useState } from "react";
import NumberBtn from "./numBtn";
import CalcScreen from "./calcScreen";
import "./styles.css"

export default function Calculator(){
    const [operation, setOperation] = useState("");
    function handleClick(item) {
        setOperation(operation + '' + item);
    }
    return (
        <div className="main-container">
            <CalcScreen>{operation}</CalcScreen>
            <NumberBtn className={"del-btn"} onClick={() => {
                setOperation(operation.slice(0, -1));
            }}>
                del
            </NumberBtn>
            <div className="num-btns-container">
                {[1,2,3,4,5,6,7,8,9,0].map((item) => {
                    return(
                        <NumberBtn key={item} onClick={(i) => handleClick(i)} >{item}</NumberBtn>
                    )
                })}
            </div>
            <div className="operation-btns-container">
                {["+","-","*","/","=","C"].map((item) => {
                    return(
                        <NumberBtn key={item} onClick={(i) => handleClick(i)} >{item}</NumberBtn>
                    )
                })}
            </div>
        </div>
    )
}