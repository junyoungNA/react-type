import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components';
import VisualList from '../assets/Data/data';
import Progressbar from '../components/Progressbar';
import {VisualInner, VisualText } from '../assets/styled/common'

// background
// #a6a8ac
// #131212 

//font
// e0e0e0
// 383838

const VisualContainer = styled.div`
    position: relative;
    overflow: hidden;
    background-color: whitesmoke;
    height: 450px;
`  

const SlideBox = styled.div`
    overflow: hidden;
    height: inherit;
    margin: auto;
    width: 1000px;
`

const SlideTrack = styled.div<{offset: number}>`
    display: flex;
    height: inherit;
    transition: transform 0.3s ease-in-out;
    transform: translateX(${props => props.offset}%);
`

const MainContainer = styled.section`
    height: 700px;
`

const HomeSection = styled.section`
    margin: auto;
    background-color:#131212;
`


const VisualImage = styled.img`
    position: absolute;
    width: 450px;
    top: 0;
    right: -31px;
    height:450px;
    border-radius: 20px;
`

const Home: React.FC = () => {
    const SLIDE_SIZE = VisualList.length; // 슬라이드 전체 사이즈
    const [currentSlide, setCurrentSlide] = useState(0);

  const getSlidesToShow = () => {
    const nextIndex = (currentSlide + 1) % SLIDE_SIZE;
    const slides = [VisualList[currentSlide], VisualList[nextIndex]];

    // 마지막 슬라이드에서 다음 버튼을 눌렀을 때, 첫 번째 슬라이드가 있는 다음 슬라이드를 추가
    if (nextIndex === 0) {
      slides.push(VisualList[0]);
    }

    return slides;
  };

    return (
        <HomeSection>
            <VisualContainer style={{background:'#a3a3a3 '}}>
                <SlideBox >
                    <SlideTrack offset={-currentSlide * 100}>
                    {getSlidesToShow().map((visual, index) => 
                        <VisualInner width={visual.width} height={visual.height}>
                            {visual.text.map((text, index) =>  
                            <VisualText color={visual.font[index].color} fontSize={visual.font[index].fontSize} fontWeight={visual.font[index].fontWeight}>
                                {text} 
                            </VisualText> )}
                            <VisualImage src={visual.img}/>
                        </VisualInner >
                    )}
                    </SlideTrack>
                    <Progressbar setCurrentSlide={setCurrentSlide} currentSlide={currentSlide} slideSize={SLIDE_SIZE}></Progressbar>
                </SlideBox>
            </VisualContainer>
            <MainContainer>
            </MainContainer>
        </HomeSection>
    )
}


export default Home