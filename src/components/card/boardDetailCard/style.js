import styled from "styled-components";
import IROnly from "styles/IROnly";

export const StyledWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
`

export const StyledSection = styled.section`
    width: 70vw;
    height: 90vh;
    position: absolute;
    top: 5vh;
    left: 15vw;
    border-radius: 5px;
    background-color: white;
    display: flex;
    overflow: hidden;

    & > header {
        ${IROnly}
    }
`

export const StyledImageList = styled.ul`
    width: 60%;
    display: flex;
    overflow: hidden;
`

export const StyledContentWrapper = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    position: relative;
`

export const StyledContentWriterWrapper = styled.div`
    width: 100%;
    padding: 25px 30px;
    border: 1px solid #eee;
    box-shadow: 0 -1px 10px 0 #eee;
`

export const StyledBoardTitleWrapper = styled.div`
    width: 100%;
    margin-bottom: 30px;
    display: flex;
    align-items: baseline;

    & > span:nth-child(1) {
        font-size: 24px;
        font-weight: 700;
        flex-grow: 1;
    }

    & > span:nth-child(2) {
        color: #aaa;
    }
`

export const StyledBoardContent = styled.p`
    color: #555;
`

export const StyledCommentList = styled.ul`
    width: 100%;
    flex-grow: 1;
    overflow-y: scroll;
    padding: 20px 30px 0 30px;

    &::-webkit-scrollbar {
        width: 4px;
        background-color: #eee;
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #bbb;
        border-radius: 10px;
        background-clip: padding-box;
    }

    &::-webkit-scrollbar-button {
        width: 0;
        height: 0;
    }
`

export const CommentForm = styled.form`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 10px 20px;
    border-top: 1px solid #eee;

    /* display: none; */

    & > label {
        ${IROnly}
    }
`

export const CommentFormInput = styled.input`
    border: 0;
    flex-grow: 1;
    height: 42px;

    &:focus {
        outline: 0;
    }
`

export const CommentFormButton = styled.button`
    margin-left: 20px;
    color: #0284FE;
`