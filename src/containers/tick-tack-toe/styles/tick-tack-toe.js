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

export const BoardContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const InfoContainer = styled.div`
    margin-left: 20px;
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
    position: absolute;
    left: 30px;
`;