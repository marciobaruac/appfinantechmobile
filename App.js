import React from 'react';
import useCustomFonts from './src/hooks/useCustomFonts';

import { theme } from './src/styles';
import { ThemeProvider } from 'styled-components/native';
import { Routes } from './src/routes';

export default function App() {
  // Carregar as fontes
  const fontsLoaded = useCustomFonts();

  if (!fontsLoaded) {
    return null;
  }


  return (
    <ThemeProvider theme={theme} >
      <Routes />
    </ThemeProvider>

  );
}
