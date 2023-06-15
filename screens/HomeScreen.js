import { StyleSheet, View, Image, Pressable, Text } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.homeContainer}>
        <Text style={styles.homeHeaderText}>
          Discovering fresh & delicious food!
        </Text>
        <Image
          source={require("../assets/images/home-burger.png")}
          style={styles.homeImage}
        />

        <Pressable style={styles.homeButtonContainer}>
          <View style={styles.homeButton}>
            <Text style={styles.homeButtonText}>get started</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  homeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  homeHeaderText: {
    fontSize: 38,
    color: "white",
    textAlign: "center",
  },

  homeImage: {
    width: 300,
    height: 300,
  },

  homeButtonContainer: {
    flexDirection: "row",
    minWidth: "80%",
    width: "80%",
    // borderColor: "red",
    // borderWidth: 2,
  },

  homeButton: {
    backgroundColor: "tomato",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 5,
    minWidth: "80%",
    width: "80%",
    alignItems: "center",
  },

  homeButtonText: {
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default HomeScreen;
