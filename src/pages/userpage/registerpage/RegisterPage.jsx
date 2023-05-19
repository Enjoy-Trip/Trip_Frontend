import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { loginUser } from 'redux/slice/userSlice'
import { Link } from 'react-router-dom'

import * as Styled from './style'
import loginpageImage from 'assets/images/loginpageImage.jpg'

export default function RegisterPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const inputRef = useRef([]);

    const [inputs, setInputs] = useState({
        id: "",
        password: "",
    });



    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    }

    const handleCheck = (e) => {
        e.preventDefault();

        // 회원가입 검증 처리
        // inputRef.current[0].value -> id input value 접근 가능
        // inputRef.current[1].value -> password input value 접근 가능

        // 결과 출력까지만

        dispatch(loginUser({
            accessToken: "test",
            refreshToken: "test"
        }));

        navigate('/');
    }

    return (
        <Styled.StyledMain>
            <Styled.StyledSection>
                <Styled.StyledSectionHeader>
                    <h2>회원정보 입력 영역</h2>
                </Styled.StyledSectionHeader>
                <Styled.StyledArticle>
                    <header>
                        <h3>로그인 영역</h3>
                    </header>
                    <Styled.StyledForm>
                        <label
                            htmlFor='id'>
                            아이디
                        </label>
                        <input
                            type='text'
                            id='id'
                            name='id'
                            onChange={handleChange}
                            ref={(element) => (inputRef.current[0] = element)} />
                        <label
                            htmlFor='password'>
                            비밀번호
                        </label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            onChange={handleChange}
                            ref={(element) => (inputRef.current[1] = element)} />
                        <label
                            htmlFor='password'>
                            비밀번호
                        </label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            onChange={handleChange}
                            ref={(element) => (inputRef.current[1] = element)} />
                        <label
                            htmlFor='password'>
                            비밀번호
                        </label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            onChange={handleChange}
                            ref={(element) => (inputRef.current[1] = element)} />
                        <button
                            onClick={handleCheck}>
                            로그인
                        </button>
                    </Styled.StyledForm>
                    <p>Don‘t have an account?</p>
                    <Link to="/register">Sign up</Link>
                </Styled.StyledArticle>
                <Styled.StyledImage src={loginpageImage} alt="" />
            </Styled.StyledSection>
        </Styled.StyledMain>
    )
}