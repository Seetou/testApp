import { View, Text, StyleSheet, Image, Pressable } from "react-native";

const ProductsScreen = ({ title, price, quantity }) => {
  return (
    <View style={styles.mainContainer}>
      {/* HEADER */}
      <Image
        source={require("../assets/images/burger-home-.jpg")}
        style={styles.image}
      />
      {/* DETAILS */}

      <View style={styles.detailsContainer}>
        <Text style={styles.productTitle}>{title}</Text>
        <View style={styles.productDatas}>
          <Text style={styles.price}>
            {new Intl.NumberFormat("us-US", {
              style: "currency",
              currency: "USD",
            }).format(price)}
          </Text>
          <Text>{quantity}</Text>
        </View>
        {/* INGREDIENTS */}
        <View></View>
        {/* DESCRIPTION */}
        <View>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            veniam vero molestiae voluptate, consequatur facilis tenetur
            doloribus velit nisi. Et officiis maiores autem. Mollitia neque non
            at rem ducimus optio? Corporis asperiores quam dolorum animi, amet
            sint sit voluptatem rem error libero, in dolorem quisquam vel dolor
            reprehenderit? Quisquam reprehenderit culpa iste minus ut
            voluptatibus laboriosam harum possimus repellat numquam.
          </Text>
        </View>
        {/* BUTTON */}
        <View>
          <Pressable style={styles.buttonContainer}>
            <Text style={styles.buttonText}>add to cart</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // borderColor: "yellow",
    // borderWidth: 3,
  },

  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },

  detailsContainer: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "space-between",
    padding: 10,
  },

  productTitle: {
    fontSize: 36,
  },

  productDatas: {
    flexDirection: "row",
  },

  price: {
    fontSize: 30,
  },

  description: {
    fontSize: 16,
  },

  buttonContainer: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    backgroundColor: "#eb5e55",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});

export default ProductsScreen;
