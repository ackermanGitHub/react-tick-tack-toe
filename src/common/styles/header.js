import styled from "styled-components/macro";

export const Container = styled.div`
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

export const Text = styled.p`
    color: white;
    font-size: 22px;
    line-height: normal;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
    margin: 0;
`;
