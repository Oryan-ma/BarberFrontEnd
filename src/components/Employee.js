import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const DATA = [
  {
    id: 1,
    Name: "Nike",
    Categoty: "Apparel",
  },
  {
    id: 2,
    Name: "Zara",
    Categoty: "Apparel",
  },
  {
    id: 3,
    Name: "Louis Vuitton",
    Categoty: "Apparel",
  },
  {
    id: 4,
    Name: "Hermes",
    Categoty: "Apparel",
  },
  {
    id: 5,
    Name: "Gucci",
    Categoty: "Apparel",
  },
  {
    id: 6,
    Name: "Chanel",
    Categoty: "Apparel",
  },
  {
    id: 7,
    Name: "Prada",
    Categoty: "Apparel",
  },
  {
    id: 8,
    Name: "Uniqlo",
    Categoty: "Apparel",
  },
  {
    id: 9,
    Name: "Burberry",
    Categoty: "Apparel",
  },
  {
    id: 10,
    Name: "Tom Ford",
    Categoty: "Apparel",
  },
  {
    id: 11,
    Name: "Ralph Lauren",
    Categoty: "Apparel",
  },
  {
    id: 12,
    Name: "Next",
    Categoty: "Apparel",
  },
  {
    id: 13,
    Name: "ASOS",
    Categoty: "Apparel",
  },
  {
    id: 14,
    Name: "Moncler",
    Categoty: "Apparel",
  },
  {
    id: 15,
    Name: "Adidas",
    Categoty: "Apparel",
  },

];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.appButtonContainer, style]}>
    <Text style={styles.appButtonText}>{item.Name}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#328776" : "#5E65FF";

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        style={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },

  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  appButtonText: {
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});


export default App;