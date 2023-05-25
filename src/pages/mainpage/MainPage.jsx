import React, { useCallback, useEffect, useRef, useState } from 'react'
import * as Styled from './style'

import main1 from 'assets/videos/main1.mp4'
import main2 from 'assets/videos/main2.mp4'
import carouselVideo from 'assets/videos/mainpagecarousel.mp4'
import mainbackground from 'assets/images/mainbackground.webp'
import { Link } from 'react-router-dom'

const section2Scroll = () => {
    let height = window.innerHeight || document.body.clientHeight;
    window.scrollTo(0, height - 60);
}

const recommentList = [
    {
        "addr1": "서울 종로구 사직로 161",
        "firstimage": "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_862/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/qwo9klmec2tcooqke60l/%EA%B2%BD%EB%B3%B5%EA%B6%81%EA%B0%80%EC%9D%B4%EB%93%9C%ED%88%AC%EC%96%B4.webp",
        "title": "경복궁",
    },
    {
        "addr1": "서울특별시 성북구 보국문로 262",
        "firstimage": "https://www.hotelscombined.co.kr/rimg/dimg/16/48/59dc002c-lm-73116-156d5f2ceab.jpg?width=1366&height=768&xhint=1531&yhint=1234&crop=true",
        "title": "북한산 국립 공원",
    },
    {
        "addr1": "강원도 춘천시 남산면 남이섬길 1",
        "firstimage": "https://youimg1.tripcdn.com/target/0100x1200085fw3kc2666_C_800_10000.jpg",
        "title": "남이섬",
    },
    {
        "addr1": "인천광역시 연수구 송도동 컨벤시아대로 160",
        "firstimage": "https://a.cdn-hotels.com/gdcs/production45/d877/b15816c3-c9f8-4ae5-844d-5eeba398397c.jpg",
        "title": "송도 센트럴파크",
    },
    {
        "addr1": "제주특별자치도 서귀포시 안덕면 신화역사로 15",
        "firstimage": "https://www.kgnews.co.kr/data/photos/20210730/art_1627539795429_4db070.jpg",
        "title": "오설록 티 뮤지엄",
    },
    {
        "addr1": "부산광역시 수영구 민락동",
        "firstimage": "https://www.popco.net/zboard/data/photo_gallery/2020/06/26/14196937155ef5f75bacd24.jpg",
        "title": "광안대교",
    },
    {
        "addr1": "전라남도 순천시 순천만길 513-25",
        "firstimage": "https://scbay.suncheon.go.kr/upload/editUpload/20200331/2020033109341456994.jpg",
        "title": "순천만 습지",
    },
    {
        "addr1": "전라북도 전주시 완산구 기린대로 99",
        "firstimage": "https://www.jeollailbo.com/news/photo/202302/684390_85868_2631.jpg",
        "title": "전주 한옥 마을",
    },
    {
        "addr1": "제주특별자치도 제주시 한림읍 협재리 2497-1번지",
        "firstimage": "https://api.cdn.visitjeju.net/photomng/imgpath/202110/20/32ec3ee6-fad9-440d-95ea-628ff6453a48.jpg",
        "title": "협재 해수욕장",
    },
    {
        "addr1": "경기도 고양시 일산동구 호수로 595",
        "firstimage": "https://cdn.joongboo.com/news/photo/201905/1348719_2049964_2240.jpg",
        "title": "일산 호수공원",
    }
]

