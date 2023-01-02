import React, { useState } from "react";
import HeaderContainer from "../../common/header";
import Footer from "../../common/footer";
import { MainContainer, Btn, ContentContainer} from "../../common/styles";
import { CatImage } from "./styles";
import axios from "axios";

const api = axios.create({
	baseURL: 'https://api.thecatapi.com/v1'
});
api.defaults.headers.common['X-API-KEY'] = 'live_XTd3skGaIZ4bJVqKnaa6db01fvPZ2JdPqIoGzLMYq5fsi1IVvbKsg2IIkzwm4IKM';


export default function CatAPI() {
    const [catsUrl, setCatUrls] = useState(Array(2).fill(''));

    async function getCat() {
        try {
          const {data} = await api.get('/images/search?limit=2');
          setCatUrls(data.map(
            cat => {return cat.url}
          ))
        } catch (error) {
          console.error(error);
        }
    }
    
    return (
        <MainContainer direction={"column"}>
            <HeaderContainer direction={"column"}>
                <ContentContainer direction={"column"} height={"auto"} margin={"auto"} width={"300px"}>
                    <CatImage src={catsUrl[0]}/>
                    <CatImage src={catsUrl[1]}/>
                    <Btn onClick={()=>{
                        getCat();
                    }} margin={"auto"}>Get Cat</Btn>
                </ContentContainer>
            </HeaderContainer>
            <Footer></Footer>
        </MainContainer>
    )
}