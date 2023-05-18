import React, { useState } from 'react'
import * as Style from './style';

export default function Header() {
    const [moved, setMoved] = useState(false);

    window.onload = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
                setMoved(true);
            } else {
                setMoved(false);
            }
        });
    }

    return (
        <Style.HeaderWrapper moved={moved ? true : false}>
            <Style.DivWrapper>
                <Style.HeaderTitle>
                    <a href="/">YOUCANCE</a>
                </Style.HeaderTitle>
                <nav>
                    <Style.HeaderNavList>
                        <li>
                            <a href="/">회원가입</a>
                        </li>
                        <li>
                            <a href="/">로그인</a>
                        </li>
                        <li>
                            <a href="/">회원정보</a>
                        </li>
                        <li>
                            <a href="/">로그아웃</a>
                        </li>
                    </Style.HeaderNavList>
                </nav>
            </Style.DivWrapper>
        </Style.HeaderWrapper>
    )
}