const recommendAreaList = [
    {
        "title": "서울",
        "video": carouselVideo
    },
    {
        "title": "서울",
        "video": carouselVideo
    },
    {
        "title": "서울",
        "video": carouselVideo
    },
    {
        "title": "서울",
        "video": carouselVideo
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

    const [section3Index, setSection3Index] = useState(Math.floor(recommendAreaList.length / 2));
    const secttion3ContainerRef = useRef();
    const secttion3PrevButtonRef = useRef();
    const secttion3NextButtonRef = useRef();

    const section3LeftClick = useCallback((e) => {
        e.stopPropagation();

        setSection3Index(section3Index - 1);
    }, [section3Index]);

    const section3RightClick = useCallback((e) => {
        e.stopPropagation();

        setSection3Index(section3Index + 1);
    }, [section3Index]);

    useEffect(() => {
        const prevButton = secttion3PrevButtonRef.current;
        const nextButton = secttion3NextButtonRef.current;

        prevButton.addEventListener("click", section3LeftClick);
        nextButton.addEventListener("click", section3RightClick);

        return () => {
            prevButton.removeEventListener("click", section3LeftClick);
            nextButton.removeEventListener("click", section3RightClick);
        }
    }, [section3LeftClick, section3RightClick]);

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
                    <span>아래로 이동</span>
                    <i className="fa-solid fa-chevron-down"></i>
                </Styled.StyledSection1Button>
            </section>
            <Styled.StyledSection2 img={mainbackground}>
                <Styled.StyledSectionHeader>
                    <Styled.StyledSectionTitle>Welcome to the best week of<span></span>your life</Styled.StyledSectionTitle>
                    <Styled.StyledSectionHeaderParagraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, veritatis et cupiditate impedit repellat perferendis eum sunt dicta voluptate suscipit commodi nobis quisquam inventore facilis error ducimus dolorem amet culpa.
                        Quaerat nam laborum quo, beatae dolorum fuga quam magnam illo. Quae, neque blanditiis! Molestiae qui dolores exercitationem et. Vero iure consectetur optio at obcaecati iste in architecto itaque soluta dolorem.</Styled.StyledSectionHeaderParagraph>
                </Styled.StyledSectionHeader>
                <Styled.StyledSection2List ref={secttion2ContainerRef} margin={(-350 * section2Index) + "px"}>
                    {
                        recommentList.map((data, index) => 
                        <li key={index + data.title}>
                            <Link to="/attraction" state={{ attractionTitle: data.title.split(' ')[0] }}>
                                <Styled.IROnlySpan>여행지 검색</Styled.IROnlySpan>
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
                <Styled.StyledSection3List ref={secttion3ContainerRef} margin={(-380 * section3Index) + "px"}>
                    {
                        recommendAreaList.map((data, index) => 
                        <li key={index + data.title}>
                            <Link to="/attraction" state={{ attractionTitle: data.title }} onMouseEnter={e => e.currentTarget.childNodes[1].childNodes[1].style.transform = "translateY(0px)"} onMouseLeave={e => e.currentTarget.childNodes[1].childNodes[1].style.transform = "translateY(80px)"}>
                                <Styled.IROnlySpan>지역 검색</Styled.IROnlySpan>
                                <Styled.Section3ListArticle>
                                    <Styled.Section3ArticleHeader>
                                        <span>대한민국</span>
                                        <h3>{data.title}</h3>
                                        <button>Explore Destination</button>
                                    </Styled.Section3ArticleHeader>
                                    <Styled.Section3Video muted loop onMouseEnter={e => e.currentTarget.play()} onMouseLeave={e => e.currentTarget.pause()}>
                                        <source src={data.video}/>
                                    </Styled.Section3Video>
                                </Styled.Section3ListArticle>
                            </Link>
                        </li>)
                    }
                </Styled.StyledSection3List>
                <Styled.Section3LeftButton ref={secttion3PrevButtonRef} show={section3Index != 0 ? "block" : "none"}>
                    <span>왼쪽으로 이동</span>
                    <i className="fas fa-chevron-left"></i>
                </Styled.Section3LeftButton>
                <Styled.Section3RightButton ref={secttion3NextButtonRef} show={section3Index != recommendAreaList.length - 1 ? "block" : "none"}>
                    <span>오른쪽으로 이동</span>
                    <i className="fas fa-chevron-right"></i>
                </Styled.Section3RightButton>
                <Styled.Section3MoreButton to='/attraction'>
                    Browse all destinations
                </Styled.Section3MoreButton>
            </Styled.StyledSection3>
        </main>
    )
}