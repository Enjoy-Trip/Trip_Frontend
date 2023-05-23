import React, { useEffect, useState } from 'react'
import * as Styled from './style'
import { useSelector } from 'react-redux'

import BoardDetailCarousel from 'components/carousel/boardDetailCarousel/BoardDetailCarousel'
import Comment from 'components/comment/Comment'

import { getComments } from 'servieces/BoardService'

export default function BoardDetailCard({ props: { data, detailShow } }) {
    const [commentList, setCommentList] = useState([]);
    const user = useSelector(state => state.user);
    
    useEffect(() => {
        const getBoard = async () => {
            const result = await getComments(data.boardNo, user);

            setCommentList(result);
        }

        getBoard();
    }, [data]);

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
                                    {
                                        commentList ? commentList.map(comment => <Comment key={comment.commentNo + comment.boardNo} props={{ comment:comment, type: 'board' }} />) : <></>
                                    }
                                    
                                </Styled.StyledCommentList>
                                <Styled.CommentForm>
                                    <label htmlFor="commentInput">댓글 입력</label>
                                    <Styled.CommentFormInput type="text" id='commentInput' placeholder={user.refreshToken ? '댓글 작성...' : "로그인 후 댓글을 달 수 있습니다!"} readOnly={user.refreshToken ? false : true} />
                                    <Styled.CommentFormButton display={user.refreshToken ? "block" : "none"}>게시</Styled.CommentFormButton>
                                </Styled.CommentForm>
                            </Styled.StyledContentWrapper>
                        </> : <></>
                }
            </Styled.StyledSection>
        </Styled.StyledWrapper>
    )
}