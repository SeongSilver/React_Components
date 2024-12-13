// MIXIN 스타일
const MIXINS = {
  /**
   * 나열할 때 사용
   * @direction :
   * 기본 row
   * row               수평 나열
   * column            수직 나열
   * ""                빈 값으로 가능
   * @align :
   * 기본 center
   * flex-start        수직 기준 위에 배치
   * flex-end          수직 기준 아래에 배치
   * ""                빈 값으로 가능
   * @justify :
   * 기본 center
   * space-between     수평 기준 부모 너비 양끝에 공간없이 배치하여 늘림
   * space-around      수평 기준 부모 너비 양끝에 약간의 공간을 두고 배치하여 늘림
   * flex-start        수평 기준 왼쪽 배치
   * flex-end          수평 기준 오른쪽 배치
   */
  flexBox: (direction = "row", align = "center", justify = "center") => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,

  /**
   * 기본적으로 가운데 배치
   * @align :
   * 기본 center
   * flex-start        수직 기준 위에 배치
   * flex-end          수직 기준 아래에 배치
   * ""                빈 값으로 가능
   * @justify :
   * 기본 center
   * space-between     수평 기준 부모 너비 양끝에 공간없이 배치하여 늘림
   * space-around      수평 기준 부모 너비 양끝에 약간의 공간을 두고 배치하여 늘림
   * flex-start        수평 기준 왼쪽 배치
   * flex-end          수평 기준 오른쪽 배치
   */
  flexBasic: (align = "center", justify = "center") => `
    display: flex;
    align-items: ${align};
    justify-content: ${justify};
  `,

  /**
   * 요소를 띄워서 가운데 배치
   * @type :
   * 기본 absolute
   * absolute        요소를 띄울 때
   * fixed           요소를 고정할때
   * @left :
   * 기본 auto
   * number          위치시킬 값 혹은 px
   * @right :
   * 기본 auto
   * number          위치시킬 값 혹은 px
   * @top :
   * 기본 50%
   * number|string   위치시킬 값 혹은 px
   */
  positionCenter: (
    type = "absolute",
    left = "auto",
    right = "auto",
    top = "50%",
  ) => {
    if (type === "absolute" || type === "fixed")
      return `
        position: ${type};
        left: ${left};
        right: ${right};
        top: ${top};
        transform: translate(-50%, -50%);
      `;
    return;
  },
};

/**
 * 폰트 설정 계산
 * 폰트 크기를 넘기면 정의된 폰트 굵기와 행간 계산되며
 * 13, 15, 17, 19, 20, 24 선택 가능
 * 추가로 설정시 weight와 lineHeight 지정
 * @size :
 * 필수 - 픽셀 단위
 * 타입 : number
 * @weight :
 * 선택옵션 - 100 ~ 900 또는 "bold"
 * 타입 : number | string
 * @lineHeight :
 * 선택옵션 - 픽셀 단위
 * 타입 : number
 */
const fontMixins = {
  fontSizing: (size: number, weight?: number | string, lineHeight?: number) => {
    if (size === 13) {
      return `
      font-size: ${size}px;
      font-weight: ${weight ? weight : 400};
      line-height: ${lineHeight ? lineHeight : 19.5}px;
    `;
    } else if (size === 15) {
      return `
      font-size: ${size}px;
      font-weight: ${weight ? weight : 400};
      line-height: ${lineHeight ? lineHeight : 22.5}px;
    `;
    } else if (size === 17) {
      return `
      font-size: ${size}px;
      font-weight: ${weight ? weight : 400};
      line-height: ${lineHeight ? lineHeight : 25.5}px;
    `;
    } else if (size === 19) {
      return `
      font-size: ${size}px;
      font-weight: ${weight ? weight : 700};
      line-height: ${lineHeight ? lineHeight : 28.5}px;
    `;
    } else if (size === 20) {
      return `
      font-size: ${size}px;
      font-weight: ${weight ? weight : 700};
      line-height: ${lineHeight ? lineHeight : 30}px;
    `;
    } else if (size === 24) {
      return `
      font-size: ${size}px;
      font-weight: ${weight ? weight : 700};
      line-height: ${lineHeight ? lineHeight : 36}px;
    `;
    } else {
      return `
      font-size: ${size}px;
      font-weight: ${weight ? weight : 400};
      line-height: ${lineHeight ? lineHeight + "px" : "1.4rem"};
    `;
    }
  },
};

const Theme = {
  MIXINS,
  fontMixins,
};

export default Theme;
