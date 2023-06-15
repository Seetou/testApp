import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <LinearGradient colors={["#eb5e55", "#000"]} style={styles.mainBg}>
      <StatusBar style="auto" />
      <HomeScreen />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  mainBg: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
