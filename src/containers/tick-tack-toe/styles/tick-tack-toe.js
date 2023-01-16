import styled from "styled-components/macro";

export const MainContainer = styled.div`
    background-color: #999;
`;

export const GameContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 400px;
`;

export const InfoContainer = styled.div`
    margin-left: 20px;
`;

//Board
export const BoardContainer = styled.div`
    margin: auto;
`;

//Square
export const SquareBtn = styled.button`
    background: #fff;
    border: 1px solid #999;
    float: left;
    font-size: 24px;
    font-weight: bold;
    line-height: 34px;
    height: 34px;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    width: 34px;
`;

//Side-Bar
export const SideBarContainer = styled.aside`
    position: relative;
    left: 30px;
`;

/* 
    @media (max-width: 320px) {
        position: relative;
    }
*/