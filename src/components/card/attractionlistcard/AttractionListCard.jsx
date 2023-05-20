import React from 'react'
import { Link } from 'react-router-dom'
import * as Styled from './style'

export default function AttractionListCard({ props: { data, index } }) {
    return (
        <li>
            <Link to="/">
                <Styled.AttractionArticle>
                    <Styled.AttractionArticleImageWrapper>
                        <Styled.AttractionArticleImage src={data.firstimage} alt="" />
                    </Styled.AttractionArticleImageWrapper>
                    <Styled.AttractionArticleHeader>
                        <Styled.AttractionTitle>{data.title}</Styled.AttractionTitle>
                        <Styled.AttractionLike>
                            <span>좋아요</span>
                            <i className="fa-regular fa-heart"></i>
                            <i className="fa-solid fa-heart"></i>
                        </Styled.AttractionLike>
                    </Styled.AttractionArticleHeader>
                    <Styled.AttractionParagraph>{data.addr1}</Styled.AttractionParagraph>
                </Styled.AttractionArticle>
            </Link>
        </li>
    )
}
