import React, { useEffect, useState } from "react";
import HeaderContainer from "../../common/header";
import Footer from "../../common/footer";
import { MainContainer, Btn, ContentContainer} from "../../common/styles";
import { CatImage } from "./styles";
import { api } from "./API";
//dimport { Mafs, CartesianCoordinates, FunctionGraph } from "mafs";

export default function CatAPI() {
    const [catsUrl, setCatUrls] = useState([]);
    
    async function getCat() {
        try {
            const {data} = await api.get('/images/search?limit=2');
            setCatUrls(data.map(cat => cat.url));
        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(() => {
        
    }, [])

    return (
        <MainContainer direction={"column"}>
            <HeaderContainer direction={"column"}>
                <ContentContainer direction={"column"} height={"auto"} margin={"auto"} width={"300px"}>
                    {
                        [].map((item, index)=>{
                            return (
                                <CatImage src={item} key={index} />

                            )
                        })
                    }
                    <Btn onClick={null} margin={"auto"}>Get Cat</Btn>
                </ContentContainer>
            </HeaderContainer>
            <Footer></Footer>
        </MainContainer>
    )
}