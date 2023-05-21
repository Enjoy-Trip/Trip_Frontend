import React from 'react'
import * as Styled from './style'

export default function AttractionConditionDropBox({ props: {
    icon, text
}}) {
    return (
        <Styled.ConditionListItem>
            <Styled.ConditionButton>
                {icon}
                <span>{text}</span>
            </Styled.ConditionButton>
            <Styled.ConditionNameList>
                <Styled.ConditionNameListItem>
                    <Styled.ConditionNameButton>
                        <span>더미</span>
                    </Styled.ConditionNameButton>
                </Styled.ConditionNameListItem>
                <Styled.ConditionNameListItem>
                    <Styled.ConditionNameButton>
                        <span>더미</span>
                    </Styled.ConditionNameButton>
                </Styled.ConditionNameListItem>
                <Styled.ConditionNameListItem>
                    <Styled.ConditionNameButton>
                        <span>더미</span>
                    </Styled.ConditionNameButton>
                </Styled.ConditionNameListItem>
                <Styled.ConditionNameListItem>
                    <Styled.ConditionNameButton>
                        <span>더미</span>
                    </Styled.ConditionNameButton>
                </Styled.ConditionNameListItem>
                <Styled.ConditionNameListItem>
                    <Styled.ConditionNameButton>
                        <span>더미</span>
                    </Styled.ConditionNameButton>
                </Styled.ConditionNameListItem>
                <Styled.ConditionNameListItem>
                    <Styled.ConditionNameButton>
                        <span>더미</span>
                    </Styled.ConditionNameButton>
                </Styled.ConditionNameListItem>
            </Styled.ConditionNameList>
        </Styled.ConditionListItem>
    )
}