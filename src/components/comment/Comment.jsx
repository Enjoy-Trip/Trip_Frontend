import React from 'react'
import * as Styled from './style'

export default function Comment({ props: { comment, type } }) {
    return (
        <Styled.StyledListItem>
            <Styled.StyledWrapper>
                <p>{comment[type + 'CommentUser'].userId}</p>
                <span>{comment[type + 'CommentContent']}</span>
            </Styled.StyledWrapper>
            <p>{comment[type + 'CommentTime']}</p>
        </Styled.StyledListItem>
    )
}
