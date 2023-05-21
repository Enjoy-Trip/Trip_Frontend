import React from 'react'
import * as Styled from './style'
import { Link } from 'react-router-dom'

import MyMap from 'components/map/MyMap'
import AttractionListCard from 'components/card/attractionListCard/AttractionListCard'
import AttractionDetailCard from 'components/card/attractionDetailCard/AttractionDetailCard'
import AttractionConditionDropBox from 'components/dropBox/attractionConditionDropBox/AttractionConditionDropBox'

function onClickForm(event) {
    event.preventDefault();
}

export default function AttractionPage() {
    const dummy = [{
        "contentid": "126508",
        "contenttypeid": "12",
        "title": "경복궁",
        "createdtime": "20041230090000",
        "modifiedtime": "20230321095145",
        "tel": "",
        "telname": "",
        "homepage": "경복궁 \u003ca href\u003d\"http://www.royalpalace.go.kr/\" target\u003d\"_blank\" title\u003d\"새창 : 경복궁 홈페이지로 이동\"\u003ehttp://www.royalpalace.go.kr\u003c/a\u003e\u003cbr /\u003e궁궐길라잡이 \u003ca href\u003d\"http://www.palaceguide.or.kr/\" target\u003d\"_blank\" title\u003d\"새창 : 궁궐길라잡이 홈페이지로 이동\"\u003ehttp://www.palaceguide.or.kr\u003c/a\u003e\u003cbr /\u003e한국의재발견 \u003ca href\u003d\"http://www.rekor.or.kr/\" target\u003d\"_blank\" title\u003d\"새창 : 한국의재발견 홈페이지로 이동\"\u003ehttp://www.rekor.or.kr\u003c/a\u003e\u003cbr /\u003e야간관람 예매\u003ca href\u003d\"https://ticket.11st.co.kr/Product/Detail?id\u003d266194\u0026prdNo\u003d4239172482\"title\u003d\"새창: 경복궁 야간관람 예매\"target\u003d\"_blank\"\u003ehttps://ticket.11st.co.kr/\u003c/a\u003e",
        "booktour": "1",
        "firstimage": "http://tong.visitkorea.or.kr/cms/resource/23/2678623_image2_1.jpg",
        "firstimage2": "http://tong.visitkorea.or.kr/cms/resource/23/2678623_image3_1.jpg",
        "cpyrhtDivCd": "Type3",
        "areacode": "1",
        "sigungucode": "23",
        "cat1": "A02",
        "cat2": "A0201",
        "cat3": "A02010100",
        "addr1": "서울특별시 종로구 사직로 161",
        "addr2": "",
        "zipcode": "03045",
        "mapx": "126.9769930325",
        "mapy": "37.5788222356",
        "mlevel": "6",
        "overview": "경복궁은 1395년 태조 이성계에 의해서 새로운 조선왕조의 법궁으로 지어졌다. 경복궁은 동궐(창덕궁)이나 서궐(경희궁)에 비해 위치가 북쪽에 있어 \u0027북궐\u0027이라 불리기도 했다. 경복궁은 5대 궁궐 가운데 으뜸의 규모와 건축미를 자랑한다. 경복궁 근정전에서 즉위식을 가진 왕들을 보면 제2대 정종, 제4대 세종, 제6대 단종, 제7대 세조, 제9대 성종, 제11대 중종, 제13대 명종 등이다. 경복궁은 임진왜란 때 상당수의 건물이 불타 없어진 아픔을 갖고 있으며, 고종 때에 흥선대원군의 주도 아래 7,700여칸에 이르는 건물들을 다시 세웠다. 그러나 또 다시 명성황후 시해사건이 일어나면서 왕조의 몰락과 함께 경복궁도 왕궁으로서의 기능을 상실하고 말았다. 경복궁에는 조선시대의 대표적인 건축물인 경회루와 향원정의 연못이 원형대로 남아 있으며, 근정전의 월대와 조각상들은 당시의 조각미술을 대표한다. 현재 흥례문 밖 서편에는 국립고궁 박물관이 위치하고 있고, 경복궁 내 향원정의 동편에는 국립민속 박물관이 위치하고 있다.\u003cbr /\u003e\u003cbr /\u003e* 주요문화재 \u003cbr /\u003e1) 사적 경복궁\u003cbr\u003e2) 국보 경복궁 근정전\u003cbr\u003e3) 국보 경복궁 경회루\u003cbr\u003e4) 보물 경복궁 자경전\u003cbr\u003e5) 보물 경복궁 자경전 십장생 굴뚝\u003cbr\u003e6) 보물 경복궁 아미산굴뚝\u003cbr\u003e7) 보물 경복궁 근정문 및 행각\u003cbr\u003e8) 보물 경복궁 풍기대\u003cbr\u003e"
    },
    {
        "contentid": "126509",
        "contenttypeid": "12",
        "title": "경복궁",
        "createdtime": "20041230090000",
        "modifiedtime": "20230321095145",
        "tel": "",
        "telname": "",
        "homepage": "경복궁 \u003ca href\u003d\"http://www.royalpalace.go.kr/\" target\u003d\"_blank\" title\u003d\"새창 : 경복궁 홈페이지로 이동\"\u003ehttp://www.royalpalace.go.kr\u003c/a\u003e\u003cbr /\u003e궁궐길라잡이 \u003ca href\u003d\"http://www.palaceguide.or.kr/\" target\u003d\"_blank\" title\u003d\"새창 : 궁궐길라잡이 홈페이지로 이동\"\u003ehttp://www.palaceguide.or.kr\u003c/a\u003e\u003cbr /\u003e한국의재발견 \u003ca href\u003d\"http://www.rekor.or.kr/\" target\u003d\"_blank\" title\u003d\"새창 : 한국의재발견 홈페이지로 이동\"\u003ehttp://www.rekor.or.kr\u003c/a\u003e\u003cbr /\u003e야간관람 예매\u003ca href\u003d\"https://ticket.11st.co.kr/Product/Detail?id\u003d266194\u0026prdNo\u003d4239172482\"title\u003d\"새창: 경복궁 야간관람 예매\"target\u003d\"_blank\"\u003ehttps://ticket.11st.co.kr/\u003c/a\u003e",
        "booktour": "1",
        "firstimage": "http://tong.visitkorea.or.kr/cms/resource/23/2678623_image2_1.jpg",
        "firstimage2": "http://tong.visitkorea.or.kr/cms/resource/23/2678623_image3_1.jpg",
        "cpyrhtDivCd": "Type3",
        "areacode": "1",
        "sigungucode": "23",
        "cat1": "A02",
        "cat2": "A0201",
        "cat3": "A02010100",
        "addr1": "서울특별시 종로구 사직로 161",
        "addr2": "",
        "zipcode": "03045",
        "mapx": "126.9769930325",
        "mapy": "37.5788222356",
        "mlevel": "6",
        "overview": "경복궁은 1395년 태조 이성계에 의해서 새로운 조선왕조의 법궁으로 지어졌다. 경복궁은 동궐(창덕궁)이나 서궐(경희궁)에 비해 위치가 북쪽에 있어 \u0027북궐\u0027이라 불리기도 했다. 경복궁은 5대 궁궐 가운데 으뜸의 규모와 건축미를 자랑한다. 경복궁 근정전에서 즉위식을 가진 왕들을 보면 제2대 정종, 제4대 세종, 제6대 단종, 제7대 세조, 제9대 성종, 제11대 중종, 제13대 명종 등이다. 경복궁은 임진왜란 때 상당수의 건물이 불타 없어진 아픔을 갖고 있으며, 고종 때에 흥선대원군의 주도 아래 7,700여칸에 이르는 건물들을 다시 세웠다. 그러나 또 다시 명성황후 시해사건이 일어나면서 왕조의 몰락과 함께 경복궁도 왕궁으로서의 기능을 상실하고 말았다. 경복궁에는 조선시대의 대표적인 건축물인 경회루와 향원정의 연못이 원형대로 남아 있으며, 근정전의 월대와 조각상들은 당시의 조각미술을 대표한다. 현재 흥례문 밖 서편에는 국립고궁 박물관이 위치하고 있고, 경복궁 내 향원정의 동편에는 국립민속 박물관이 위치하고 있다.\u003cbr /\u003e\u003cbr /\u003e* 주요문화재 \u003cbr /\u003e1) 사적 경복궁\u003cbr\u003e2) 국보 경복궁 근정전\u003cbr\u003e3) 국보 경복궁 경회루\u003cbr\u003e4) 보물 경복궁 자경전\u003cbr\u003e5) 보물 경복궁 자경전 십장생 굴뚝\u003cbr\u003e6) 보물 경복궁 아미산굴뚝\u003cbr\u003e7) 보물 경복궁 근정문 및 행각\u003cbr\u003e8) 보물 경복궁 풍기대\u003cbr\u003e"
    },
    {
        "contentid": "126510",
        "contenttypeid": "12",
        "title": "경복궁",
        "createdtime": "20041230090000",
        "modifiedtime": "20230321095145",
        "tel": "",
        "telname": "",
        "homepage": "경복궁 \u003ca href\u003d\"http://www.royalpalace.go.kr/\" target\u003d\"_blank\" title\u003d\"새창 : 경복궁 홈페이지로 이동\"\u003ehttp://www.royalpalace.go.kr\u003c/a\u003e\u003cbr /\u003e궁궐길라잡이 \u003ca href\u003d\"http://www.palaceguide.or.kr/\" target\u003d\"_blank\" title\u003d\"새창 : 궁궐길라잡이 홈페이지로 이동\"\u003ehttp://www.palaceguide.or.kr\u003c/a\u003e\u003cbr /\u003e한국의재발견 \u003ca href\u003d\"http://www.rekor.or.kr/\" target\u003d\"_blank\" title\u003d\"새창 : 한국의재발견 홈페이지로 이동\"\u003ehttp://www.rekor.or.kr\u003c/a\u003e\u003cbr /\u003e야간관람 예매\u003ca href\u003d\"https://ticket.11st.co.kr/Product/Detail?id\u003d266194\u0026prdNo\u003d4239172482\"title\u003d\"새창: 경복궁 야간관람 예매\"target\u003d\"_blank\"\u003ehttps://ticket.11st.co.kr/\u003c/a\u003e",
        "booktour": "1",
        "firstimage": "http://tong.visitkorea.or.kr/cms/resource/23/2678623_image2_1.jpg",
        "firstimage2": "http://tong.visitkorea.or.kr/cms/resource/23/2678623_image3_1.jpg",
        "cpyrhtDivCd": "Type3",
        "areacode": "1",
        "sigungucode": "23",
        "cat1": "A02",
        "cat2": "A0201",
        "cat3": "A02010100",
        "addr1": "서울특별시 종로구 사직로 161",
        "addr2": "",
        "zipcode": "03045",
        "mapx": "126.9769930325",
        "mapy": "37.5788222356",
        "mlevel": "6",
        "overview": "경복궁은 1395년 태조 이성계에 의해서 새로운 조선왕조의 법궁으로 지어졌다. 경복궁은 동궐(창덕궁)이나 서궐(경희궁)에 비해 위치가 북쪽에 있어 \u0027북궐\u0027이라 불리기도 했다. 경복궁은 5대 궁궐 가운데 으뜸의 규모와 건축미를 자랑한다. 경복궁 근정전에서 즉위식을 가진 왕들을 보면 제2대 정종, 제4대 세종, 제6대 단종, 제7대 세조, 제9대 성종, 제11대 중종, 제13대 명종 등이다. 경복궁은 임진왜란 때 상당수의 건물이 불타 없어진 아픔을 갖고 있으며, 고종 때에 흥선대원군의 주도 아래 7,700여칸에 이르는 건물들을 다시 세웠다. 그러나 또 다시 명성황후 시해사건이 일어나면서 왕조의 몰락과 함께 경복궁도 왕궁으로서의 기능을 상실하고 말았다. 경복궁에는 조선시대의 대표적인 건축물인 경회루와 향원정의 연못이 원형대로 남아 있으며, 근정전의 월대와 조각상들은 당시의 조각미술을 대표한다. 현재 흥례문 밖 서편에는 국립고궁 박물관이 위치하고 있고, 경복궁 내 향원정의 동편에는 국립민속 박물관이 위치하고 있다.\u003cbr /\u003e\u003cbr /\u003e* 주요문화재 \u003cbr /\u003e1) 사적 경복궁\u003cbr\u003e2) 국보 경복궁 근정전\u003cbr\u003e3) 국보 경복궁 경회루\u003cbr\u003e4) 보물 경복궁 자경전\u003cbr\u003e5) 보물 경복궁 자경전 십장생 굴뚝\u003cbr\u003e6) 보물 경복궁 아미산굴뚝\u003cbr\u003e7) 보물 경복궁 근정문 및 행각\u003cbr\u003e8) 보물 경복궁 풍기대\u003cbr\u003e"
    },
    {
        "contentid": "126511",
        "contenttypeid": "12",
        "title": "경복궁",
        "createdtime": "20041230090000",
        "modifiedtime": "20230321095145",
        "tel": "",
        "telname": "",
        "homepage": "경복궁 \u003ca href\u003d\"http://www.royalpalace.go.kr/\" target\u003d\"_blank\" title\u003d\"새창 : 경복궁 홈페이지로 이동\"\u003ehttp://www.royalpalace.go.kr\u003c/a\u003e\u003cbr /\u003e궁궐길라잡이 \u003ca href\u003d\"http://www.palaceguide.or.kr/\" target\u003d\"_blank\" title\u003d\"새창 : 궁궐길라잡이 홈페이지로 이동\"\u003ehttp://www.palaceguide.or.kr\u003c/a\u003e\u003cbr /\u003e한국의재발견 \u003ca href\u003d\"http://www.rekor.or.kr/\" target\u003d\"_blank\" title\u003d\"새창 : 한국의재발견 홈페이지로 이동\"\u003ehttp://www.rekor.or.kr\u003c/a\u003e\u003cbr /\u003e야간관람 예매\u003ca href\u003d\"https://ticket.11st.co.kr/Product/Detail?id\u003d266194\u0026prdNo\u003d4239172482\"title\u003d\"새창: 경복궁 야간관람 예매\"target\u003d\"_blank\"\u003ehttps://ticket.11st.co.kr/\u003c/a\u003e",
        "booktour": "1",
        "firstimage": "http://tong.visitkorea.or.kr/cms/resource/23/2678623_image2_1.jpg",
        "firstimage2": "http://tong.visitkorea.or.kr/cms/resource/23/2678623_image3_1.jpg",
        "cpyrhtDivCd": "Type3",
        "areacode": "1",
        "sigungucode": "23",
        "cat1": "A02",
        "cat2": "A0201",
        "cat3": "A02010100",
        "addr1": "서울특별시 종로구 사직로 161",
        "addr2": "",
        "zipcode": "03045",
        "mapx": "126.9769930325",
        "mapy": "37.5788222356",
        "mlevel": "6",
        "overview": "경복궁은 1395년 태조 이성계에 의해서 새로운 조선왕조의 법궁으로 지어졌다. 경복궁은 동궐(창덕궁)이나 서궐(경희궁)에 비해 위치가 북쪽에 있어 \u0027북궐\u0027이라 불리기도 했다. 경복궁은 5대 궁궐 가운데 으뜸의 규모와 건축미를 자랑한다. 경복궁 근정전에서 즉위식을 가진 왕들을 보면 제2대 정종, 제4대 세종, 제6대 단종, 제7대 세조, 제9대 성종, 제11대 중종, 제13대 명종 등이다. 경복궁은 임진왜란 때 상당수의 건물이 불타 없어진 아픔을 갖고 있으며, 고종 때에 흥선대원군의 주도 아래 7,700여칸에 이르는 건물들을 다시 세웠다. 그러나 또 다시 명성황후 시해사건이 일어나면서 왕조의 몰락과 함께 경복궁도 왕궁으로서의 기능을 상실하고 말았다. 경복궁에는 조선시대의 대표적인 건축물인 경회루와 향원정의 연못이 원형대로 남아 있으며, 근정전의 월대와 조각상들은 당시의 조각미술을 대표한다. 현재 흥례문 밖 서편에는 국립고궁 박물관이 위치하고 있고, 경복궁 내 향원정의 동편에는 국립민속 박물관이 위치하고 있다.\u003cbr /\u003e\u003cbr /\u003e* 주요문화재 \u003cbr /\u003e1) 사적 경복궁\u003cbr\u003e2) 국보 경복궁 근정전\u003cbr\u003e3) 국보 경복궁 경회루\u003cbr\u003e4) 보물 경복궁 자경전\u003cbr\u003e5) 보물 경복궁 자경전 십장생 굴뚝\u003cbr\u003e6) 보물 경복궁 아미산굴뚝\u003cbr\u003e7) 보물 경복궁 근정문 및 행각\u003cbr\u003e8) 보물 경복궁 풍기대\u003cbr\u003e"
    }
        , {
        "contentid": "126512",
        "contenttypeid": "12",
        "title": "경복궁",
        "createdtime": "20041230090000",
        "modifiedtime": "20230321095145",
        "tel": "",
        "telname": "",
        "homepage": "경복궁 \u003ca href\u003d\"http://www.royalpalace.go.kr/\" target\u003d\"_blank\" title\u003d\"새창 : 경복궁 홈페이지로 이동\"\u003ehttp://www.royalpalace.go.kr\u003c/a\u003e\u003cbr /\u003e궁궐길라잡이 \u003ca href\u003d\"http://www.palaceguide.or.kr/\" target\u003d\"_blank\" title\u003d\"새창 : 궁궐길라잡이 홈페이지로 이동\"\u003ehttp://www.palaceguide.or.kr\u003c/a\u003e\u003cbr /\u003e한국의재발견 \u003ca href\u003d\"http://www.rekor.or.kr/\" target\u003d\"_blank\" title\u003d\"새창 : 한국의재발견 홈페이지로 이동\"\u003ehttp://www.rekor.or.kr\u003c/a\u003e\u003cbr /\u003e야간관람 예매\u003ca href\u003d\"https://ticket.11st.co.kr/Product/Detail?id\u003d266194\u0026prdNo\u003d4239172482\"title\u003d\"새창: 경복궁 야간관람 예매\"target\u003d\"_blank\"\u003ehttps://ticket.11st.co.kr/\u003c/a\u003e",
        "booktour": "1",
        "firstimage": "http://tong.visitkorea.or.kr/cms/resource/23/2678623_image2_1.jpg",
        "firstimage2": "http://tong.visitkorea.or.kr/cms/resource/23/2678623_image3_1.jpg",
        "cpyrhtDivCd": "Type3",
        "areacode": "1",
        "sigungucode": "23",
        "cat1": "A02",
        "cat2": "A0201",
        "cat3": "A02010100",
        "addr1": "서울특별시 종로구 사직로 161",
        "addr2": "",
        "zipcode": "03045",
        "mapx": "126.9769930325",
        "mapy": "37.5788222356",
        "mlevel": "6",
        "overview": "경복궁은 1395년 태조 이성계에 의해서 새로운 조선왕조의 법궁으로 지어졌다. 경복궁은 동궐(창덕궁)이나 서궐(경희궁)에 비해 위치가 북쪽에 있어 \u0027북궐\u0027이라 불리기도 했다. 경복궁은 5대 궁궐 가운데 으뜸의 규모와 건축미를 자랑한다. 경복궁 근정전에서 즉위식을 가진 왕들을 보면 제2대 정종, 제4대 세종, 제6대 단종, 제7대 세조, 제9대 성종, 제11대 중종, 제13대 명종 등이다. 경복궁은 임진왜란 때 상당수의 건물이 불타 없어진 아픔을 갖고 있으며, 고종 때에 흥선대원군의 주도 아래 7,700여칸에 이르는 건물들을 다시 세웠다. 그러나 또 다시 명성황후 시해사건이 일어나면서 왕조의 몰락과 함께 경복궁도 왕궁으로서의 기능을 상실하고 말았다. 경복궁에는 조선시대의 대표적인 건축물인 경회루와 향원정의 연못이 원형대로 남아 있으며, 근정전의 월대와 조각상들은 당시의 조각미술을 대표한다. 현재 흥례문 밖 서편에는 국립고궁 박물관이 위치하고 있고, 경복궁 내 향원정의 동편에는 국립민속 박물관이 위치하고 있다.\u003cbr /\u003e\u003cbr /\u003e* 주요문화재 \u003cbr /\u003e1) 사적 경복궁\u003cbr\u003e2) 국보 경복궁 근정전\u003cbr\u003e3) 국보 경복궁 경회루\u003cbr\u003e4) 보물 경복궁 자경전\u003cbr\u003e5) 보물 경복궁 자경전 십장생 굴뚝\u003cbr\u003e6) 보물 경복궁 아미산굴뚝\u003cbr\u003e7) 보물 경복궁 근정문 및 행각\u003cbr\u003e8) 보물 경복궁 풍기대\u003cbr\u003e"
    }];

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
                        <AttractionConditionDropBox props={{ icon: <i className="fas fa-location-arrow"></i>, text: '지역' }} />
                        <AttractionConditionDropBox props={{ icon: <i className="fas fa-tasks-alt"></i>, text: '세부 지역' }} />
                        <AttractionConditionDropBox props={{ icon: <i className="fas fa-list"></i>, text: '분류' }} />
                    </Styled.ConditionList>
                    <Styled.AttractionList>
                        {
                            dummy.map((data, index) => {
                                return <AttractionListCard key={data.contentid} props={{ data, index }} />
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
                    <AttractionDetailCard props={{ data: dummy[0] }} />
                }
            </Styled.PageMain>
        </Styled.PageWrapper>
    )
}
