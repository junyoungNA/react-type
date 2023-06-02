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
    const [currentSlide, setCurrentSlide] = useState(0);  
    const 양끝에_추가될_데이터수 = 1;

  const setSlides = () => {
    let addedFront = [];
    let addedLast = [];
    let index = 0;
    while (index < 양끝에_추가될_데이터수) {
      addedLast.push(VisualList[index % VisualList.length]);
      addedFront.unshift(VisualList[VisualList.length - 1 - (index % VisualList.length)]);
      index++;
    }
    return [...addedFront, ...VisualList, ...addedLast];
  }

  const SLIDE_SIZE = setSlides().length; // 슬라이드 전체 사이즈
  const transitionTime = 500;
const transitionStyle = `transform ${transitionTime}ms ease 0s`;

// function replaceSlide(index) {
//   setTimeout(() => {
//     setTransition('');
//     setCurrentIndex(index);
//   }, transitionTime)
// }

// function handleSwipe(direction) {
//   let index = currentIndex + direction;
//   setCurrentIndex(index);
//   if (index < 양끝에_추가될_데이터수) {
//     index += itemSize;
//     replaceSlide(index)
//   }
//   else if (index >= itemSize + 양끝에_추가될_데이터수) {
//     index -= - itemSize;
//     replaceSlide(index)
//   }
//   setTransition(transitionStyle);
// }



    return (
        <HomeSection>
            <VisualContainer style={{background:'#a3a3a3 '}}>
                <SlideBox >
                    <SlideTrack offset={-currentSlide * 100}>
                    {setSlides()?.map((visual, index) => {
                      console.log(visual);
                      return(
                        <VisualInner width={visual.width} height={visual.height}>
                          {visual.text.map((text, index) =>  
                          <VisualText color={visual.font[index].color} fontSize={visual.font[index].fontSize} fontWeight={visual.font[index].fontWeight}>
                              {text} 
                          </VisualText> )}
                          <VisualImage src={visual.img}/>
                        </VisualInner >
                      )
                    }
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