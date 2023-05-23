import styled from "styled-components";

export const StyledListItem = styled.li`
    width: 100%;
    margin-bottom: 20px;
    font-size: 12px;
    line-height: 15px;

    & > p {
        font-size: 10px;
        color: #aaa;
    }
`

export const StyledWrapper = styled.div`
    width: 100%;
    margin-bottom: 8px;

    & > p {
        display: inline-block;
        font-weight: 700;
        margin-right: 8px;
    }
`