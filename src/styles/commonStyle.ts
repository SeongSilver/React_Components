import {
  TitleXXSmall,
  BodyXSmall,
  TitleXLarge,
} from "../components/common/Font";
import styled from "styled-components";

export const DateText = styled.div`
  font-size: 17px;
  // font-weight: 700;
  text-align: center;
  line-height: 22.5px;
  color: inherit;
`;

// 데이터등록 테이블 안내문구
export const NoticeText = styled.span<{ $red?: boolean }>`
  ${({ theme }) => theme.fontMixins.fontSizing(13, 400, 32)};
  color: ${({ $red }) => ($red ? "var(--color-red)" : "#98690a")};
`;

// 버튼 두개 양측 배치 (버튼 세개 배치시 가운데 버튼에 margin-left, margin-right : auto 주면 정렬 됨)
export const ButtonGroup = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox("row", "center", "space-between")}
  gap: 10px;
`;

// wrap 라인 스타일 $line props로 "top", "bottom" 일때 해당하는 라인 생성
// margin 도 문자열로 추가 가능
export const InnerLine = styled.section<{ $line?: string; $margin?: string }>`
  ${({ $line }) =>
    $line === "top"
      ? `border-top: 2px solid var(--color-gray-90);`
      : $line === "bottom"
      ? `border-bottom: 2px solid var(--color-gray-90);`
      : `border-top: 2px solid var(--color-gray-90); border-bottom: 2px solid var(--color-gray-90);`};
  ${({ $margin }) => $margin && `margin: ${$margin}`};
  padding: 16px 0;
`;

export const FlexJustifyStart = styled.div`
  ${({ theme }) => theme.MIXINS.flexBasic("center", "start")}
  width: 100%;
`;

export const FlexJustifyBetween = styled.div`
  ${({ theme }) => theme.MIXINS.flexBasic("center", "space-between")}
  width: 100%;
`;

export const FlexJustifyEnd = styled.div`
  ${({ theme }) => theme.MIXINS.flexBasic("center", "end")}
  width: 100%;
`;

export const FlexAlignCenter = styled.div`
  ${({ theme }) => theme.MIXINS.flexBasic("center")}
  width: 100%;
`;

export const FlexJustifyCenter = styled.div`
  ${({ theme }) => theme.MIXINS.flexBasic()}
  width: 100%;
`;

// 검색단 wrapper
export const SearchWrapper = styled.div`
  ${({ theme }) => theme.MIXINS.flexBasic("center", "start")}
  flex-wrap: wrap;
  padding: 40px;
  background-color: #ededed;
  // border: 1px solid var(--color-gray-40);

  table {
    tr {
      th,
      td {
        border-top: 0;
      }
    }
  }
`;
// 검색단 검색어 입력 공통 스타일
export const SearchKeywordWrapper = styled.div`
  ${({ theme }) => theme.MIXINS.flexBasic("center", "space-between")}
  width: 100%;
  padding: 40px;
  border-bottom: 1px solid var(--color-gray-40);
  border-top: 2px solid var(--color-dieblue);
`;
// 검색단 가로 spacing
export const SearchSpaceHorizontal = styled.div`
  width: 32px;
`;
// 검색단 세로 spacing
export const SearchSpaceVertical = styled.div`
  height: 32px;
`;
// 검색단 조건 검색 하단 버튼들
export const SearchParamsButtons = styled.div`
  ${({ theme }) => theme.MIXINS.flexBasic("center", "end")}
  margin-top: 16px;
`;

export const GrayLine = styled.span`
  background-color: var(--color-gray-40);
  width: 100%;
  height: 1px;
`;

export const TableContent = styled.div`
  display: contents;
  width: 100%;
`;

export const ThreeStageLayout = styled.div`
  ${({ theme }) => theme.MIXINS.flexBasic("center", "space-between")}
  width: 100%;
  height: 476px;

  > * {
    height: 100%;
  }
`;
export const SideSelectionArea = styled.div`
  ${({ theme }) => theme.MIXINS.flexBasic("start", "start")}
  flex-direction: column;
  width: 300px;

  > * {
    width: 100%;
  }
`;
export const SideSelectionHeader = styled.div`
  padding: 6px 8px;
  background-color: #edf1f5;
  border: 1px solid var(--color-gray-40);
  border-bottom: none;
