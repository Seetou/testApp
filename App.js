import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./components/StackNavigator";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <LinearGradient colors={["#eb5e55", "#000"]} style={styles.flexed}>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.flexed}>
        <NavigationContainer>
          <StackNavigator />
          {/* <HomeScreen /> */}
          {/* <ProductsScreen title={"Double Burger"} price={8} quantity={1} /> */}
        </NavigationContainer>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  flexed: {
    flex: 1,
  },
});

export default App;
