import React, { useState } from "react";
import { View, SafeAreaView, ActivityIndicator } from "react-native";
import { Header } from "./components/index";
import StartGame from "./screens/start-game/index";
import GameScreen from "./screens/game-screen/index";
import { useFonts } from "expo-font";
import { styles } from "./styles";
import theme from "./constants/theme";

export default function App() {
  const [loaded] = useFonts({
    "kdam-thmorpro-regular": require("./assets/fonts/KdamThmorPro-Regular.ttf"),
    "tirotelugu-regular": require("./assets/fonts/TiroTelugu-Regular.ttf"),
    "montserrat-italic-variablefont-wght": require("./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf"),
    "montserrat-variablefont-wght": require("./assets/fonts/Montserrat-VariableFont_wght.ttf"),
  });
  const [userNumber, setUserNumber] = useState();

  if (!loaded) {
    return <ActivityIndicator size="large" color={theme.colors.primary} />;
  }

  const onStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  let content = <StartGame onStartGame={onStartGame} />;

  if (userNumber) {
    content = <GameScreen userOptions={userNumber} />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header title="Adivina el número" />
        {content}
      </View>
    </SafeAreaView>
  );
}
