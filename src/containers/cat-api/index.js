import React, { useEffect, useState } from "react";
import HeaderContainer from "../../common/header";
import Footer from "../../common/footer";
import { MainContainer, Btn, ContentContainer} from "../../common/styles";
import { CatImage } from "./styles";
import { api } from "./API";
//dimport { Mafs, CartesianCoordinates, FunctionGraph } from "mafs";

function isCubaLatitud(latitude, longitude){
    let result = true;
    if(latitude > -75 || latitude < -85)
        result = false;
    if(longitude > 24 || longitude < 19)
        result = false;
    return result;
}

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
    /* async function getLocationInfo(latitude, longitude) {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyCAPCfPULsJkPU3rryRLTPvUzNRbLIX_2s`
        );
        const data = await response.json();
        return data.results[0];
    } */
    
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    console.log({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                    if(isCubaLatitud(position.coords.latitude, position.coords.longitude))
                        window.alert("You are in Cuba");
                    else
                        getCat();
              },
              (error) => {
                console.error(error);
              }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }

        if (navigator.connection) {
            //console.log(navigator.connection);
        } else {
            console.error('Network Information is not supported by this browser.');
        }

    }, [])

    return (
        <MainContainer direction={"column"}>
            <HeaderContainer direction={"column"}>
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
            </HeaderContainer>
            <Footer></Footer>
        </MainContainer>
    )
}