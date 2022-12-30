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
            setRandNum(Math.floor(Math.random()*(upNum-lowNum))+1)
        }, time);
        setTimeout(()=>{
            clearInterval(count);
        }, 3000);
    }
    return (
        <MainContainer direction={"column"}>
            <HeaderContainer direction={"column"}>
                <ContentContainer direction={"column"} height={"auto"} margin={"auto"} width={"300px"}>
                    <Screen onChange={(item)=>{
                        setLowNum(parseInt(item.nativeEvent.data));
                    }} value={lowNum} margin={"20px 0 0 0"} type={"number"}/>
                    <Screen onChange={(item)=>{
                        setUpNum(parseInt(item.nativeEvent.data));
                    }} value={upNum} margin={"20px 0"} type={"number"}/>
                    <Btn onClick={()=>{
                        handleGo();
                    }} margin={"auto"}>Go</Btn>
                    <Pane>{randNum}</Pane>
                </ContentContainer>
            </HeaderContainer>
            <Footer></Footer>
        </MainContainer>
    )
}