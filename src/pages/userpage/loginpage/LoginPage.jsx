import React, { useState, useRef, useCallback, useEffect } from 'react'
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
    const [writeShow, setWriteShow] = useState(-1);
    const buttonRef = useRef();

    const updateWriteShow = useCallback((e) => {
        e.stopPropagation();
        e.preventDefault();

        console.log('hi');

        setWriteShow(1 - writeShow);
    }, []);

    console.log(writeShow);

    // const unShowWriteShow = useCallback(() => {
    //     setWriteShow(0);
    // }, [writeShow]);

    // useEffect(() => {
    //     const button = buttonRef.current;

    //     console.log(button);

    //     button.addEventListener("click", updateWriteShow);
    //     window.addEventListener("click", unShowWriteShow);

    //     return () => {
    //         button.removeEventListener("click", updateWriteShow);
    //         window.removeEventListener("click", unShowWriteShow);
    //     };
    // }, [updateWriteShow, writeShow]);

    // console.log(buttonRef);
    // console.log(writeShow);

    // useEffect(() => {
    //     setWriteShow(-2);
    // }, []);

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
        const result = await Login(inputs.id, inputs.password);

        if (result) {
            dispatch(loginUser({
                accessToken: result['Access-Token'],
                refreshToken: result['Refresh-Token']
            }));

            navigate('/');
        }
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
                        <Styled.StyledArticleParagraph>or</Styled.StyledArticleParagraph>
                        <Styled.StyledArticleAnchor href="/user/register" onClick={updateWriteShow}>Forgot Password?</Styled.StyledArticleAnchor>
                    </Styled.StyledArticle>
                </Styled.StyledArticleWrapper>
                <Styled.StyledImage src={time.image} alt="" />
                <Styled.ArticleWrapper props={{ writeShow }} >
                    <Styled.FindArticle time={time.time}>
                        <header>
                            <h3>회원 정보 입력 영역</h3>
                        </header>
                        {/* <Styled.StyledForm>
                            <FormInputCol data={{
                                text: 'Id',
                                type: 'text',
                                id: 'id',
                                name: 'id',
                                ref: (element) => (inputRef.current[0] = element),
                                placeholder: 'Your Id',
                                value: inputs.id,
                                readOnly: true
                            }} />
                            <FormInputCol data={{
                                text: 'Password',
                                type: 'password',
                                id: 'password',
                                name: 'password',
                                onChangeFunc: handleChange,
                                ref: (element) => (inputRef.current[1] = element),
                                placeholder: 'New Password',
                                value: inputs.password
                            }} />
                            <FormInputCol data={{
                                text: 'Confirm Password',
                                type: 'password',
                                id: 'passwordConfirm',
                                name: 'passwordConfirm',
                                onChangeFunc: handleChange,
                                ref: (element) => (inputRef.current[2] = element),
                                placeholder: 'Confirm New Password',
                                value: inputs.passwordConfirm
                            }} />
                            <FormInputCol data={{
                                text: 'Name',
                                type: 'text',
                                id: 'name',
                                name: 'name',
                                onChangeFunc: handleChange,
                                ref: (element) => (inputRef.current[3] = element),
                                placeholder: 'New Name',
                                value: inputs.name
                            }} />
                            <FormInputCol data={{
                                text: 'Nickname',
                                type: 'text',
                                id: 'nickname',
                                name: 'nickname',
                                onChangeFunc: handleChange,
                                ref: (element) => (inputRef.current[4] = element),
                                placeholder: 'New Nickname',
                                value: inputs.nickname
                            }} />
                            <FormButton data={{
                                onClickFunc: handleUpdate,
                                content: "Update my account",
                                color: "blue"
                            }} />
                            <FormButton data={{
                                onClickFunc: handleDelete,
                                content: "Delete my account",
                                color: "red"
                            }} />
                        </Styled.StyledForm> */}
                    </Styled.FindArticle>
                </Styled.ArticleWrapper>
            </Styled.StyledSection>
        </Styled.StyledMain>
    )
}