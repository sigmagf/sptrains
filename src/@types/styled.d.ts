import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: 'dark' | 'light';

    colors: {
      primary: string;
      primaryText: string;
      secondary: string;
      secondaryText: string;

      info: string;
      infoText: string;
      warning: string;
      warningText: string;
      success: string;
      successText: string;
      danger: string;
      dangerText: string;

      background: string;
      text: string;

      shaddow: string;
    };

    toggleTheme: () => void;

  }
}
