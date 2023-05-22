import React from 'react'
import * as Styled from './style'
import BoardDetailImage from 'components/img/boardDetailImage/BoardDetailImage'
import Comment from 'components/comment/Comment'

export default function BoardDetailCard({ props: { data } }) {
    return (
        <Styled.StyledWrapper>
            <Styled.StyledSection>
                <header>
                    <h2>게시글 상세 영역</h2>
                </header>
                <Styled.StyledImageList>
                    <BoardDetailImage props={{ src: data.boardImages[0] }} />
                    <BoardDetailImage props={{ src: data.boardImages[1] }} />
                </Styled.StyledImageList>
                <Styled.StyledContentWrapper>
                    <Styled.StyledContentWriterWrapper>
                        <Styled.StyledBoardTitleWrapper>
                            <span>{data.boardTitle}</span>
                            <span>{data.boardTime.split(" ")[0]}</span>
                        </Styled.StyledBoardTitleWrapper>
                        <Styled.StyledBoardContent>
                            {data.boardContent}
                        </Styled.StyledBoardContent>
                    </Styled.StyledContentWriterWrapper>
                    <Styled.StyledCommentList>
                        <Comment props={{ comment: data.boardCommentList[0], type: 'board' }} />
                    </Styled.StyledCommentList>
                    <Styled.CommentForm>
                        <label htmlFor="commentInput">댓글 입력</label>
                        <Styled.CommentFormInput type="text" id='commentInput' placeholder='댓글 작성...' />
                        <Styled.CommentFormButton>게시</Styled.CommentFormButton>
                    </Styled.CommentForm>
                </Styled.StyledContentWrapper>
            </Styled.StyledSection>
        </Styled.StyledWrapper>
    )
}