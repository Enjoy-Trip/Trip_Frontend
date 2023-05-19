import React, { useState } from 'react'
import * as Style from './style';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

import { useDispatch } from 'react-redux';
import { clearUser } from 'redux/slice/userSlice';

export default function Header() {
    const [moved, setMoved] = useState(false);
    const user = useSelector(state => state.user);

    const dispatch = useDispatch();

    function signout() {
        dispatch(clearUser());
    }

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
                    <Link to="/">YOUCANCE</Link>
                </Style.HeaderTitle>
                <nav>
                    <Style.HeaderNavList>
                        {
                            user.refreshToken
                                ?
                                <>
                                    <li>
                                        <a href="/">회원정보</a>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={signout}>로그아웃</Link>
                                    </li>
                                </>
                                :
                                <li>
                                    <Link to="/login">로그인</Link>
                                </li>
                        }


                    </Style.HeaderNavList>
                </nav>
            </Style.DivWrapper>
        </Style.HeaderWrapper>
    )
}
