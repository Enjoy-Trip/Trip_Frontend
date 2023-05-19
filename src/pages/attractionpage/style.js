import styled from "styled-components";
import IROnly from "styles/IROnly";

export const PageWrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
`

export const PageHeader = styled.header`
    width: 70px;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #ddd;
`

export const PageTitle = styled.h1`
    height: 70px;
    padding: 5px;
    border-bottom: 1px solid #ddd;

    & > span {
        ${IROnly}
    }
`

export const PageLogo = styled.p`
    font-family: 'Righteous';
    line-height: 60px;
    color: #0284FE;
    font-size: 50px;
    text-align: center;
`

export const NavButton = styled.button`
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.1s;
    color: #777;

    & > i {
        font-size: 20px;
    }

    & > span {
        margin-top: 8px;
        font-size: 12px;
    }

    &:hover {
        color: #0284FE;
    }
`

export const PageMapSectionHeader = styled.header`
    ${IROnly}
`