import styled from "styled-components/macro";

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

export const MainContainer = styled.div`
    background-color: ${({ bg = "gray" }) => bg};
`;

export const GameContainer = styled.div`
    display: flex;
    flex-direction: ${({ direction = "row" }) => direction};
    justify-content: center;
    align-items: center;
    height: 500px;
`;

export const BoardContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const InfoContainer = styled.div`
    margin-left: 20px;
`;