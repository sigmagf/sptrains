import { shade, lighten } from 'polished';
import { useTheme } from 'styled-components';

type title = 'dark'|'light';

const useColorToneByTheme = (sVal: number, lVal: number, color: string, shadeOn:title, useThemeColor = false) => {
  const theme = useTheme();
  const realColor = useThemeColor ? theme.colors[color] : color;

  if(theme.title === shadeOn) {
    return shade(sVal, realColor);
  }

  return lighten(lVal, realColor);
};

export default useColorToneByTheme;
