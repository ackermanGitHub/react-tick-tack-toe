import React from "react";
import Header from "../../common/header";
import Footer from "../../common/footer";
import CatImages from "./catImages";
import { MainContainer, ContentContainer } from "./styles/catApi";

export default function CatAPI() {

    return (
        <MainContainer>
            <Header/>
            <ContentContainer>
                <CatImages limit={10}/>
            </ContentContainer>
            <Footer></Footer>
        </MainContainer>
    )
}