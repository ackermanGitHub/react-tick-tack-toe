import styled from "styled-components/macro";

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

export const Screen = styled.input`
    text-align: center;
    border: solid 1px black;
    border-radius: 10px;
    height: 40px;
    width: 50px;
    color: black;
    font-size: 1.8rem;
`;

export const Pane = styled.p`
    font-size: 2.4rem;
    text-align: center;
    margin: auto;
    color: black;
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
