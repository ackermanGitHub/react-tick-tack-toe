import styled from "styled-components/macro";
import BackspaceRoundedIcon from '@mui/icons-material/BackspaceRounded';

export const DeleteIcon = styled(BackspaceRoundedIcon)`
    margin: auto;
    &:active {
        color: #ffffff;
    }
    &:hover {
        color: gray;
    }
`;

export const MainContainer = styled.div`
    background-color: #999;
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

export const Screen = styled.input`
    text-align: center;
    border: solid 1px black;
    border-radius: 10px;
    height: 40px;
    width: auto;
    margin: auto;
    color: black;
    font-size: 1.8rem;
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
    border-radius: 10px;
`;

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 300px;
    margin: auto;
`;

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: 30px 0;
`;