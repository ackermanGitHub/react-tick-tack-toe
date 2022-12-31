import React, { useState } from "react";
import HeaderContainer from "../../common/header";
import Footer from "../../common/footer";
import { MainContainer, Btn, ContentContainer, Screen, Pane} from "../../common/styles";

export default function RandomGen() {
    const [lowNum , setLowNum] = useState(0);
    const [upNum, setUpNum] = useState(4);
    const [randNum, setRandNum] = useState(0);
    function handleGo(){
        if(upNum<lowNum)
            return;
        let time = 500;
        const count = setInterval(()=>{
            setRandNum(Math.floor(Math.random()*(upNum-lowNum+1))+lowNum)
        }, time);
        setTimeout(()=>{
            clearInterval(count);
        }, 3000);
    }
    return (
        <MainContainer direction={"column"}>
            <HeaderContainer direction={"column"}>
                <ContentContainer direction={"column"} height={"auto"} margin={"auto"} width={"300px"}>
                    <Pane>{randNum}</Pane>
                    <ContentContainer direction={"row"}>
                        <Screen width={"50px"} onChange={(item)=>{
                            setLowNum(parseInt(item.target.value));
                        }} margin={"20px 10px 20px 0"} type={"number"}/>
                        <Screen width={"50px"} onChange={(item)=>{
                            setUpNum(parseInt(item.target.value));
                        }} margin={"20px 0 20px 10px"} type={"number"}/>
                    </ContentContainer>
                    <Btn onClick={()=>{
                        handleGo();
                    }} margin={"auto"}>Go</Btn>
                </ContentContainer>
            </HeaderContainer>
            <Footer></Footer>
        </MainContainer>
    )
}