import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router'

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

export default function UserPage() {
    const navigate = useNavigate();
    const inputRef = useRef([]);
    const time = checkTime();

    const [inputs, setInputs] = useState({
        id: "test",
        password: "test",
        passwordConfirm: "",
        name: "test",
        nickname: "test"
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

        navigate('/');
    }

    return (
        <Styled.StyledMain time={time.time}>
            <Styled.StyledSection time={time.time}>
                <Styled.StyledSectionHeader>
                    <h2>회원정보 입력 영역</h2>
                </Styled.StyledSectionHeader>
                <Styled.StyledImage src={time.image} alt="" />
                <Styled.StyledArticleWrapper>
                    <Styled.StyledArticle time={time.time}>
                        <header>
                            <Styled.StyledArticleTitle>Good {time.time}!<span></span>Lorem ipsum dolor sit amet.!!</Styled.StyledArticleTitle>
                        </header>
                        <Styled.StyledForm>
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
                                onClickFunc: handleCheck,
                                content: "Update my account",
                                color: "blue"
                            }} />
                            <FormButton data={{
                                onClickFunc: handleCheck,
                                content: "Delete my account",
                                color: "red"
                            }} />
                        </Styled.StyledForm>
                    </Styled.StyledArticle>
                </Styled.StyledArticleWrapper>
            </Styled.StyledSection>
        </Styled.StyledMain>
    )
}