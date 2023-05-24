import React, { useCallback, useEffect, useRef, useState } from 'react'
import * as Styled from './style'

import main1 from 'assets/videos/main1.mp4'
import main2 from 'assets/videos/main2.mp4'
import mainbackground from 'assets/images/mainbackground.webp'
import { Link } from 'react-router-dom'

const section2Scroll = () => {
    let height = window.innerHeight || document.body.clientHeight;
    window.scrollTo(0, height - 60);
}

const recommentList = [
    {
        "addr1": "서울특별시 강남구 테헤란로 521",
        "firstimage": "http://tong.visitkorea.or.kr/cms/resource/45/2705645_image2_1.jpg",
        "title": "그랜드 인터컨티넨탈 서울 파르나스",
    },
    {
        "addr1": "서울특별시 강남구 테헤란로 521",
        "firstimage": "http://tong.visitkorea.or.kr/cms/resource/45/2705645_image2_1.jpg",
        "title": "그랜드 인터컨티넨탈 서울 파르나스",
    },
    {
        "addr1": "서울특별시 강남구 테헤란로 521",
        "firstimage": "http://tong.visitkorea.or.kr/cms/resource/45/2705645_image2_1.jpg",
        "title": "그랜드 인터컨티넨탈 서울 파르나스",
    },
    {
        "addr1": "서울특별시 강남구 테헤란로 521",
        "firstimage": "http://tong.visitkorea.or.kr/cms/resource/45/2705645_image2_1.jpg",
        "title": "그랜드 인터컨티넨탈 서울 파르나스",
    },
    {
        "addr1": "서울특별시 강남구 테헤란로 521",
        "firstimage": "http://tong.visitkorea.or.kr/cms/resource/45/2705645_image2_1.jpg",
        "title": "그랜드 인터컨티넨탈 서울 파르나스",
    },
    {
        "addr1": "서울특별시 강남구 테헤란로 521",
        "firstimage": "http://tong.visitkorea.or.kr/cms/resource/45/2705645_image2_1.jpg",
        "title": "그랜드 인터컨티넨탈 서울 파르나스",
    },
    {
        "addr1": "서울특별시 강남구 테헤란로 521",
        "firstimage": "http://tong.visitkorea.or.kr/cms/resource/45/2705645_image2_1.jpg",
        "title": "그랜드 인터컨티넨탈 서울 파르나스",
    }
]

