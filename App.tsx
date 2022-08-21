import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
  Archivo_700Bold,
  useFonts,
} from '@expo-google-fonts/archivo';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/styles/theme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Archivo_700Bold,
    Inter_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
