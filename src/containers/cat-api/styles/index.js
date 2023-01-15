import styled from "styled-components";

export const CatImage = styled.img`
    margin: 20px auto;
    width: 300px;
    height: 300px;
`;

export const MainContainer = styled.div`
    background-color: ${({ background = "#999" }) => background};
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: ${({ direction= "row" }) => direction};
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: ${({ background = "#999" }) => background};
    height: ${({ height = "auto" }) => height};
    width: ${({ width = "auto" }) => width};
    margin: ${({ margin = "0" }) => margin};
`;
    
export const BtnContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: auto;
    width: 100%;
`;

export const Btn = styled.button`
    height:30px;
    width: 60px;
    border: solid 1px black;
    border-radius: 5px;
    margin: ${({ margin = "0 15px 20px 15px" }) => margin};
    color: ${({ color = "black" }) => color};

    &:active {
        background-color: gray;
    }
    &:hover {
        background-color: #ccc;
    }
`;