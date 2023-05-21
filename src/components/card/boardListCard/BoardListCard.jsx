import React from 'react'
import { Link } from 'react-router-dom'
import * as Styled from './style'

export default function BoardListCard({ props: { data } }) {
    return (
        <Styled.StyledListItem>
            <Link to="/" onClick={e => e.preventDefault()}>
                <Styled.StyledArticle title={data.boardTitle} color={'blue'}>
                    <header>
                        <h3>게시글 요약</h3>
                    </header>
                    <img src={data.boardImages[0]} alt="" />
                </Styled.StyledArticle>
            </Link>
        </Styled.StyledListItem>
    )
}