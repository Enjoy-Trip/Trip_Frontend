import styled, { keyframes } from "styled-components";

const buttonDownAnimation = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-25px) translateX(-50%);
    }
    30% {
        opacity: 1;
        transform: translateY(0px) translateX(-50%);
    }
    85% {
        opacity: 1;
        transform: translateY(0px) translateX(-50%);
    }
    100% {
        opacity: 0;
        transform: translateY(25px) translateX(-50%);
    }
`

export const StyledSection1Header = styled.header`
    position: absolute;
    top: 25vh;
    left: 10vw;
    color: white;

    & span {
        display: block;
    }

    & > h2 > span + span {
        margin-top: 18px;
    }

    & > h2 > span:nth-child(1) {
        font-size: 28px;
    }
    
    & > h2 > span:nth-child(2) {
        font-size: 64px;
        font-family: 'Jua';
    }

    & > p {
        margin-top: 30px;
        padding-left: 100px;
    }
`

export const StyledSection1Title = styled.h2`

`

export const StyledSection1Video = styled.video`
    width: 100%;
    height: 100vh;
    object-fit: cover;
`

export const StyledSection1Button = styled.button`
    position: absolute;
    bottom: 55px;
    left: 50%;
    transform: translate(-50%);
    color: white;
    font-size: 18px;
    animation: ${buttonDownAnimation} 1.7s 1s infinite linear;    
`

export const StyledSectionHeader = styled.header`
   display: flex;
   flex-direction: column;
   align-items: center;
`

export const StyledSectionTitle = styled.h2`
    font-size: 32px;
    font-family: 'Jua';

    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;

    & > span {
        display: block;
        padding: 2px;
    }
`

export const StyledSectionHeaderParagraph = styled.p`
    display: block;
    margin: 0 auto;
    max-width: 600px;
    text-align: center;
    font-size: 18px;
    line-height: 24px;
    font-weight: 300;
`

export const StyledSection2 = styled.section`
    height: 900px;
    padding-top: 45px;
    padding-bottom: 350px;
    position: relative;
    margin-top: 40px;
    background: url(${props => props.img});
    background-repeat: no-repeat;
    background-position-x: 50%;
    background-position-y: 50%;
    background-size: cover;
`

export const StyledSection2List = styled.ul`
    background-color: aqua;
    position: absolute;
    height: 30px;
    left: 0;
    right: 0;
    top: 330px;
`


export const StyledSection3 = styled.section`

`