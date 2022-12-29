import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

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
export const CenteredContainer = styled.div`
    display: flex;
    flex-direction: ${({ direction = "row" }) => direction};
    width: 300px;
    margin: auto;
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
export const MainContainer = styled.div`
    background-color: ${({ background = "#999" }) => background};
`;

export const Title = styled.h1`
    font-size: 5rem;
    width: 80%;
    line-height: 1.1;
    margin-top: 0;
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
export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 250px;
    margin: 30px 0;
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


export const BoardContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const InfoContainer = styled.div`
    margin-left: 20px;
`;
export const Item = styled.div`
    display: flex;
    border-bottom: 8px solid #222;
    padding: 50px 5%;
    color: white;
    overflow: hidden;
`;
export const ItemContainer = styled.div`
    @media (max-width: 1000px)  {
        ${Item}: last-of-type h2 {
            margin-bottom: 50px;
        }
    }
`;