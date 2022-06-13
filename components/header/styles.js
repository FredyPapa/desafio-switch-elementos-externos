import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 96,
    backgroundColor: theme.colors.backgroundMainTitle,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: theme.colors.mainTitle,
    fontSize: 28,
    fontFamily:'kdam-thmorpro-regular',
  },
});
