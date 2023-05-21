import React, { useRef } from 'react'
import * as Styled from './style'
import { Link } from 'react-router-dom';

const dummyImages = [
    {
        "contentid": "126508",
        "originimgurl": "http://tong.visitkorea.or.kr/cms/resource/39/1568039_image2_1.jpg",
        "imgname": "경복궁",
        "smallimageurl": "http://tong.visitkorea.or.kr/cms/resource/39/1568039_image3_1.jpg",
        "cpyrhtDivCd": "Type3",
        "serialnum": "1568039_6"
    },
    {
        "contentid": "126508",
        "originimgurl": "http://tong.visitkorea.or.kr/cms/resource/44/1568044_image2_1.jpg",
        "imgname": "경복궁",
        "smallimageurl": "http://tong.visitkorea.or.kr/cms/resource/44/1568044_image3_1.jpg",
        "cpyrhtDivCd": "Type3",
        "serialnum": "1568044_8"
    },
    {
        "contentid": "126508",
        "originimgurl": "http://tong.visitkorea.or.kr/cms/resource/61/2005761_image2_1.jpg",
        "imgname": "서울_경복궁04",
        "smallimageurl": "http://tong.visitkorea.or.kr/cms/resource/61/2005761_image3_1.jpg",
        "cpyrhtDivCd": "Type3",
        "serialnum": "2005761_1"
    },
    {
        "contentid": "126508",
        "originimgurl": "http://tong.visitkorea.or.kr/cms/resource/67/2005767_image2_1.jpg",
        "imgname": "서울_경복궁10",
        "smallimageurl": "http://tong.visitkorea.or.kr/cms/resource/67/2005767_image3_1.jpg",
        "cpyrhtDivCd": "Type3",
        "serialnum": "2005767_4"
    },
    {
        "contentid": "126508",
        "originimgurl": "http://tong.visitkorea.or.kr/cms/resource/84/2612884_image2_1.jpg",
        "imgname": "경복궁_1",
        "smallimageurl": "http://tong.visitkorea.or.kr/cms/resource/84/2612884_image3_1.jpg",
        "cpyrhtDivCd": "Type3",
        "serialnum": "2612884_3"
    },
    {
        "contentid": "126508",
        "originimgurl": "http://tong.visitkorea.or.kr/cms/resource/22/2678622_image2_1.jpg",
        "imgname": "경복궁_사진갤러리",
        "smallimageurl": "http://tong.visitkorea.or.kr/cms/resource/22/2678622_image3_1.jpg",
        "cpyrhtDivCd": "Type3",
        "serialnum": "2678622_9"
    },
    {
        "contentid": "126508",
        "originimgurl": "http://tong.visitkorea.or.kr/cms/resource/27/2678627_image2_1.jpg",
        "imgname": "경복궁_사진갤러리",
        "smallimageurl": "http://tong.visitkorea.or.kr/cms/resource/27/2678627_image3_1.jpg",
        "cpyrhtDivCd": "Type3",
        "serialnum": "2678627_5"
    },
    {
        "contentid": "126508",
        "originimgurl": "http://tong.visitkorea.or.kr/cms/resource/28/2678628_image2_1.jpg",
        "imgname": "경복궁_사진갤러리",
        "smallimageurl": "http://tong.visitkorea.or.kr/cms/resource/28/2678628_image3_1.jpg",
        "cpyrhtDivCd": "Type3",
        "serialnum": "2678628_7"
    },
    {
        "contentid": "126508",
        "originimgurl": "http://tong.visitkorea.or.kr/cms/resource/32/2678632_image2_1.jpg",
        "imgname": "경복궁_사진갤러리",
        "smallimageurl": "http://tong.visitkorea.or.kr/cms/resource/32/2678632_image3_1.jpg",
        "cpyrhtDivCd": "Type3",
        "serialnum": "2678632_2"
    },
    {
        "contentid": "126508",
        "originimgurl": "http://tong.visitkorea.or.kr/cms/resource/37/1568037_image2_1.jpg",
        "imgname": "경복궁",
        "smallimageurl": "http://tong.visitkorea.or.kr/cms/resource/37/1568037_image3_1.jpg",
        "cpyrhtDivCd": "Type3",
        "serialnum": "1568037_11"
    }
];

