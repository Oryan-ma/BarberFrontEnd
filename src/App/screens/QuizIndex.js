import React from "react";
import { ImageBackground, ScrollView, StatusBar, StyleSheet } from "react-native";


import ApparelQuestions from "../data/Apparel";
import CarsQuestions from "../data/Cars";
import FastFoodQuestions from "../data/FastFood";
import PersonalCareQuestions from "../data/PersonalCare";
import RetailQuestions from "../data/Retail";
import TechnologyQuestions from "../data/Technology";

import { RowItem } from "../components/RowItem";
import CircularCard from "../../lib/src/CircularCard";

export default ({ navigation }) => (
  <ImageBackground source={require("../../images/mymind-XUlsF9LYeVk-unsplash.jpg")} style={styles.image}>
    <ScrollView>

      <CircularCard style={styles.card}
        title="Cars"
        source={require("../../images/car.jpg")}
        onPress={() =>
          navigation.navigate("Quiz", {
            title: "Cars",
            questions: CarsQuestions,
            color: "#6F96B8"
          })
        }
      />
      <CircularCard style={styles.card}
        title="Fast Food"
        source={require("../../images/fastfood.jpg")}
        onPress={() =>
          navigation.navigate("Quiz", {
            title: "FastFood",
            questions: FastFoodQuestions,
            color: "#6F96B8"
          })
        }
      />
      <CircularCard style={styles.card}
        title="Technology"
        source={require("../../images/Technology.jpg")}
        onPress={() =>
          navigation.navigate("Quiz", {
            title: "Technology",
            questions: TechnologyQuestions,
            color: "#6F96B8",
          })
        }
      />
      <CircularCard style={styles.card}
        title="Retail"
        source={require("../../images/Retail.png")}
        onPress={() =>
          navigation.navigate("Quiz", {
            title: "Retail",
            questions: RetailQuestions,
            color: "#6F96B8"
          })
        }
      />
      <CircularCard style={styles.card}
        title="Personal Care"
        source={require("../../images/PersonalCare.png")}
        onPress={() =>
          navigation.navigate("Quiz", {
            title: "PersonalCare",
            questions: PersonalCareQuestions,
            color: "#6F96B8"
          })
        }
      />
      <CircularCard style={styles.card}
        title="Apparel"
        source={require("../../images/Apparel.jpg")}
        onPress={() =>
          navigation.navigate("Quiz", {
            title: "Apparel",
            questions: ApparelQuestions,
            color: "#6F96B8",
          })
        }
      />
    </ScrollView>
  </ImageBackground>
)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  top: {
    flex: 0.3,
    backgroundColor: "grey",
    borderWidth: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  middle: {
    flex: 0.3,
    backgroundColor: "beige",
    borderWidth: 5,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: "pink",
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    // borderRadius: 20,

    //borderBottomLeftRadius: 20,
    //borderBottomRightRadius: 20,
  },
  imagecard: {
    resizeMode: "cover",
    //borderRadius: 80,
    margin: 10,
    padding: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    color: "black",
    marginTop: 150,
    fontSize: 62,
    //fontWeight: "bold",
    textAlign: "center",
    //backgroundColor: "#000000a0"
  },
  card: {
    //color: "white",
    borderRadius: 105,
    margin: 20,
    //padding: 20,
    //fontSize: 42,
    //fontWeight: "bold",
    //textAlign: "center",
    //borderBottomLeftRadius: 8,
    //borderBottomRightRadius: 8,
    // justifyContent: 'center',
    //backgroundColor: "#000000a0"
    borderWidth: 3,
    borderColor: "#000000",
  }
});

