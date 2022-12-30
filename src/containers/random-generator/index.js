import React from "react";
import HeaderContainer from "../../common/header";
import Footer from "../../common/footer";
import { MainContainer, Btn, ContentContainer, Screen} from "../../common/styles";

export default function RandomGen() {
    
    return (
        <MainContainer direction={"column"}>
            <HeaderContainer direction={"column"}>
                <ContentContainer height={"200px"} margin={"auto"} width={"300px"}>
                    <Screen/>
                    <Btn margin={"auto"}>Go</Btn>
                </ContentContainer>
            </HeaderContainer>
            <Footer></Footer>
        </MainContainer>
    )
}