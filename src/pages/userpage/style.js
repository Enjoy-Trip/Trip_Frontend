import styled from "styled-components";
import IROnly from "styles/IROnly";

export const StyledMain = styled.main`
    background-color: rgb(49, 49, 53);
    padding-top: 70px;
`

export const StyledSection = styled.section`
    background-color: rgb(38, 38, 38);
    width: 100%;
    height: calc(100vh - 70px);
    display: flex;
`

export const StyledSectionHeader = styled.header`
    ${IROnly}
`

export const StyledImage = styled.img`
    width: 50vw;
    object-fit: cover;
`

export const StyledArticle = styled.article`
    width: 50vw;
    color: white;
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`