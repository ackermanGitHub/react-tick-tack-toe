import styled from "styled-components/macro";

export const FooterContainer = styled.footer`
    display: flex;
    padding: 70px 56px;
    margin: auto;
    max-width: 1000px;
    flex-direction: column;

    @media (max-width: 1000px) {
        padding: 50px 30px;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    grid-gap: 15px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
`;

export const Link = styled.a`
    color: black;
    margin-bottom: 20px;
    font-size: 14px;
    text-decoration: none;
`;

export const Title = styled.p`
    font-size: 16px;
    color: black;
    margin-bottom: 40px;
`;

export const Text = styled.p`
    font-size: 13px;
    color: black;
    margin-bottom: 40px;
`;

export const Break = styled.p`
    flex-basis: 100%;
    height: 0;
`;