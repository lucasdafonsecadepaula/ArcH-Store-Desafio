import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      background: string;
      secondaryBackground: string;
      text: string;
      error: string;
    };
  }
}
