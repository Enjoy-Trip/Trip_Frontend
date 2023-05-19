import React from 'react'
import * as Styled from './style'

export default function FormButtonBlue({ data: { onClickFunc, content } }) {
    return (
        <Styled.StyledButton onClick={onClickFunc}>
            {content}
        </Styled.StyledButton>
    )
}