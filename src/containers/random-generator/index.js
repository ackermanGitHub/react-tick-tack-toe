import React, { useState } from "react";
import Header from "../../common/header";
import Footer from "../../common/footer";
import { MainContainer, Btn, 
    ContentContainer, Screen, Pane} from "./styles/random-generator";
import { randomNum } from "../../common/utils/functions.ts";

export default function RandomGen() {
    const [lowNum , setLowNum] = useState(0);
    const [upNum, setUpNum] = useState(4);
    const [randNum, setRandNum] = useState(0);
    function handleGo(){
        if(upNum<lowNum)
            return;
        let time = 500;
        const count = setInterval(()=>{
            setRandNum(randomNum(lowNum, upNum));
        }, time);
        setTimeout(()=>{
            clearInterval(count);
        }, 3000);
    }
    return (
        <MainContainer>
            <Header/>
            <ContentContainer>
                <Pane>{randNum}</Pane>
                <Screen onChange={(item)=>{
                    setLowNum(parseInt(item.target.value));
                }} type={"number"}/>
                <Screen onChange={(item)=>{
                    setUpNum(parseInt(item.target.value));
                }} type={"number"}/>
                <Btn onClick={()=>{
                    handleGo();
                }}>Go</Btn>
            </ContentContainer>
            <Footer/>
        </MainContainer>
    )
}