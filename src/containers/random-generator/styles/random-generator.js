import styled from "styled-components/macro";

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

export const Screen = styled.input`
    text-align: center;
    border: solid 1px black;
    border-radius: 10px;
    height: 40px;
    width: ${({ width = "auto" }) => width};
    margin: ${({ margin = "auto" }) => margin};
    color: black;
    font-size: 1.8rem;
`;

export const Pane = styled.p`
    font-size: 2.4rem;
    text-align: center;
    margin: ${({ margin = "auto" }) => margin};
    color: ${({ color = "black" }) => color};
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
