import React, { useCallback } from "react";
import styled from "styled-components";
import SvgIcon from "@mui/material/SvgIcon";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { VisualText } from "../assets/styled/common";

const ProgressBox = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 30px;
  left: 450px;
`;

const InputProgress = styled.input.attrs(props => ({
  type: "range",
  size: props.size || "100px",
}))`
  margin: 10px;
  width: 200px;
  height: 5px;
  font-weight: 10px;
`;

type Props = {
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
  currentSlide: number;
  slideSize: number;
  양끝에_추가될_데이터수: number;
  resetCurrentSlide: () => void;
};

const Progressbar: React.ElementType<Props> = ({
  setCurrentSlide,
  currentSlide,
  slideSize,
  양끝에_추가될_데이터수,
  resetCurrentSlide,
}) => {
  const prevButtonClick = useCallback(
    (currentSlide: number) => () => {
      setCurrentSlide(
        currentSlide => (currentSlide - 1 + slideSize) % slideSize
      );
    },
    []
  );

  const nextButtonClick = useCallback(
    (currentSlide: number) => () => {
      setCurrentSlide(currentSlide => (currentSlide + 1) % slideSize);
      resetCurrentSlide();
    },
    [currentSlide]
  );

  return (
    <ProgressBox>
      <SvgIcon
        component={ArrowLeftIcon}
        inheritViewBox
        style={{ fontSize: "35px", cursor: "pointer" }}
        onClick={prevButtonClick(currentSlide)}
      />
      <VisualText color="black" fontSize="18px">
        {currentSlide}
      </VisualText>
      <InputProgress />
      <VisualText color="black" fontSize="18px">
        {slideSize - 양끝에_추가될_데이터수 * 2}
      </VisualText>
      <SvgIcon
        component={ArrowRightIcon}
        inheritViewBox
        style={{ fontSize: "35px", cursor: "pointer" }}
        onClick={nextButtonClick(currentSlide)}
      />
    </ProgressBox>
  );
};

export default Progressbar;
