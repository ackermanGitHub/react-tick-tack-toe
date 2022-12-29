import React, { useState } from "react";
import NumberBtn from "./numBtn";
import CalcScreen from "./calcScreen";
import { ContentContainer, ScreenContainer, CenteredContainer, BtnContainer } from "../../common/styles";

export default function Calculator(){
    const [operation, setOperation] = useState("");
    function handleClick(item) {
        setOperation(operation + '' + item);
    }
    function calc(operation){
        let result = operation;
        if(operation === '')
            return 0;
        if(typeof result === 'number')
            return result;
        if(result.includes("+")){
            const opSum = result.split("+");
            const opResult = opSum.map((item)=>{
                return calc(item);
            });
            result = opResult.reduce((a,b)=>{
                return parseFloat(a)+parseFloat(b);
            });
        }
        if(typeof result === 'number')
            return result;
        if(result.includes("-")){
            const opRes = result.split("-");
            const opResult = opRes.map((item)=>{
                return calc(item);
            });
            result = opResult.reduce((a,b)=>{
                return parseFloat(a)-parseFloat(b);
            });
        }
        if(typeof result === 'number')
            return result;
        if(result.includes("*")){
            const opMult = result.split("*");
            const opResult = opMult.map((item)=>{
                return calc(item);
            });
            result = opResult.reduce((a,b)=>{
                return parseFloat(a)*parseFloat(b);
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
                return parseFloat(a)/parseFloat(b);
            })
        }
        return result;
    }
    return (
        <CenteredContainer heigth={"100%"}>
            <ContentContainer width={"400px"}>
                <ScreenContainer>
                    <CalcScreen>{operation}</CalcScreen>
                    <NumberBtn onClick={() => {
                        if(typeof operation === 'string')
                            setOperation(operation.slice(0, -1));
                        else{
                            if(operation < 10)
                                setOperation(0)
                            else
                                setOperation(parseFloat(operation.toString().split("").slice(0,-1).join("")));
                        }
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
            </ContentContainer>
        </CenteredContainer>
    )
}