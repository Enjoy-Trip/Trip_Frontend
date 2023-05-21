import React from 'react'
import * as Styled from './style'

export default function Comment({ props: { comment } }) {
    return (
        <Styled.StyledListItem>
            <Styled.StyledWrapper>
                <p>{comment.boardCommentUser.userId}</p>
                <span>{comment.boardCommentContent}</span>
            </Styled.StyledWrapper>
            <p>{comment.boardCommentTime}</p>
        </Styled.StyledListItem>
    )
}
