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
                        <Styled.AttractionParagraph>{data.addr1}</Styled.AttractionParagraph>
                    </Styled.AttractionArticleHeader>
                </Styled.AttractionArticle>
            </Link>
        </li>
    )
}
