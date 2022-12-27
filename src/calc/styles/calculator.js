import styled from "styled-components/macro";

export const MainContainer = styled.div`
    width: 300px;
    display: flex;
    margin: auto;
    flex-direction: column;
`;

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 30px;
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

export const Screen = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    border: solid 1px black;
    border-radius: 10px;
    height: 40px;
    width: 170px;
`;

export const Pane = styled.p`
    font-size: 2.4rem;
    text-align: center;
    margin: auto;
`;

export const Btn = styled.button`
    height:30px;
    width: 60px;
    margin: 0 15px 20px 15px;
`;