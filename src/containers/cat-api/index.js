import React, { useEffect, useState } from "react";
import Header from "../../common/header";
import Footer from "../../common/footer";
import { CatImage, MainContainer, Btn, ContentContainer } from "./styles/catApi";
import { api } from "./API";

export default function CatAPI() {
    const [catsUrl, setCatUrls] = useState([]);
    
    async function getCat() {
        try {
            const {data} = await api.get('/images/search?limit=2');
            setCatUrls(catsUrl.concat(data.map(cat => cat.url)));
        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(() => {
        getCat();
    }, [])

    return (
        <MainContainer>
            <Header>
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
            </Header>
            <Footer></Footer>
        </MainContainer>
    )
}