`;
export const SideSelectionBody = styled.div<{ $topborder: boolean }>`
  overflow-x: scroll;
  flex-grow: 1;
  border: 1px solid var(--color-gray-40);
  ${(props) => !props.$topborder && "border-top: 0;"}
`;
export const DropdownHeader = styled.div`
  ${({ theme }) => theme.MIXINS.flexBasic("center", "space-between")}
  height: 36px;
  padding: 0 8px;
  cursor: pointer;
`;
export const DropdownSubHeader = styled.div`
  ${({ theme }) => theme.MIXINS.flexBasic("center", "space-between")}
  height: 36px;
  padding: 0 24px;
  background-color: #f8f8f8;
  cursor: pointer;
`;
export const DropdownBody = styled.div`
  min-height: 48px;
  padding: 8px 8px 8px 24px;
  background-color: var(--color-gray-5);
`;
export const DropdownLabel = styled.div`
  width: 88px;
`;
export const DropdownForm = styled.div`
  width: 171px;
`;
export const DropdownComment = styled(BodyXSmall)`
  width: 100%;
  margin-top: 10px;
`;
export const DetailTableArea = styled.div`
  ${({ theme }) => theme.MIXINS.flexBasic("start", "start")}
  flex-direction: column;
  width: 610px;
`;
export const AlignedTitleXXSmall = styled(TitleXXSmall)`
  ${({ theme }) => theme.MIXINS.flexBasic()}
  height: 36px;
`;
export const DrowdownArr = styled.img<{ $isopen?: boolean }>`
  transform: ${(props) => (props.$isopen ? "rotateZ(0)" : "rotateZ(180deg)")};
`;

// 테이블 데이터 없음
export const StyledNoData = styled.div`
  text-align: center;
  padding: 100px 0;
`;

// 리스트 탭/조회 옵션 감싸는 부분
export const ListOptionsWrapper = styled.div<{ $isnotab?: boolean }>`
  ${({ theme }) => theme.MIXINS.flexBasic("center", "space-between")}
  ${(props) => props.$isnotab && "justify-content: end; padding-bottom: 8px;"};
  border-bottom: 2px solid var(--color-dieblue);
  margin-top: 16px;
`;

export const ModalHeader = styled(TitleXLarge)`
  padding: 0 24px 24px;
  border-bottom: 1px solid var(--color-gray-40);
`;

export const EmptyDataTableWrapper = styled.table`
  width: 100%;
`;

export const ThickLine = styled.div`
  margin-top: 40px;
`;

export const AttachedFileContent = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox("", "", "space-between")};
  width: 700px;
  margin-bottom: 5px;
`;

export const AttachedFileItems = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox()};
  cursor: pointer;
  gap: 8px;
`;

export const StyledCaption = styled.caption`
  // position: absolute;
  // width: 0;
  // height: 0;
  // opacity: 0;
  // z-index: -1;
  visibility: hidden;
  width: 0;
  height: 0;
  font-size: 0;
  line-height: 0;
  overflow: hidden;
`;

export const StyledDefaultButton = styled.button`
  font-family: Pretendard Variable;
  padding: 0;
  justify-content: start;
  &:focus {
    outline: 1px solid blue;
  }
`;

export const Dimmed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: "10px";
`;
export const SearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #c6c6c6;
  padding: 2px;
  margin: 8px 0;
  margin-right: 16px;
`;

export const StyledDetailTagWrapper = styled.div`
  // max-width: 76px;
  // height: 56px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;

  &:not(:first-child) {
    margin-top: 8px;
  }
`;

export const StyledCountList = styled.div`
  display: flex;
  > * {
    position: relative;
    font-size: 20px;
    &:not(:last-child) {
      margin-right: 30px;
      &:after {
        display: block;
        content: "";
        position: absolute;
        right: -16px;
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        height: 16px;
        background: var(--color-gray-40);
      }
    }

    &:first-child {
      margin-right: 36px;
      &:after {
        content: ">";
        width: auto;
        height: auto;
        background: none;
        right: -25px;
        color: var(--color-gray-40);
        font-weight: 200;
        font-size: 22px;
        margin-top: -2px;
      }
    }
  }
`;
