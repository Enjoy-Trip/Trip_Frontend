import React from 'react'
import * as Styled from './style'
import BoardDetailCarousel from 'components/carousel/boardDetailCarousel/BoardDetailCarousel'
import Comment from 'components/comment/Comment'

export default function BoardDetailCard({ props: { data, detailShow } }) {
    return (
        <Styled.StyledWrapper detailShow={detailShow} >
            <Styled.StyledSection onClick={e => e.stopPropagation()}>
                {
                    data.boardNo ?
                        <>
                            <header>
                                <h2>게시글 상세 영역</h2>
                            </header>
                            <BoardDetailCarousel props={{ images: data.boardImages }} />
                            <Styled.StyledContentWrapper>
                                <Styled.StyledBoardTitleWrapper>
                                    <span>{data.boardTitle}</span>
                                    <span>{data.boardTime}</span>
                                    <p>
                                        {data.boardContent}
                                    </p>
                                </Styled.StyledBoardTitleWrapper>
                                <Styled.StyledCommentList>
                                    <Comment props={{ comment: data.boardCommentList[0], type: 'board' }} />
                                </Styled.StyledCommentList>
                                <Styled.CommentForm>
                                    <label htmlFor="commentInput">댓글 입력</label>
                                    <Styled.CommentFormInput type="text" id='commentInput' placeholder='댓글 작성...' />
                                    <Styled.CommentFormButton>게시</Styled.CommentFormButton>
                                </Styled.CommentForm>
                            </Styled.StyledContentWrapper>
                        </> : <></>
                }
            </Styled.StyledSection>
        </Styled.StyledWrapper>
    )
}