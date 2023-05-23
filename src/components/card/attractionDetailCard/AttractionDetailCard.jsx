import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import * as Styled from './style'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import { getAttractionCategoty, getAttractionImages, writeComment } from 'servieces/AttractionService';
import Comment from 'components/comment/Comment';

const dummyComments = [
    {
        'attractionCommentContent': 'test content',
        'attractionCommentTime': '2023-05-22 21:18:19',
        'attractionCommentUser': {
            'userId': 'test user'
        }
    },
    {
        'attractionCommentContent': 'test content',
        'attractionCommentTime': '2023-05-22 21:18:19',
        'attractionCommentUser': {
            'userId': 'test user'
        }
    },
    {
        'attractionCommentContent': 'test content',
        'attractionCommentTime': '2023-05-22 21:18:19',
        'attractionCommentUser': {
            'userId': 'test user'
        }
    },
    {
        'attractionCommentContent': 'test content',
        'attractionCommentTime': '2023-05-22 21:18:19',
        'attractionCommentUser': {
            'userId': 'test user'
        }
    },
    {
        'attractionCommentContent': 'test content',
        'attractionCommentTime': '2023-05-22 21:18:19',
        'attractionCommentUser': {
            'userId': 'test user'
        }
    }
]

export default function AttractionDetailCard({ props: { data } }) {
    const dispatch = useDispatch();
    const CategoryRef = useRef([]);
    const WrapperRef = useRef([]);
    const InputRef = useRef();
    const SectionRef = useRef();
    const [input, setInput] = useState("");
    const [category, setCategory] = useState("");
    const [images, setImages] = useState([]);
    const [tab, setTab] = useState(0);
    const user = useSelector(state => state.user);

    useLayoutEffect(() => {
        const getCategory = async () => {
            const result = await getAttractionCategoty(data.contenttypeid, data.cat1, data.cat2, data.cat3);

            setCategory(result.name);
        }

        getCategory();
    }, [data]);

    useEffect(() => {
        const getImages = async () => {
            const result = await getAttractionImages(data.contentid);

            setImages(result);
        }

        getImages();
    }, [data]);

    useEffect(() => {
        SectionRef.current.style.display = 'flex';
    }, [data]);

    const onChangeHandler = (e) => {
        console.log(e.target.value);

        setInput(e.target.value);
    }

    const onClickHandler = (e) => {
        const tabIndex = e.currentTarget.childNodes[0].innerText;

        setTab(tabIndex);
    }

    const onCommentClick = (e) => {
        e.preventDefault();

        writeComment(data.contentid, InputRef.current.value, user, dispatch);
    }

    const onCloseClick = () => {
        SectionRef.current.style.display = 'none';
    }

    return (
        <Styled.SectionDetail ref={SectionRef}>
            <Styled.HeaderImage src={data.firstimage} alt="" />
            <Styled.SectionHeader>
                <Styled.SectionHeaderWrapper>
                    <Styled.SectionTitle>{data.title}</Styled.SectionTitle>
                    <Styled.SectionHeaderParagraph>{category ? category : " "}</Styled.SectionHeaderParagraph>
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
                    <Styled.SectionCategoryButton ref={(element) => (CategoryRef.current[0] = element)} selected={tab} index={0} onClick={onClickHandler}>
                        <span>0</span>
                        <span>홈</span>
                    </Styled.SectionCategoryButton>
                </Styled.SectionCategoryListItem>
                <Styled.SectionCategoryListItem>
                    <Styled.SectionCategoryButton ref={(element) => (CategoryRef.current[1] = element)} selected={tab} index={1} onClick={onClickHandler}>
                        <span>1</span>
                        <span>리뷰</span>
                    </Styled.SectionCategoryButton>
                </Styled.SectionCategoryListItem>
                <Styled.SectionCategoryListItem>
                    <Styled.SectionCategoryButton ref={(element) => (CategoryRef.current[2] = element)} selected={tab} index={2} onClick={onClickHandler}>
                        <span>2</span>
                        <span>사진</span>
                    </Styled.SectionCategoryButton>
                </Styled.SectionCategoryListItem>
            </Styled.SectionCategoryList>
            <Styled.HomeWrapper ref={(element) => (WrapperRef.current[0] = element)} selected={tab} index={0} >
                <Styled.HomeParahraph>
                    <i className="fas fa-location"></i>
                    <span>{data.addr1}{data.addr2 ? ", " + data.addr2 : ""}</span>
                </Styled.HomeParahraph>
                <Styled.HomeUrlWrapper>
                    <i className="fas fa-home"></i>
                    <Styled.HomeUrlList>
                        {
                            data.homepage ? data.homepage.split("<br />").map(url => <li key={url.substring(0, url.indexOf('<'))}>
                                <Link to={url.substring(url.indexOf('>') + 1, url.lastIndexOf('<'))} target='_blank' >{url.substring(url.indexOf('>') + 1, url.lastIndexOf('<'))}</Link>
                            </li>) : "홈페이지가 존재하지 않습니다."
                        }
                    </Styled.HomeUrlList>
                </Styled.HomeUrlWrapper>
                <Styled.HomeParahraph>
                    <i className="fas fa-sticky-note"></i>
                    <span>{data.overview ? data.overview.replace(/<br>/g, " ").replace(/<br \/>/g, " ") : <></>}</span>
                </Styled.HomeParahraph>
            </Styled.HomeWrapper>
            <Styled.ReviewWrapper ref={(element) => (WrapperRef.current[1] = element)} selected={tab} index={1}>
                {
                    dummyComments ? dummyComments.map((comment, index) => <Comment props={{ comment, 'type': 'attraction' }} key={index} />) : <></>
                }
                {
                    user.refreshToken ?
                        <Styled.ReviewForm>
                            <label htmlFor="commentInput">댓글 입력</label>
                            <Styled.ReviewFormInput type="text" id='commentInput' placeholder='댓글 작성...' ref={InputRef} onChange={onChangeHandler} value={input} />
                            <Styled.ReviewFormButton onClick={onCommentClick}>게시</Styled.ReviewFormButton>
                        </Styled.ReviewForm> :
                        <></>
                }
            </Styled.ReviewWrapper>
            <Styled.PictureWrapper ref={(element) => (WrapperRef.current[2] = element)} selected={tab} index={2}>
                {
                    images ? images.map(image => <Link to={image.originimgurl} target='_blank' key={image.serialnum} ><img src={image.originimgurl} alt='' /></Link>) : <>이미지가 없습니다.</>
                }
            </Styled.PictureWrapper>
            <Styled.StyledCloseButton onClick={onCloseClick}>
                <span>닫기</span>
                <i className="fa-solid fa-x"></i>
            </Styled.StyledCloseButton>
        </Styled.SectionDetail>
    )
}
