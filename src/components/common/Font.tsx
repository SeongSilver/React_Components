import styled from "styled-components";

/**
 * @fontSize : 50px
 * @fontWeight : 700;
 * @lineHeight : 75px
 */
export const HeadingLarge = styled.h2`
  font-size: 50px;
  font-weight: 700;
  line-height: 75px;
`;
/**
 * @fontSize : 40px
 * @fontWeight : 700;
 * @lineHeight : 60px
 */
export const HeadingMedium = styled.h2`
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
`;
/**
 * @fontSize : 32px
 * @fontWeight : 700;
 * @lineHeight : 48px
 */
export const HeadingSmall = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 48px;
  text-align: center;
`;

/**
 * @fontSize : 24px
 * @fontWeight : 700;
 * @lineHeight : 36px
 */
export const TitleXLarge = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  color: var(--color-secondary-50);
`;
/**
 * @fontSize : 20px
 * @fontWeight : 700;
 * @lineHeight : 30px
 */
export const TitleLarge = styled.h3`
  font-size: 20px;
  font-weight: 700;
  line-height: 30px;
`;
/**
 * @fontSize : 19px
 * @fontWeight : 700;
 * @lineHeight : 28.5px
 */
export const TitleMedium = styled.h3`
  font-size: 19px;
  font-weight: 700;
  line-height: 28.5px;
`;
/**
 * @fontSize : 17px
 * @fontWeight : 700;
 * @lineHeight : 25.5px
 */
export const TitleSmall = styled.h3`
  font-size: 17px;
  font-weight: 700;
  line-height: 25.5px;
`;
/**
 * @fontSize : 15px
 * @fontWeight : 700;
 * @lineHeight : 22.5px
 */
export const TitleXSmall = styled.h3`
  font-size: 15px;
  font-weight: 700;
  line-height: 22.5px;
`;
/**
 * @fontSize : 13px
 * @fontWeight : 700;
 * @lineHeight : 19.5px
 */
export const TitleXXSmall = styled.h3`
  font-size: 13px;
  font-weight: 700;
  line-height: 19.5px;
`;

/**
 * @fontSize : 13px
 * @fontWeight : 700;
 * @lineHeight : 19.5px
 */
export const TitleXXXSmall = styled.h3`
  font-size: 12px;
  font-weight: 700;
  line-height: 18px;
`;

/**
 * @fontSize : 19px
 * @fontWeight : 400;
 * @lineHeight : 28.5px
 */
export const BodyLarge = styled.p`
  font-size: 19px;
  font-weight: 400;
  line-height: 28.5px;
`;
/**
 * @fontSize : 17px
 * @fontWeight : 400;
 * @lineHeight : 25.5px
 */
export const BodyMedium = styled.p`
  font-size: 17px;
  font-weight: 400;
  line-height: 25.5px;
`;
/**
 * @fontSize : 15px
 * @fontWeight : 400;
 * @lineHeight : 22.5px
 */
export const BodySmall = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 22.5px;
`;
/**
 * @fontSize : 13px
 * @fontWeight : 400;
 * @lineHeight : 19.5px
 */
export const BodyXSmall = styled.p`
  font-size: 13px;
  font-weight: 400;
  line-height: 19.5px;
`;

const PrefixIcon = styled.span`
  color: #14619d;
  font-weight: bold;
  background-color: #edf1f5;
  padding: 0 4px;
  border-radius: 7px;
  font-size: 9px;
  margin: -10px 0 0 -4px;
`;

/**
 * 기존 PK Column을 삭제하고 타이틀 앞에 PK 텍스트를 추가하는 방식으로 변경
 */
export const PrefixPK = (props: { style?: React.CSSProperties }) => (
  <PrefixIcon {...props}>PK</PrefixIcon>
);
