import styled from "styled-components/macro";

export const CatImage = styled.img`
    margin: 100px auto;
    width: 300px;
    height: 300px;
`;

export const MainContainer = styled.div`
    background-color: #999;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 300px;
    margin: auto;
`;

export const FavCatsAside = styled.aside`
    width: 30%;
    padding-left: 15px;
    margin-left: 15px;
    float: right;
    font-style: italic;
    background-color: lightgray;
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
    margin: auto;
    color: black;

    &:active {
        background-color: gray;
    }
    &:hover {
        background-color: #ccc;
    }
`;