import React from 'react'
import * as Styled from './style'


export default function Comment({ props: { comment, type, isWriter, updateFunc, deleteFunc } }) {
    return (
        <Styled.StyledListItem>
            <Styled.StyledWrapper>
                <p>{comment[type + 'CommentUser'].userId}</p>
                <span>{comment[type + 'CommentContent']}</span>
            </Styled.StyledWrapper>
            <Styled.StyledAdditionalWrapper>
                <p>{comment[type + 'CommentTime']}</p>
                <Styled.StyledButtonList display={isWriter ? "flex" : "none"}>
                    <li>
                        <Styled.StyledButton onClick={updateFunc} data-key={comment[type + 'CommentNo']}>
                            <span>수정</span>
                        </Styled.StyledButton>
                    </li>
                    <li>
                        <Styled.StyledButton onClick={deleteFunc} data-key={comment[type + 'CommentNo']}>
                            <span>삭제</span>
                        </Styled.StyledButton>
                    </li>
                </Styled.StyledButtonList>
            </Styled.StyledAdditionalWrapper>
        </Styled.StyledListItem>
    )
}
