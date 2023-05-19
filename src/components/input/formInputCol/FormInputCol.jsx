import React from 'react'
import * as Styled from './style'

export default function FormInputCol({ data: {
    text, type, id, name, onChangeFunc, ref, placeholder
}}) {

    return (
        <>
            <Styled.StyledLabel htmlFor={id}>{text}</Styled.StyledLabel>
            <Styled.StyledInput type={type} id={id} name={name} onChange={onChangeFunc} ref={ref} placeholder={placeholder} />
        </>
    )
}