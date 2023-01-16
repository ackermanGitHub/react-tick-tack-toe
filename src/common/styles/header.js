import styled from "styled-components/macro";
import { Link as ReactRouterLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const NavContainer = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: center;
    align-items: center;
    background-color: transparent;
    height: 80px;
    width: 100%;
    max-width: 900px;
    margin-top: 0;
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
    margin: 0;
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