import styled, { keyframes } from "styled-components";
import IROnly from "styles/IROnly";

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
        padding-left: 8px;
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
    position: absolute;
    left: calc(50vw - 150px);
    right: 0;
    top: 360px;
    height: 450px;
    display: flex;
    gap: 50px;
    transition: all 0.3s;
    margin-left: ${props => props.margin};
`

export const Section2ListArticle = styled.article`
    width: 320px;
    height: 450px;
    border-radius: 10px;
    overflow: hidden;

    background: url(${props => props.backgroundimg});

    display: flex;
    flex-direction: column;
    padding: 20px;


    &:hover {
        box-shadow: inset 0 -220px 200px 5px rgba(0,0,0,1);
    }

    &:hover > header {
        display: block;
    }

    &:hover > p {
        display: block;
    }

    & > header {
        color: white;
        display: none;
        width: 250px;
        font-size: 18px;
        margin-top: auto;
        margin-bottom: 20px;
    }

    & > header > h3 {
        font-weight: 700;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    & > p {
        color: white;
        display: none;
        width: 250px;
        font-size: 12px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-bottom: 10px;
    }
`

export const CarouselButton = styled.button`
    position: absolute;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-size: 28px;
    color: #777;
    background-color: #eee;
    border: 1px solid #777;

    & > span {
        ${IROnly}
    }
`

export const Section2LeftButton = styled(CarouselButton)`
    bottom: 300px;
    left: 250px;
    display: ${props => props.show};
`

export const Section2RightButton = styled(CarouselButton)`
    bottom: 300px;
    right: 250px;
    display: ${props => props.show};
`


export const StyledSection3 = styled.section`
    padding-top: 80px;
`