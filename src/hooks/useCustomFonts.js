import { useEffect } from 'react';
import { useFonts, Lato_700Bold, Lato_400Regular, Lato_300Light} from '@expo-google-fonts/lato';
import { Michroma_400Regular } from '@expo-google-fonts/michroma';
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold, Roboto_900Black} from '@expo-google-fonts/roboto';
import * as SplashScreen from 'expo-splash-screen';

export default function useCustomFonts() {
  const [fontsLoaded] = useFonts({
    Lato_700Bold,
    Lato_400Regular,
    Lato_300Light,
    Michroma_400Regular,
    Roboto_400Regular, 
    Roboto_500Medium, 
    Roboto_700Bold, 
    Roboto_900Black,
  });

  useEffect(() => {
    if (!fontsLoaded) {
      SplashScreen.preventAutoHideAsync();
    } else {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return fontsLoaded;
}
