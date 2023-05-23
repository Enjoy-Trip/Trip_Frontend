import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import * as Styled from './style'

import BoardListCard from 'components/card/boardListCard/BoardListCard'
import BoardDetailCard from 'components/card/boardDetailCard/BoardDetailCard'
import BoardWriteCard from 'components/card/boardWriteCard/BoardWriteCard'

import { getBoardList, getBoardDetail } from 'servieces/BoardService'

export default function BoardPage() {
    const [boardList, setBoardList] = useState([]);
    const [boardDetail, setBoardDetail] = useState({});
    const [detailShow, setDetailShow] = useState(-1);
    const [writeShow, setWriteShow] = useState(-1);
    const linksRef = useRef([]);
    const buttonRef = useRef();

    const updateDetailShow = useCallback((e) => {
        const boardDetail = async (boardNo) => {
            const result = await getBoardDetail(boardNo);

            setBoardDetail(result)
        }

        e.preventDefault();
        e.stopPropagation();

        boardDetail(e.currentTarget.childNodes[0].innerText);

        setDetailShow(1);
    }, [detailShow]);

    const unShowDetailShow = useCallback(() => {
        setDetailShow(0);
    }, [detailShow]);

    useEffect(() => {
        const links = linksRef.current;

        links.forEach(link => link.addEventListener("click", updateDetailShow));
        window.addEventListener("click", unShowDetailShow);

        return () => {
            links.forEach(link => {
                if (!link) {
                    return;
                }

                link.removeEventListener("click", updateDetailShow)}
            );
            window.removeEventListener("click", unShowDetailShow);
        };
    }, [updateDetailShow, boardList]);

    const updateWriteShow = useCallback((e) => {
        e.stopPropagation();
        e.preventDefault();

        setWriteShow(1);
    }, [writeShow]);

    const unShowWriteShow = useCallback(() => {
        setWriteShow(0);
    }, [writeShow]);

    useEffect(() => {
        const button = buttonRef.current;

        button.addEventListener("click", updateWriteShow);
        window.addEventListener("click", unShowWriteShow);

        return () => {
            button.removeEventListener("click", updateWriteShow);
            window.removeEventListener("click", unShowWriteShow);
        };
    }, [updateWriteShow, boardList]);

    useEffect(() => {
        const getBoard = async () => {
            const result = await getBoardList();

            setBoardList(result);
        }

        getBoard();
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setDetailShow(0);
        }, 100);
    }, [boardList]);

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
                <Styled.NavButton ref={buttonRef}>
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
                        {
                            boardList ?
                                boardList.map((data, index) => <BoardListCard
                                    key={data.boardNo}
                                    props={{
                                        data,
                                        linksRef,
                                        index
                                    }}
                                />
                                ) : <></>
                        }
                    </Styled.StyledBoardList>
                </Styled.StyledSection>
                <BoardDetailCard props={{ data: boardDetail, detailShow }} />
                <BoardWriteCard props={{ writeShow }} />
            </Styled.StyledMain>
        </Styled.PageWrapper>
    )
}