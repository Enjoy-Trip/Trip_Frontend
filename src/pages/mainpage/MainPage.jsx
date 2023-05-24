import React, { useEffect, useState } from 'react'
import * as Styled from './style'

import main1 from 'assets/videos/main1.mp4'
import main2 from 'assets/videos/main2.mp4'
import mainbackground from 'assets/images/mainbackground.webp'

const section2Scroll = () => {
    let height = window.innerHeight || document.body.clientHeight;
    window.scrollTo(0, height - 60);
}

export default function MainPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const backgroundList = [main1, main2];
    const [firstIndex, setFirstIndex] = useState(0);

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
                <Styled.StyledSection2List>
                </Styled.StyledSection2List>
            </Styled.StyledSection2>
            
            <section>
                <Styled.StyledSectionHeader>
                    <Styled.StyledSectionTitle>category</Styled.StyledSectionTitle>
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
            </section>
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