import styled from "styled-components/macro";
import { Link as ReactRouterLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
    display: flex;
    margin: 0px 56px;
    flex-direction: ${({ direction= "row" }) => direction};
    color: #aaaa;
    padding: 18px 0;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1000px) {
        margin: 0 30px;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    flex-direction: ${({ direction= "row" }) => direction};
    justify-content: space-between;
    align-items: center;
    background-color: ${({ background = "transparent" }) => background};
    height: ${({ height = "180px" }) => height};
    width: ${({ width = "90%" }) => width};
    margin-top: ${({ margintop = "0" }) => margintop};
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

export const Text = styled.p`
    color: white;
    font-size: 22px;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin: 0;
`;

export const ButtonLink = styled(ReactRouterLink)`
    display: block;
    background-color: #eeeeee;
    max-width: 130px;
    height: fit-content;
    font-size: 1.8rem;
    font-weight: bold;
    margin: ${({ margintop = "20px" }) => margintop};
    color: black;
    border: 2px solid black;
    border-radius: 15px;
    padding: 8px 17px;
    cursor: pointer;
    text-decoration: none;
    box-sizing:border-box;

    &:hover {
        background-color: #ffffff;
    }
`;