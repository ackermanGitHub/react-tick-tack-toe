import React, { useEffect, useState } from "react";
import Header from "../../common/header";
import Footer from "../../common/footer";
import { CatImage, MainContainer, 
    Btn, ContentContainer } from "./styles/catApi";
import { api } from "./API";

export default function CatAPI() {
    const [catsUrl, setCatUrls] = useState([]);
    
    async function getCat() {
        console.log("executed");
        try {
            const {data} = await api.get('/images/search?limit=2');
            setCatUrls(data.map(cat => cat.url));
        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(() => {
        return () => {
            getCat();
        };
    }, [])

    return (
        <MainContainer>
            <Header/>
            <ContentContainer>
                {
                    catsUrl.map((item, index)=>{
                        return (
                            <CatImage src={item} key={index} />

                        )
                    })
                }
                <Btn onClick={getCat} >Get Cat</Btn>
            </ContentContainer>
            <Footer></Footer>
        </MainContainer>
    )
}