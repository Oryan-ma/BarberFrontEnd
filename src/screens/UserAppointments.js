import React from 'react';
import { useEffect } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  let userQueue = [];
  let user = {};
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  useEffect(() => {

    const getData = async () => {
      let queue = {};
      try {
        user = JSON.parse(await AsyncStorage.getItem('@user'));
        queue = JSON.parse(await AsyncStorage.getItem('@queue'));
      } catch (e) {
        console.log(e);
        // error reading value
      }
      for (let i = 0; i < queue.length; i++) {
          console.log("Keynan",queue[i])
        if (queue[i].Customer_Email === user.Email) {
          userQueue.push(queue[i]);
        }
      }
      // console.log("user: ", user);
      // console.log("queue: ", queue);
      console.log('====================================');
      console.log("userQueue: ", userQueue);
      console.log('====================================');
    }
    getData();
  });

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#5E65FF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;