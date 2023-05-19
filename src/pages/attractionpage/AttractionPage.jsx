import React from 'react'
import * as Styled from './style'
import { Link } from 'react-router-dom'

import MyMap from 'components/map/MyMap'

export default function AttractionPage() {
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
                    <i className="fa-solid fa-location-dot"></i>
                    <span>지도 홈</span>
                </Styled.NavButton>
                <Styled.NavButton>
                    <i className="fa-solid fa-signs-post"></i>
                    <span>지역 홈</span>
                </Styled.NavButton>
            </Styled.PageHeader>
            <main>
                <section>
                    <Styled.PageMapSectionHeader>
                        <h2>지도 영역</h2>
                    </Styled.PageMapSectionHeader>
                    <MyMap />
                </section>
            </main>
        </Styled.PageWrapper>
    )
}
