import React from "react";
import HeaderContainer from "../../common/header";
import Footer from "../../common/footer";
import { MainContainer, Btn, ContentContainer} from "../../common/styles";
import axios from "axios";

const api = axios.create({
	baseURL: 'https://api.thecatapi.com/v1'
});
api.defaults.headers.common['X-API-KEY'] = 'live_XTd3skGaIZ4bJVqKnaa6db01fvPZ2JdPqIoGzLMYq5fsi1IVvbKsg2IIkzwm4IKM';

async function getCat() {
    try {
      const response = await api.get('/images/search?limit=2');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
}

export default function CatAPI() {

    return (
        <MainContainer direction={"column"}>
            <HeaderContainer direction={"column"}>
                <ContentContainer direction={"column"} height={"auto"} margin={"auto"} width={"300px"}>
                    <Btn onClick={()=>{
                        getCat();
                    }} margin={"auto"}>Get Cat</Btn>
                </ContentContainer>
            </HeaderContainer>
            <Footer></Footer>
        </MainContainer>
    )
}