import * as React from 'react';
import s from './Palette.module.scss';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useThemeContext } from '../../hooks/themeHook/themeHook';

const theme = (dark) => createTheme({
  palette: {
    primary: {
      main: dark? s.dark : s.light,
    }
  },
});

const Palette = ({children}) => {
  const { dark } = useThemeContext();
  return (
    <ThemeProvider theme={theme(dark)}>
     {children}
    </ThemeProvider>
  );
}

export default Palette;
