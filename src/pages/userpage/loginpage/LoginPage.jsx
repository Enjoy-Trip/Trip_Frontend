import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { loginUser } from 'redux/slice/userSlice'

import * as Styled from './style'
import loginpagemorning from 'assets/images/loginpagemorning.jpg'
import loginpageafternoon from 'assets/images/loginpageafternoon.jpg'
import loginpageevening from 'assets/images/loginpageevening.jpg'

import FormInputCol from 'components/input/formInputCol/FormInputCol'
import FormButton from 'components/button/formButton/FormButton'

import { Login } from 'servieces/UserServices'

const checkTime = () => {
    const date = new Date();
    const now = date.getHours();

    if (now >= 6 && now <= 11) {
        return {
            time: "morning",
            image: loginpagemorning
        };
    }

    else if (now >= 12 && now <= 18) {
        return {
            time: "afternoon",
            image: loginpageafternoon
        };
    }

    else {
        return {
            time: "evening",
            image: loginpageevening
        };
    }
}

export default function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const inputRef = useRef([]);
    const time = checkTime();

    console.log(process.env.REACT_APP_SERVER_IP);

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

    const handleCheck = async (e) => {
        e.preventDefault();

        // 회원가입 검증 처리
        // inputRef.current[0].value -> id input value 접근 가능
        // inputRef.current[1].value -> password input value 접근 가능
        const result = await Login(inputRef.current[0].value, inputRef.current[1].value);

        console.log(result);

        // 결과 출력까지만

        // dispatch(loginUser({
        //     accessToken: "test",
        //     refreshToken: "test"
        // }));

        // navigate('/');
    }

    return (
        <Styled.StyledMain time={time.time}>
            <Styled.StyledSection time={time.time}>
                <Styled.StyledSectionHeader>
                    <h2>회원정보 입력 영역</h2>
                </Styled.StyledSectionHeader>
                <Styled.StyledArticleWrapper time={time.time}>
                    <Styled.StyledArticle>
                        <header>
                            <Styled.StyledArticleTitle>Good {time.time}<span></span>Welcome back!!</Styled.StyledArticleTitle>
                        </header>
                        <Styled.StyledForm>
                            <FormInputCol data={{
                                text: 'Id',
                                type: 'text',
                                id: 'id',
                                name: 'id',
                                onChangeFunc: handleChange,
                                ref: (element) => (inputRef.current[0] = element),
                                placeholder: 'Your Id',
                                value: inputs.id
                            }} />
                            <FormInputCol data={{
                                text: 'Password',
                                type: 'password',
                                id: 'password',
                                name: 'password',
                                onChangeFunc: handleChange,
                                ref: (element) => (inputRef.current[1] = element),
                                placeholder: 'Your Password',
                                value: inputs.password
                            }} />
                            <FormButton data={{
                                onClickFunc: handleCheck,
                                content: "Sign in",
                                color: "blue"
                            }} />
                        </Styled.StyledForm>
                        <Styled.StyledArticleParagraph>Don‘t have an account?</Styled.StyledArticleParagraph>
                        <Styled.StyledArticleAnchor href="/user/register">Sign up</Styled.StyledArticleAnchor>
                    </Styled.StyledArticle>
                </Styled.StyledArticleWrapper>
                <Styled.StyledImage src={time.image} alt="" />
            </Styled.StyledSection>
        </Styled.StyledMain>
    )
}