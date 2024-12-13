/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Spin } from "antd";
import styled from "styled-components";
import { TitleXSmall } from "./Font";
import React, { forwardRef } from "react";

const setColor = (color?: string, type?: string) => {
  if (!color) return;

  if (type === "bg") {
    if (color === "blue") {
      return "var(--color-dieblue)";
    } else if (color === "red") {
      return "var(--color-diered)";
    } else if (color === "gray") {
      return "var(--color-gray)";
    } else if (color === "violet") {
      return "var(--color-middleButton)";
    } else if (color === "Outlined") {
      return "#fff";
    } else {
      return "#fff";
    }
  } else {
    if (color === "Outlined") {
      if (type === "border") {
        return "var(--color-listborder)";
      }
      return "var(--color-gray-90)";
    } else {
      return "#fff";
    }
  }
};

type StyledButtonProps = {
  $color?: string;
  $width?: number | string;
  $height?: number;
  $isfixed?: boolean;
  $iconArrangement?: string;
  $isrounded?: boolean;
  htmlType?: string;
  $noHover?: boolean;
};

const StyledButton = styled(Button)<StyledButtonProps>`
  ${({ theme }) => theme.MIXINS.flexBox("", "center", "center")}
  min-width: ${(props) =>
    typeof props.$width === "string"
      ? props.$width
      : typeof props.$width === "number"
      ? `${props.$width}px`
      : "100px"};
  width: ${(props) =>
    props.$width
      ? typeof props.$width === "string"
        ? props.$width
        : `${props.$width}px`
      : "auto"};
  height: ${(props) => (props.$height ? `${props.$height}px` : "50px")};
  background-color: ${(props) => setColor(props.$color, "bg")};
  border-radius: 0;
  ${(props) =>
    props.$isrounded && props.$height && `border-radius: ${props.$height}px;`};
  ${(props) =>
    props.$color?.includes("Outlined") ? "border: 1px solid" : "border: 0"};
  border-color: ${(props) => setColor(props.$color, "border")};
  box-shadow: none;
  padding: 0 24px;
  font-size: 15px;
  font-weight: 700;
  ${(props) =>
    props.$color?.includes("Outlined") ? "color: #1D1D1D" : "color: #FFF"};
  > * {
    flex-shrink: 0;
    flex-grow: 0;
  }

  ${(props) =>
    props.$iconArrangement === "right" &&
    "> span {display: flex; flex-direction: row-reverse;}"}

  &:hover {
    background-color: ${(props) => setColor(props.$color, "bg")} !important;
    border-color: ${(props) => setColor(props.$color, "border")} !important;
    color: ${(props) => setColor(props.$color)} !important;

    ${(props) => props.$noHover && "background-color: transparent !important"}
  }

  &:disabled {
    background-color: var(--color-gray-20);
    color: var(--color-gray-50);
    &:hover {
      background-color: var(--color-gray-20) !important;
      color: var(--color-gray-50) !important;
    }
  }

  ${(props) =>
    props.$isfixed &&
    "width: 104px; min-width: 104px; max-width: 104px; height: 32px; padding: 0; font-size: 13px;"}
`;

type StyledIconProps = {
  $imgUrl: string;
  $iconSize?: number;
  $iconArrangement?: string;
  $flipIcon?: boolean;
};

const StyledIcon = styled.span<StyledIconProps>`
  display: inline-block;
  vertical-align: middle;
  width: ${(props) => (props.$iconSize ? props.$iconSize : 16)}px;
  height: ${(props) => (props.$iconSize ? props.$iconSize : 16)}px;
  margin-right: 4px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${(props) => props.$imgUrl});
  transform: ${(props) => (props.$flipIcon ? "rotateZ(0)" : "rotateZ(180deg)")};

  ${(props) => props.$iconArrangement === "right" && "margin: 1px 0 0 4px;"}
`;

/**
 * @color :
 * 기본             푸릇회색 배경, 흰색 글씨
 * Outlined         푸릇회색 선, 검정 글씨
 * blue             파란색 선, 파란 글씨
 * blue             파란색 배경, 흰 글씨
 * navyOutlined     네이비색 선, 네이비색 글씨
 * navy             네이비색 배경, 흰 글씨
 * red              빨간색 선, 빨간색 글씨
 * red              빨간색 배경, 흰 글씨
 * gray             그레이 (취소/삭제)
 * TODO: disabled
 * @height :
 * 기본              높이값 50px
 *                   원하는 px 값으로 지정
 */
const ButtonComponent = forwardRef(
  (
    props: {
      title: string | React.ReactNode;
      color?: string;
      width?: number | string;
      height?: number;
      icon?: string;
      iconSize?: number;
      iconArrangement?: string;
      isfixed?: boolean;
      onClick?: (value: any) => void;
      style?: React.CSSProperties;
      disabled?: boolean;
      flipIcon?: boolean;
      isRounded?: boolean;
      htmlType?: string;
      isLoading?: boolean;
      tabIndex?: number;
      noHover?: boolean;
    },
    ref: any
  ) => {
    return (
      <StyledButton
        $color={props.color}
        $width={props.width}
        $height={props.height}
        $isfixed={props.isfixed}
        onClick={props.onClick}
        $iconArrangement={props.iconArrangement}
        style={props.style}
        disabled={props.disabled}
        $isrounded={props.isRounded}
        htmlType={props.htmlType}
        tabIndex={props.tabIndex}
        $noHover={props.noHover}
        ref={ref}
      >
        {props.isLoading && <Spin />}
        {!props.isLoading && (
          <>
            {props.icon && (
              <StyledIcon
                $imgUrl={props.icon}
                $iconSize={props.iconSize}
                $iconArrangement={props.iconArrangement}
                $flipIcon={props.flipIcon}
              />
            )}
            <span style={{ marginTop: "2px" }}>{props.title}</span>
          </>
        )}
      </StyledButton>
    );
  }
);

/**
 * @iconWidth :
 * undefined시 기본값 17
 * @text : 필수
 * 버튼의 text
 * @onClick :
 * 클릭 이벤트
 */
export const RefreshButton = ({
  iconWidth,
  text,
  onClick,
}: {
  iconWidth?: number;
  text: string;
  onClick: () => void;
}) => {
  return (
    <button style={{ gap: "8px" }} onClick={onClick}>
      <img
        src="/icon/refresh.svg"
        alt=""
        style={{
          width: `${iconWidth ? iconWidth : 17}px`,
          filter:
            "invert(12%) sepia(87%) saturate(3223%) hue-rotate(198deg) brightness(90%) contrast(108%)",
        }}
      />
      <TitleXSmall
        style={{ color: "#003675", fontFamily: "Pretendard Variable" }}
      >
        {text}
      </TitleXSmall>
    </button>
  );
};

export default ButtonComponent;
