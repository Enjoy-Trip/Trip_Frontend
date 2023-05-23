import React, { useEffect, useRef, useState } from 'react'
import * as Styled from './style'
import { useSelector, useDispatch } from 'react-redux'

import BoardDetailCarousel from 'components/carousel/boardDetailCarousel/BoardDetailCarousel'
import Comment from 'components/comment/Comment'

import { getComments, writeComment } from 'servieces/BoardService'

export default function BoardDetailCard({ props: { data, detailShow } }) {
    const [commentList, setCommentList] = useState([]);
    const [input, setInput] = useState("");
    const inputRef = useRef();
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const getBoard = async () => {
        const result = await getComments(data.boardNo, user);

        setCommentList(result);
        setInput("");
    }
    
    useEffect(() => {
        getBoard();
    }, [data]);

    const inputHandler = (e) => {
        setInput(e.target.value);
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        if (!input) {
            alert("내용을 입력해주세요!");
            return;
        }
        
        await writeComment(data.boardNo, input, user, dispatch);
        
        setInput("");
        getBoard();
    }

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
                                        commentList ? commentList.map(comment => <Comment key={comment.boardCommentNo + comment.boardNo} props={{ comment:comment, type: 'board', isWriter: comment.boardCommentLoginCheck, updateFunc: getBoard }} />) : <></>
                                    }
                                    
                                </Styled.StyledCommentList>
                                <Styled.CommentForm>
                                    <label htmlFor="commentInput">댓글 입력</label>
                                    <Styled.CommentFormInput 
                                        type="text" id='commentInput' 
                                        placeholder={user.refreshToken ? '댓글 작성...' : "로그인 후 댓글을 달 수 있습니다!"} 
                                        readOnly={user.refreshToken ? false : true}
                                        ref={inputRef}
                                        onChange={inputHandler}
                                        value={input} />
                                    <Styled.CommentFormButton 
                                        display={user.refreshToken ? "block" : "none"}
                                        onClick={submitHandler}>게시</Styled.CommentFormButton>
                                </Styled.CommentForm>
                            </Styled.StyledContentWrapper>
                        </> : <></>
                }
            </Styled.StyledSection>
        </Styled.StyledWrapper>
    )
}