export default function AttractionDetailCard({ props: { data } }) {
    const CategoryRef = useRef([]);

    return (
        <Styled.SectionDetail>
            <Styled.HeaderImage src={data.firstimage} alt="" />
            <Styled.SectionHeader>
                <Styled.SectionHeaderWrapper>
                    <Styled.SectionTitle>{data.title}</Styled.SectionTitle>
                    <Styled.SectionHeaderParagraph>분류</Styled.SectionHeaderParagraph>
                </Styled.SectionHeaderWrapper>
                <Styled.SectionHeaderList>
                    <Styled.SectionHeaderListItem>
                        <Styled.SectionHeaderListItemButton>
                            <i className="fa-regular fa-heart"></i>
                            <i className="fa-solid fa-heart"></i>
                            <span>좋아요</span>
                        </Styled.SectionHeaderListItemButton>
                    </Styled.SectionHeaderListItem>
                    <Styled.SectionHeaderListItem>
                        <Styled.SectionHeaderListItemButton>
                            <i className="fas fa-search"></i>
                            <span>검색</span>
                        </Styled.SectionHeaderListItemButton>
                    </Styled.SectionHeaderListItem>
                    <Styled.SectionHeaderListItem>
                        <Styled.SectionHeaderListItemButton>
                            <i className="far fa-sticky-note"></i>
                            <span>계획</span>
                        </Styled.SectionHeaderListItemButton>
                    </Styled.SectionHeaderListItem>
                </Styled.SectionHeaderList>
            </Styled.SectionHeader>
            <Styled.SectionCategoryList>
                <Styled.SectionCategoryListItem>
                    <Styled.SectionCategoryButton ref={(element) => (CategoryRef.current[0] = element)}>
                        <span>홈</span>
                    </Styled.SectionCategoryButton>
                </Styled.SectionCategoryListItem>
                <Styled.SectionCategoryListItem>
                    <Styled.SectionCategoryButton ref={(element) => (CategoryRef.current[1] = element)}>
                        <span>리뷰</span>
                    </Styled.SectionCategoryButton>
                </Styled.SectionCategoryListItem>
                <Styled.SectionCategoryListItem>
                    <Styled.SectionCategoryButton ref={(element) => (CategoryRef.current[2] = element)}>
                        <span>사진</span>
                    </Styled.SectionCategoryButton>
                </Styled.SectionCategoryListItem>
            </Styled.SectionCategoryList>
            <Styled.HomeWrapper>
                <Styled.HomeParahraph>
                    <i className="fas fa-location"></i>
                    <span>{data.addr1}{data.addr2 ? ", " + data.addr2 : ""}</span>
                </Styled.HomeParahraph>
                <Styled.HomeUrlWrapper>
                    <i className="fas fa-home"></i>
                    <Styled.HomeUrlList>
                        {
                            data.homepage.split("<br />").map(url => <li key={url.substring(0, url.indexOf('<'))}>
                                <span>{url.substring(0, url.indexOf('<')) + " : "}</span>
                                <Link to={url.substring(url.indexOf('>') + 1, url.lastIndexOf('<'))} target='_blank' >{url.substring(url.indexOf('>') + 1, url.lastIndexOf('<'))}</Link>
                            </li>)
                        }
                    </Styled.HomeUrlList>
                </Styled.HomeUrlWrapper>
                <Styled.HomeParahraph>
                    <i className="fas fa-sticky-note"></i>
                    <span>{data.overview.replace(/<br>/g, " ").replace(/<br \/>/g, " ")}</span>
                </Styled.HomeParahraph>
            </Styled.HomeWrapper>
            <Styled.ReviewWrapper>
                <Styled.ReviewForm>
                    <label htmlFor="commentInput">댓글 입력</label>
                    <Styled.ReviewFormInput type="text" id='commentInput' placeholder='댓글 작성...' />
                    <Styled.ReviewFormButton>게시</Styled.ReviewFormButton>
                </Styled.ReviewForm>
            </Styled.ReviewWrapper>
            <Styled.PictureWrapper>
                {
                    dummyImages.map(image => <Link to={image.originimgurl} target='_blank' key={image.serialnum} ><img src={image.originimgurl} alt='' /></Link>)
                }
            </Styled.PictureWrapper>
        </Styled.SectionDetail>
    )
}
