import { useEffect, useState } from 'react'
import * as Styled from './style'
import { Link } from 'react-router-dom'

import MyMap from 'components/map/MyMap'
import AttractionListCard from 'components/card/attractionListCard/AttractionListCard'
import AttractionDetailCard from 'components/card/attractionDetailCard/AttractionDetailCard'
import AttractionConditionDropBox from 'components/dropBox/attractionConditionDropBox/AttractionConditionDropBox'

import { getAreaList, getAreaDetailList, getAttractionList, getAttractionDetail } from 'servieces/AttractionService';

function onClickForm(event) {
    event.preventDefault();
}

export default function AttractionPage() {
    const [attractionList, setAttractionList] = useState([]);
    const [conditions, setConditions] = useState({
        "area": "",
        "areaList": [],
        "sigungu": "",
        "sigunguList": [],
        "contenttype": "",
        "contenttypeList": []
    });
    const [attractionDetail, setAttractionDetail] = useState({});

    useEffect(() => {
        const attrcationList = async function() {
            if (!conditions.area || !conditions.contenttype || !conditions.sigungu) {
                return;
            }
    
            const areaData = conditions.areaList.filter(element => element.name === conditions.area)[0];
            const contenttypeData = conditions.contenttypeList.filter(element => element.name === conditions.contenttype)[0];
            const areaDetailData = conditions.sigunguList.filter(element => element.name === conditions.sigungu)[0];
    
            const result = await getAttractionList(areaData.code, contenttypeData.code, areaDetailData.code);
    
            if (result.length == 0) {
                setAttractionList([]);
                return;
            }

            setAttractionList(result.filter(attraction => attraction.homepage === "" ? false : true).filter(attraction => attraction.overview === "" || attraction.overview === "-" ? false : true));
        }

        attrcationList();
    }, [conditions.area, conditions.contenttype, conditions.sigungu]);

    useEffect(() => {
        const getData = async () => {
            if (conditions.areaList.length !== 0 && conditions.contenttypeList.length !== 0) {
                return;
            }

            const areaList = await getAreaList();
            const contentTypeList = [
                {
                    'name': '관광지',
                    'code': 12,
                },
                {
                    'name': '문화시설',
                    'code': 14,
                },
                {
                    'name': '축제공연행사',
                    'code': 15,
                },
                {
                    'name': '레포츠',
                    'code': 28,
                },
                {
                    'name': '숙박',
                    'code': 32,
                },
                {
                    'name': '쇼핑',
                    'code': 38,
                },
                {
                    'name': '음식점',
                    'code': 39,
                }
            ]

            setConditions({
                ...conditions,
                "areaList": areaList,
                "contenttypeList": contentTypeList
            })
        }

        getData();
    }, []);

    useEffect(() => {
        const getData = async () => {
            const data = conditions.areaList.filter(element => element.name === conditions.area)[0];

            if (!data) {
                return
            }

            const sigunguList = await getAreaDetailList(data.code);

            setConditions({
                ...conditions,
                "sigunguList": sigunguList
            })
        }

        getData();
    }, [conditions.area]);

    const AttractionClickHandler = async (e) => {
        e.preventDefault();
        const contentid = e.currentTarget.childNodes[0].childNodes[0].innerText;

        const result = await getAttractionDetail(contentid);

        setAttractionDetail(result);
    }

    return (
        <Styled.PageWrapper>
            <Styled.PageHeader>
                <Link to="/">
                    <Styled.PageTitle>
                        <span>YOUCANCE</span>
                        <Styled.PageLogo>Y</Styled.PageLogo>
                    </Styled.PageTitle>
                </Link>
                <Styled.NavButton>
                    <i className="fa-solid fa-location-dot"></i>
                    <span>지도 홈</span>
                </Styled.NavButton>
                <Styled.NavButton>
                    <i className="fa-solid fa-signs-post"></i>
                    <span>지역 홈</span>
                </Styled.NavButton>
            </Styled.PageHeader>
            <Styled.PageMain>
                <Styled.SectionResult>
                    <Styled.SectionResultHeader>
                        <h2>결과 출력 부분</h2>
                    </Styled.SectionResultHeader>
                    <Styled.SearchForm action="/" onClick={onClickForm}>
                        <Styled.SearchButton>
                            <span>찾기</span>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </Styled.SearchButton>
                        <label htmlFor="searchInput">검색어 입력</label>
                        <Styled.SearchInput type="text" id="searchInput" placeholder='지역, 장소 검색' />
                    </Styled.SearchForm>
                    <Styled.ConditionList>
                        <AttractionConditionDropBox props={{ 
                            icon: <i className="fas fa-location-arrow"></i>, 
                            text: '지역',
                            conditions,
                            setConditions,
                            type: 'area'
                        }} />
                        <AttractionConditionDropBox props={{
                            icon: <i className="fas fa-tasks-alt"></i>, 
                            text: '세부 지역',
                            conditions,
                            setConditions,
                            type: 'sigungu'
                        }} />
                        <AttractionConditionDropBox props={{
                            icon: <i className="fas fa-list"></i>, 
                            text: '분류',
                            conditions,
                            setConditions,
                            type: 'contenttype'
                        }} />
                    </Styled.ConditionList>
                    <Styled.AttractionList>
                        {
                            attractionList.filter(data => data.firstimage ? true : false).map((data) => {
                                return <AttractionListCard key={data.contentid} props={{ data, AttractionClickHandler }} />
                            })
                        }
                    </Styled.AttractionList>
                </Styled.SectionResult>
                <section>
                    <Styled.PageMapSectionHeader>
                        <h2>지도 영역</h2>
                    </Styled.PageMapSectionHeader>
                    {/* <MyMap /> */}
                </section>
                {
                    attractionDetail.contentid ? <AttractionDetailCard props={{ data: attractionDetail }} /> : <></>
                }
            </Styled.PageMain>
        </Styled.PageWrapper>
    )
}
