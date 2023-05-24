import styled from "styled-components";
import IROnly from "styles/IROnly";

export const StyledMain = styled.main`
    padding-top: 70px;
    background-color: ${props => props.time === "morning" ? "white" : props.time === "afternoon" ? "white" : "rgb(49, 49, 53)"};
`

export const StyledSection = styled.section`
    background-color: white;
    width: 100%;
    display: flex;
    position: relative;

    background-color: ${props => props.time === "morning" ? "white" : props.time === "afternoon" ? "white" : "rgb(38, 38, 38);"};
`

export const StyledSectionHeader = styled.header`
    ${IROnly}
    position: absolute;
    color: white;
`

export const StyledArticleTitle = styled.h2`
    font-family: 'Luckiest Guy', cursive;
    font-size: 32px;
    letter-spacing: 2px;

    & > span {
        display: block;
        padding: 5px;
    }
`

export const StyledImage = styled.img`
    width: 50vw;
    height: calc(100vh - 70px);
    object-fit: cover;
`

export const StyledArticle = styled.article`
    width: 50vw;
    height: calc(100vh - 70px);
    padding: 20px;
    margin: auto;
    overflow-y: scroll;

    color: ${props => props.time === "morning" ? "#333" : props.time === "afternoon" ? "#333" : "white"};

    & > header {
        ${IROnly}
    }
`

export const StyledForm = styled.form`
    margin-top: 60px;
    display: flex;
    flex-direction: column;

    & > button + button {
        margin-top: 15px;
    }
`