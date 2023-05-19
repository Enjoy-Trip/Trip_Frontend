import React, { useState } from 'react'
import * as Style from './style';
import { Link, useLocation  } from 'react-router-dom';
import { useSelector } from "react-redux";

import { useDispatch } from 'react-redux';
import { clearUser } from 'redux/slice/userSlice';

const urls = ['/user/login', '/user/register', '/user/modify']

const checkTime = (location) => {
    if (!urls.includes(location.pathname)) {
        return "";
    }

    const date = new Date();
    const now = date.getHours();

    if (now >= 6 && now <= 11) {
        return "morning";
    }

    else if (now >= 12 && now <= 18) {
        return "afternoon";
    }

    else {
        return "evening";
    }    
}

export default function Header() {
    const [moved, setMoved] = useState(false);
    const user = useSelector(state => state.user);
    const location = useLocation();
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
        <Style.HeaderWrapper moved={moved ? true : false} time={checkTime(location)}>
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
                                        <a href="/user">회원정보</a>
                                    </li>
                                    <li>
                                        <Link to="/" onClick={signout}>로그아웃</Link>
                                    </li>
                                </>
                                :
                                <li>
                                    <Link to="/user/login" >로그인</Link>
                                </li>
                        }


                    </Style.HeaderNavList>
                </nav>
            </Style.DivWrapper>
        </Style.HeaderWrapper>
    )
}
