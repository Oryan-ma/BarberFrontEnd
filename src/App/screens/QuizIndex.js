import React from "react";
import { ScrollView, StatusBar } from "react-native";


import ApparelQuestions from "../data/Apparel";
import CarsQuestions from "../data/Cars";
import FastFoodQuestions from "../data/FastFood";
import PersonalCareQuestions from "../data/PersonalCare";
import RetailQuestions from "../data/Retail";
import TechnologyQuestions from "../data/Technology";

import { RowItem } from "../components/RowItem";

export default ({ navigation }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Cars"
      color="#36b1f0"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Cars",
          questions: CarsQuestions,
          color: "#36b1f0"
        })
      }
    />
    <RowItem
      name="FastFood"
      color="#799496"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "FastFood",
          questions: FastFoodQuestions,
          color: "#799496"
        })
      }
    />
    <RowItem
      name="Apparel"
      color="#49475B"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Apparel",
          questions: ApparelQuestions,
          color: "#49475B"
        })
      }
    />
    <RowItem
      name="PersonalCare"
      color="#49475B"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "PersonalCare",
          questions: PersonalCareQuestions,
          color: "#49475B"
        })
      }
    />
    <RowItem
      name="Retail"
      color="#49475B"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Retail",
          questions: RetailQuestions,
          color: "#49475B"
        })
      }
    />
    <RowItem
      name="Technology"
      color="#49475B"
      onPress={() =>
        navigation.navigate("Quiz", {
          title: "Technology",
          questions: TechnologyQuestions,
          color: "#49475B"
        })
      }
    />
  </ScrollView>
);