export default function MainPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const backgroundList = [main1, main2];

    const [section2Index, setSection2Index] = useState(Math.floor(recommentList.length / 2));
    const secttion2ContainerRef = useRef();
    const secttion2PrevButtonRef = useRef();
    const secttion2NextButtonRef = useRef();

    const section2LeftClick = useCallback((e) => {
        e.stopPropagation();

        setSection2Index(section2Index - 1);
    }, [section2Index]);

    const section2RightClick = useCallback((e) => {
        e.stopPropagation();

        setSection2Index(section2Index + 1);
    }, [section2Index]);

    useEffect(() => {
        const prevButton = secttion2PrevButtonRef.current;
        const nextButton = secttion2NextButtonRef.current;

        prevButton.addEventListener("click", section2LeftClick);
        nextButton.addEventListener("click", section2RightClick);

        return () => {
            prevButton.removeEventListener("click", section2LeftClick);
            nextButton.removeEventListener("click", section2RightClick);
        }
    }, [section2LeftClick, section2RightClick]);

    return (
        <main>
            <section>
                <Styled.StyledSection1Header>
                    <h2>
                        <span>Vacance with You</span>
                        <span>YOUCANCE</span>
                    </h2>
                    <p>
                        <span>너와 함께 떠나는 여행, 유캉스</span>
                    </p>
                </Styled.StyledSection1Header>
                <Styled.StyledSection1Video autoPlay muted loop >
                    <source src={backgroundList[Math.floor(Math.random() * backgroundList.length)]} type="video/mp4" />
                </Styled.StyledSection1Video>
                <Styled.StyledSection1Button onClick={section2Scroll}>
                    <i className="fa-solid fa-chevron-down"></i>
                </Styled.StyledSection1Button>
            </section>
            <Styled.StyledSection2 img={mainbackground}>
                <Styled.StyledSectionHeader>
                    <Styled.StyledSectionTitle>Welcome to the best week of<span></span>your life</Styled.StyledSectionTitle>
                    <Styled.StyledSectionHeaderParagraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, veritatis et cupiditate impedit repellat perferendis eum sunt dicta voluptate suscipit commodi nobis quisquam inventore facilis error ducimus dolorem amet culpa.
                        Quaerat nam laborum quo, beatae dolorum fuga quam magnam illo. Quae, neque blanditiis! Molestiae qui dolores exercitationem et. Vero iure consectetur optio at obcaecati iste in architecto itaque soluta dolorem.</Styled.StyledSectionHeaderParagraph>
                </Styled.StyledSectionHeader>
                <Styled.StyledSection2List ref={secttion2ContainerRef} margin={(-370 * section2Index) + "px"}>
                    {
                        recommentList.map((data, index) => 
                        <li key={index + data.title}>
                            <Link to="/attraction" state={{ attractionTitle: data.title }}>
                                <Styled.Section2ListArticle backgroundimg={data.firstimage}>
                                    <header>
                                        <h3>{data.title}</h3>
                                    </header>
                                    <p>{data.addr1}</p>
                                </Styled.Section2ListArticle>
                            </Link>
                        </li>)
                    }
                </Styled.StyledSection2List>
                <Styled.Section2LeftButton ref={secttion2PrevButtonRef} show={section2Index != 0 ? "block" : "none"}>
                    <span>왼쪽으로 이동</span>
                    <i className="fas fa-chevron-left"></i>
                </Styled.Section2LeftButton>
                <Styled.Section2RightButton ref={secttion2NextButtonRef} show={section2Index != recommentList.length - 1 ? "block" : "none"}>
                    <span>오른쪽으로 이동</span>
                    <i className="fas fa-chevron-right"></i>
                </Styled.Section2RightButton>
            </Styled.StyledSection2>

            <Styled.StyledSection3>
                <Styled.StyledSectionHeader>
                    <Styled.StyledSectionTitle>Our Destinations</Styled.StyledSectionTitle>
                </Styled.StyledSectionHeader>
                <ul>
                    <li>
                        <a href="/">category1</a>
                    </li>
                    <li>
                        <a href="/">category2</a>
                    </li>
                    <li>
                        <a href="/">category3</a>
                    </li>
                    <li>
                        <a href="/">category4</a>
                    </li>
                    <li>
                        <a href="/">category5</a>
                    </li>
                </ul>
            </Styled.StyledSection3>
            <section>
                <header>
                    <h2>Our destinations</h2>
                </header>
                <ul>
                    <li>
                        <a href="/">지역1</a>
                    </li>
                    <li>
                        <a href="/">지역2</a>
                    </li>
                    <li>
                        <a href="/">지역3</a>
                    </li>
                    <li>
                        <a href="/">지역4</a>
                    </li>
                    <li>
                        <a href="/">지역5</a>
                    </li>
                </ul>
                <button>see all</button>
            </section>
            <Styled.StyledSection3>
                <Styled.StyledSectionHeader>
                    <Styled.StyledSectionTitle>Your word, our words</Styled.StyledSectionTitle>
                    <Styled.StyledSectionHeaderParagraph>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Styled.StyledSectionHeaderParagraph>
                </Styled.StyledSectionHeader>
                <ul>
                    <li>
                        게시글1
                    </li>
                    <li>
                        게시글2
                    </li>
                    <li>
                        게시글3
                    </li>
                    <li>
                        게시글4
                    </li>
                    <li>
                        게시글5
                    </li>
                </ul>
                <ul>
                    <li>
                        <button>버튼1</button>
                    </li>
                    <li>
                        <button>버튼2</button>
                    </li>
                    <li>
                        <button>버튼3</button>
                    </li>
                    <li>
                        <button>버튼4</button>
                    </li>
                    <li>
                        <button>버튼5</button>
                    </li>
                </ul>
            </Styled.StyledSection3>
        </main>
    )
}