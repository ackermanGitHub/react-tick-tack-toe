import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const ButtonLink = styled(ReactRouterLink)`
    display: block;
    background-color: #eeeeee;
    max-width: 130px;
    height: fit-content;
    font-size: 1.8rem;
    font-weight: bold;
    margin: 20px;
    color: #222;
    border: 2px solid black;
    border-radius: 12px;
    padding: 8px 16px;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    box-sizing:border-box;

    &:hover {
        background-color: #ffffff;
    }
`;
export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 900px;
    margin: auto;
`;

export const BtnsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;
export const MainContainer = styled.div`
    background-color: #999;
`;

export const Title = styled.h1`
    font-size: 5rem;
    width: 80%;
    line-height: 1.1;
    margin-top: 20px;
    margin-bottom 8px;
    color: #222;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 35px;
    }
`;
export const SubTitle = styled.h2`
    color: #222;
    font-size: 2.2rem;
    width: 80%;
    font-weight: normal;
    text-align: center;
    margin: 16px auto;

    @media (max-width: 600px) {
        font-size: 18px;
    }
`;