import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux'
import { loginUser } from 'redux/slice/userSlice'

import * as Styled from './style'
import registerpagemorning from 'assets/images/registerpagemorning.jpg'
import registerpageafternoon from 'assets/images/registerpageafternoon.jpg'
import registerpageevening from 'assets/images/registerpageevening.jpg'

import FormInputCol from 'components/input/formInputCol/FormInputCol'
import FormButton from 'components/button/formButton/FormButton'

const checkTime = () => {
    const date = new Date();
    const now = date.getHours();

    if (now >= 6 && now <= 11) {
        return {
            time: "morning",
            image: registerpagemorning
        };
    }

    else if (now >= 12 && now <= 18) {
        return {
            time: "afternoon",
            image: registerpageafternoon
        };
    }

    else {
        return {
            time: "evening",
            image: registerpageevening
        };
    }
}

export default function RegisterPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const inputRef = useRef([]);
    const time = checkTime();

    const [inputs, setInputs] = useState({
        id: "",
        password: "",
        passwordConfirm: "",
        name: "",
        nickname: ""
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

        navigate('/user/login');
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
                            <Styled.StyledArticleTitle>Good {time.time}!<span></span>Become part of the family!!</Styled.StyledArticleTitle>
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
                            <FormInputCol data={{
                                text: 'Confirm Password',
                                type: 'password',
                                id: 'passwordConfirm',
                                name: 'passwordConfirm',
                                onChangeFunc: handleChange,
                                ref: (element) => (inputRef.current[2] = element),
                                placeholder: 'Confirm Your Password',
                                value: inputs.passwordConfirm
                            }} />
                            <FormInputCol data={{
                                text: 'Name',
                                type: 'text',
                                id: 'name',
                                name: 'name',
                                onChangeFunc: handleChange,
                                ref: (element) => (inputRef.current[3] = element),
                                placeholder: 'Your Name',
                                value: inputs.name
                            }} />
                            <FormInputCol data={{
                                text: 'Nickname',
                                type: 'text',
                                id: 'nickname',
                                name: 'nickname',
                                onChangeFunc: handleChange,
                                ref: (element) => (inputRef.current[4] = element),
                                placeholder: 'Your Nickname',
                                value: inputs.nickname
                            }} />
                            <FormButton data={{
                                onClickFunc: handleCheck,
                                content: "Create my account",
                                color: "blue"
                            }} />
                        </Styled.StyledForm>
                        <Styled.StyledArticleParagraph>Already have an account?</Styled.StyledArticleParagraph>
                        <Styled.StyledArticleAnchor href="/user/login">Sign in</Styled.StyledArticleAnchor>
                    </Styled.StyledArticle>
                </Styled.StyledArticleWrapper>
                <Styled.StyledImage src={time.image} alt="" />
            </Styled.StyledSection>
        </Styled.StyledMain>
    )
}