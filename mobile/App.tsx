import { StatusBar } from 'expo-status-bar';
import React, { useCallback, createContext, useState } from 'react';
import light from './src/styles/themes/light';
import dark from './src/styles/themes/dark';

import { ThemeProvider } from 'styled-components';

import { AppLoading } from 'expo';

import { Archivo_400Regular, Archivo_700Bold, useFonts } from '@expo-google-fonts/archivo';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';

import AppStack from './src/routes/AppStack';

interface ThemeContextProps {
  toggleTheme(): void;
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export default function App() {

  const [theme, setTheme] = useState(light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);

  }, [theme]);

  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  } else {

    return (
            <ThemeContext.Provider value={{ toggleTheme }}>
              <ThemeProvider theme={theme}>
                <AppStack/>
                <StatusBar style="light"/>
              </ThemeProvider>
            </ThemeContext.Provider>
    );
  }

}

export { ThemeContext };
