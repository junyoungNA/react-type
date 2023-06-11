import React, { useState, useCallback } from "react";
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
  transition: transform 0.3s ease-in-out;
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
  const 양끝에_추가될_데이터수 = 1;
  const [currentSlide, setCurrentSlide] = useState(1);
  const [currOffSet, setCurrOffset] = useState(-currentSlide * 100);

  const setSlides = () => {
    let addedFront = [];
    let addedLast = [];
    let index = 0;
    while (index < 양끝에_추가될_데이터수) {
      addedLast.push(VisualList[index % VisualList.length]);
      addedFront.unshift(
        VisualList[VisualList.length - 1 - (index % VisualList.length)]
      );
      index++;
    }
    return [...addedFront, ...VisualList, ...addedLast];
  };

  const SLIDE_SIZE = setSlides().length; //보여질 슬라이드 전체 사이즈
  const transitionTime = 500;
  const transitionStyle = `transform ${transitionTime}ms ease 0s`;

  const resetCurrentSlide = () => {
    if (currentSlide >= SLIDE_SIZE - 양끝에_추가될_데이터수 * 2) {
      console.log("움직여");
      setTimeout(() => {
        setCurrentSlide(1);
      }, 0);
    }
  };

  return (
    <HomeSection>
      <VisualContainer style={{ background: "#a3a3a3 " }}>
        <SlideBox>
          <SlideTrack offset={currOffSet}>
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
