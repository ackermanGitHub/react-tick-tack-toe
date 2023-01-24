import React, { useState } from "react";
import Header from "../../common/header";
import Footer from "../../common/footer";
import CatsScroll from "./catsScroll";
import FavContainer from "./favContainer";
import { MainContainer, ContentContainer } from "./styles/catApi";

export default function CatAPI() {
    const [favOut, setFavOut] = useState(false);

    return (
        <MainContainer>
            <Header/>
            <ContentContainer>
                <CatsScroll/>
            </ContentContainer>
            {favOut 
                ? <FavContainer/> : null
            }
            <Footer></Footer>
        </MainContainer>
    )
}