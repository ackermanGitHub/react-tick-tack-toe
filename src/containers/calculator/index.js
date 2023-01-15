import React, { useState } from "react";
import HeaderContainer from "../../common/header";
import Footer from "../../common/footer";
import { DeleteIcon, Btn, ContentContainer, 
    ScreenContainer, MainContainer, 
    BtnContainer, Screen } from "./styles/calculator";

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
        <MainContainer>
            <HeaderContainer/>
            <ContentContainer margin={"auto"} width={"300px"}>
                <ScreenContainer>
                <Screen type={"text"} disabled value={operation}>
                </Screen>
                    <DeleteIcon
                        onClick={() => {
                            if(typeof operation === 'string')
                                setOperation(operation.slice(0, -1));
                            else{
                                operation < 10 ? 
                                    setOperation(0)
                                    : setOperation(parseFloat(operation.toString().split("").slice(0,-1).join("")));
                            }
                        }} margin={"auto"}
                        sx={{ fontSize: 30 }}
                    >
                    </DeleteIcon>
                </ScreenContainer>
                <BtnContainer>
                    {[1,2,3,4,5,6,7,8,9,"+",0,"-","*","/"].map((item) => {
                        return(
                            <Btn key={item} onClick={() => handleClick(item)} >{item}</Btn>
                        )
                    })}
                    <Btn onClick={() => {
                        setOperation(calc(operation));
                    }} >=</Btn>
                    <Btn onClick={() => {
                        setOperation("");
                    }} >C</Btn>
                </BtnContainer>
            </ContentContainer>
            <Footer/>
        </MainContainer>
    )
}