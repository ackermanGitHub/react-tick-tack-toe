import React from "react";
import Header from "../../common/header";
import Footer from "../../common/footer";
import CatImages from "./catImages";
import { MainContainer, 
    Btn, ContentContainer } from "./styles/catApi";

export default function CatAPI() {

    return (
        <MainContainer>
            <Header/>
            <ContentContainer>
                <CatImages limit={10}/>
                <Btn onClick={null} >Get Cat</Btn>
            </ContentContainer>
            <Footer></Footer>
        </MainContainer>
    )
}