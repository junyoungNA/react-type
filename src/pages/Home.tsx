import React, { useState, useCallback, useRef } from "react";
import styled from "styled-components";
import VisualList from "../assets/Data/data";
import Progressbar from "../components/Progressbar";
import { VisualInner, VisualText } from "../assets/styled/common";

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
`;

const SlideBox = styled.div`
  overflow: hidden;
  height: inherit;
  margin: auto;
  width: 1000px;
`;

const SlideTrack = styled.div<{ offset: number }>`
  display: flex;
  height: inherit;
  /* transition: transform 0.3s ease-in-out; */
  transform: translateX(${props => props.offset}%);
`;

const MainContainer = styled.section`
  height: 700px;
`;

const HomeSection = styled.section`
  margin: auto;
  background-color: #131212;
`;

const VisualImage = styled.img`
  position: absolute;
  width: 450px;
  top: 0;
  right: -31px;
  height: 450px;
  border-radius: 20px;
`;

const Home: React.FC = () => {
  const slideRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  const setSlides = () => {
    const beforeSlide = VisualList[VisualList.length - 1];
    const afterSlide = VisualList[0];
    // 무한 슬라이드를 구현하기 위해 새롭게 배열을 만듦.
    return [beforeSlide, ...VisualList, afterSlide];
  };

  const SLIDE_SIZE = setSlides().length; //보여질 슬라이드 전체 사이즈

  const resetCurrentSlide = useCallback(() => {
    if (currentSlide === 4) {
      if (slideRef.current) {
        slideRef.current.style.transition = "";
      }
      setCurrentSlide(1);
    }
    if (slideRef.current) {
      setTimeout(() => {
        slideRef.current.style.transition = "all 0.3s ease-in-out";
      }, 10);
    }
  }, [currentSlide, SLIDE_SIZE]);

  return (
    <HomeSection>
      <VisualContainer style={{ background: "#a3a3a3 " }}>
        <SlideBox>
          <SlideTrack ref={slideRef} offset={-currentSlide * 100}>
            {setSlides()?.map((visual, index) => {
              return (
                <VisualInner
                  width={visual.width}
                  height={visual.height}
                  key={index}
                >
                  {visual.text.map((text, index) => (
                    <VisualText
                      color={visual.font[index].color}
                      fontSize={visual.font[index].fontSize}
                      fontWeight={visual.font[index].fontWeight}
                      key={index}
                    >
                      {text}
                    </VisualText>
                  ))}
                  <VisualImage src={visual.img} />
                </VisualInner>
              );
            })}
          </SlideTrack>
          <Progressbar
            setCurrentSlide={setCurrentSlide}
            currentSlide={currentSlide}
            slideSize={SLIDE_SIZE}
            양끝에_추가될_데이터수={1}
            resetCurrentSlide={resetCurrentSlide}
          ></Progressbar>
        </SlideBox>
      </VisualContainer>
      <MainContainer></MainContainer>
    </HomeSection>
  );
};

export default Home;
