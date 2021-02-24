import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const DATA = [
  {
        id: 1,
        Barber_Id: "avi@gmail.com",
        Service_Name: "Men Haircut",
        Service_Price: 50,
        
    },
    {
        id: 2,
        Barber_Id: "avi@gmail.com",
        Service_Name: "Child Haircut",
        Service_Price: 30,
        
    },
    {
        id: 3,
        Barber_Id: "yosi@gmail.com",
        Service_Name: "Men Haircut",
        Service_Price: 50,
        
    },
];

const Item = ({ item, onPress, style }) => (
  <TouchableOpacity onPress={onPress} style={[styles.appButtonContainer, style]}>
    <Text style={styles.appButtonText}>{item.Service_Name}</Text>
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