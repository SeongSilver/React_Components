import { ThemeConfig } from 'antd'

export const CommonAntdTheme: ThemeConfig = {
  token: {
    colorPrimary: '#027945', // extendColors.green['500']
    colorSuccess: '#008A1E', // extendColors.success['500']
    colorWarning: '#FFB724', // extendColors.warning['500']
    colorInfo: '#2768FF', // extendColors.info['500']
    fontFamily: 'var(--font-pretendard-gov), system-ui, sans-serif;',
    fontSize: 17,
    fontSizeSM: 15,
  },
  components: {
    Button: {
      // Button 컴포넌트에 대한 스타일 오버라이드
      // Small
      paddingInlineSM: 8,
      paddingBlockSM: 4,
      controlHeightSM: 24,
      fontSizeSM: 15,

      // Medium (Default)
      paddingInline: 16,
      paddingBlock: 8,
      controlHeight: 32,
      fontSize: 17,

      // Large
      paddingInlineLG: 20,
      paddingBlockLG: 28,
      controlHeightLG: 56,
      fontSizeLG: 19,
    },
    Input: {
      // Input 컴포넌트에 대한 스타일 오버라이드
      // Small
      paddingInlineSM: 8,
      paddingBlockSM: 2,
      controlHeightSM: 24,
      fontSizeSM: 15,

      // Medium (Default)
      paddingInline: 12,
      paddingBlock: 4,
      controlHeight: 32,
      fontSize: 17,

      // Large
      paddingInlineLG: 16,
      paddingBlockLG: 12,
      controlHeightLG: 48,
      fontSizeLG: 19,
    },
  },
}
