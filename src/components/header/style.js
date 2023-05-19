import styled from "styled-components"
import Wrapper from 'styles/Wrapper'

export const HeaderWrapper = styled.header`
    width: 100%;
    position: fixed;
    transition: 0.2s;
    color: white;
    z-index: 500;
    box-shadow: ${props => props.moved ? "0 -1px 20px 5px #ccc" : ""};
    border-bottom: ${props => props.moved ? "1px solid #c4c4c4" : ""};
    background-color: ${props => props.moved ? "white" : ""};
    color: ${props => props.moved ? "#333" : ""};
    
    box-shadow: ${props => props.time === "morning" ? "0 -1px 2px 2px #ccc" : props.time === "afternoon" ? "0 -1px 2px 2px #ccc" : ""};
    color: ${props => props.time === "morning" ? "#333" : props.time === "afternoon" ? "#333" : props.time === "evening" ? "white" : ""};
    background-color: ${props => props.time === "morning" ? "white" : props.time === "afternoon" ? "white" : props.time === "evening" ? "rgb(38, 38, 38)" : ""};
`

export const DivWrapper = styled.div`
    ${Wrapper}

    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    font-family: 'Righteous';
`

export const HeaderTitle = styled.h1`
    font-size: 30px;
`

export const HeaderNavList = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-size: 16px;
`