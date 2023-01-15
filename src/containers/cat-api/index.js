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
        <MainContainer direction={"column"}>
            <Header direction={"column"}>
                <ContentContainer direction={"column"} height={"auto"} margin={"auto"} width={"300px"}>
                    {
                        catsUrl.map((item, index)=>{
                            return (
                                <CatImage src={item} key={index} />

                            )
                        })
                    }
                    <Btn onClick={getCat} margin={"auto"}>Get Cat</Btn>
                </ContentContainer>
            </Header>
            <Footer></Footer>
        </MainContainer>
    )
}