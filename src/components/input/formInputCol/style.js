import styled from "styled-components";

export const StyledLabel = styled.label`
    font-family: 'Sofia Sans', sans-serif; 
    font-size: 16px;
    margin-bottom: 10px;
`

export const StyledInput = styled.input`
    font-size: 16px;
    margin-bottom: 20px;
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;

    &:focus {
        outline: 1px solid rgb(2, 133, 252);
    }

    &::placeholder {
        color: #ccc;
    }
`