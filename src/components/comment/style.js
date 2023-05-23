import styled from "styled-components";
import IROnly from "styles/IROnly";

export const StyledListItem = styled.li`
    width: 100%;
    margin-bottom: 20px;
    font-size: 12px;
    line-height: 15px;
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

export const StyledAdditionalWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    & > p {
        font-size: 10px;
        color: #aaa;
    }
`

export const StyledButtonList = styled.ul`
    display: ${props => props.display};
    gap: 8px;
`

export const StyledButton = styled.button`
    font-size: 10px;
    padding: 0;

    & > span:nth-child(1) {
        ${IROnly}
    }
`