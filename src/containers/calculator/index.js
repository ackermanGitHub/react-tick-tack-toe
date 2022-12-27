import React, { useState } from "react";
import NumberBtn from "./numBtn";
import CalcScreen from "./calcScreen";
import { MainContainer, ScreenContainer, BtnContainer } from "./styles/calculator";

export default function Calculator(){
    const [operation, setOperation] = useState("");
    function handleClick(item) {
        setOperation(operation + '' + item);
    }
    function calc(operation){
        let result = operation;
        if(typeof result === 'number')
            return result;
        if(result.includes("+")){
            const opSum = result.split("+");
            const opResult = opSum.map((item)=>{
                return calc(item);
            });
            result = opResult.reduce((a,b)=>{
                return parseInt(a)+parseInt(b);
            })
        }
        if(typeof result === 'number')
            return result;
        if(result.includes("-")){
            const opRes = result.split("-");
            const opResult = opRes.map((item)=>{
                return calc(item);
            });
            result = opResult.reduce((a,b)=>{
                return parseInt(a)-parseInt(b);
            })
        }
        if(typeof result === 'number')
            return result;
        if(result.includes("*")){
            const opMult = result.split("*");
            const opResult = opMult.map((item)=>{
                return calc(item);
            });
            result = opResult.reduce((a,b)=>{
                return parseInt(a)*parseInt(b);
            })
        }
        if(typeof result === 'number')
            return result;
        if(result.includes("/")){
            const opDiv = result.split("/");
            const opResult = opDiv.map((item)=>{
                return calc(item);
            });
            result = opResult.reduce((a,b)=>{
                return parseInt(a)/parseInt(b);
            })
        }
        return result;
    }
    return (
        <MainContainer>
            <ScreenContainer>
                <CalcScreen>{operation}</CalcScreen>
                <NumberBtn onClick={() => {
                    if(typeof operation === 'string')
                        setOperation(operation.slice(0, -1));
                    else
                        setOperation(parseInt(operation/10));
                }}>del</NumberBtn>
            </ScreenContainer>
            <BtnContainer>
                {[1,2,3,4,5,6,7,8,9,"+",0,"-","*","/"].map((item) => {
                    return(
                        <NumberBtn key={item} onClick={(i) => handleClick(i)} >{item}</NumberBtn>
                    )
                })}
            </BtnContainer>
            <BtnContainer>
                <NumberBtn onClick={() => {
                    setOperation(calc(operation));
                }} >=</NumberBtn>
                <NumberBtn onClick={() => {
                    setOperation("");
                }} >C</NumberBtn>
            </BtnContainer>
        </MainContainer>
    )
}