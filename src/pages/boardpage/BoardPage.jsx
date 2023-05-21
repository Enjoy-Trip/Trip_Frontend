import React from 'react'
import { Link } from 'react-router-dom'
import * as Styled from './style'

import BoardListCard from 'components/card/boardListCard/BoardListCard'
import BoardDetailCard from 'components/card/boardDetailCard/BoardDetailCard'
import BoardWriteCard from 'components/card/boardWriteCard/BoardWriteCard'

export default function BoardPage() {
    const dummy = {
        "boardNo": 1,
        "boardTitle": "test",
        "boardTime": "2023-05-17 01:33:27",
        "boardContent": "test desc",
        "boardUser": {
            "userNo": 1,
            "userId": "test",
            "userName": "test"
        },
        "boardImages": [
            "https://images.unsplash.com/photo-1682686580922-2e594f8bdaa7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            "https://images.unsplash.com/photo-1682686580922-2e594f8bdaa7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
        ],
        "boardCommentList": [
            {
                "boardCommentNo": 1,
                "boardNo": 1,
                "boardCommentContent": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt repudiandae at, animi consectetur iste dolorem quod temporibus! Laborum, quas deleniti aliquam accusantium, ipsa est facere provident voluptas ea voluptate sapiente?",
                "boardCommentTime": "2023-05-21 20:29:41",
                "boardCommentUser": {
                    "userNo": 1,
                    "userId": "test",
                    "userName": "test"
                }
            },
            {
                "boardCommentNo": 2,
                "boardNo": 1,
                "boardCommentContent": "test2",
                "boardCommentTime": "2023-05-21 20:29:41",
                "boardCommentUser": {
                    "userNo": 1,
                    "userId": "test",
                    "userName": "test"
                }
            }
        ]
    }

    return (
        <Styled.PageWrapper>
            <Styled.PageHeader>
                <Link to="/">
                    <Styled.PageTitle>
                        <span>YOUCANCE</span>
                        <Styled.PageLogo>Y</Styled.PageLogo>
                    </Styled.PageTitle>
                </Link>
                <Styled.NavButton>
                    <i className="far fa-clipboard"></i>
                    <span>게시판</span>
                </Styled.NavButton>
                <Styled.NavButton>
                    <i className="fas fa-pen"></i>
                    <span>글쓰기</span>
                </Styled.NavButton>
            </Styled.PageHeader>
            <Styled.StyledMain>
                <Styled.StyledSection>
                    <header>
                        <h2>게시글 리스트 영역</h2>
                    </header>
                    <Styled.StyledBoardList>
                        <BoardListCard props={{ data: dummy }} />
                        <BoardListCard props={{ data: dummy }} />
                        <BoardListCard props={{ data: dummy }} />
                        <BoardListCard props={{ data: dummy }} />
                        <BoardListCard props={{ data: dummy }} />
                        <BoardListCard props={{ data: dummy }} />
                        <BoardListCard props={{ data: dummy }} />
                        <BoardListCard props={{ data: dummy }} />
                    </Styled.StyledBoardList>
                </Styled.StyledSection>
                {/* <BoardDetailCard props={{ data: dummy }} /> */}
                <BoardWriteCard />
            </Styled.StyledMain>
        </Styled.PageWrapper>
    )
}