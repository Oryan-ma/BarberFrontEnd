
import React from 'react';
import {
  Text, View, Image, TextInput, FlatList, TouchableOpacity,
  StyleSheet,
  ImageBackground
} from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import Icon from '@expo/vector-icons/AntDesign';
import { Services, Employees } from '../data/Data';
import { Avatar, Button, Card, Title, Paragraph, Checkbox } from 'react-native-paper';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import LottieView from "lottie-react-native";
import BrandsCategory from "../components/BrandsCategory";
import BrandsList from "../components/BrandsList";
//import { CircularCard } from "react-native-circular-card-view";
import CircularCard from "../lib/src/CircularCard";

import {
  SCLAlert,
  SCLAlertButton
} from 'react-native-scl-alert';
import { createStackNavigator, createAppContainer } from 'react-navigation';
export default class MainPage extends React.Component {

  constructor(props) {
    super(props);
    var serviceId = null;
    this.state = {
      barberId: 0,
      appointmentdate: null
    }
  }

  getServices = (data) => {
    this.serviceId = data;
    //alert(this.serviceId);

  }
  componentDidMount() {
    /* get services from database */
  }

  render() {
    const { navigate } = this.props.navigation;
    return (

      <View style={styles.container}>
        <ImageBackground source={require("../images/mymind-XUlsF9LYeVk-unsplash.jpg")} style={styles.image}>
          <ProgressSteps>
            <ProgressStep label="Select Category">
              <View style={{ alignItems: 'center' }}>
                <Text>Categorys </Text>
                <BrandsCategory />
              </View>
              <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
                marginTop: 20,
              }}>

              </View>
            </ProgressStep>

            <ProgressStep label="Play">
              <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'stretch',
                marginTop: 20,
              }}>
                <CircularCard style={styles.card}
                  title="Play"
                  backgroundColor="#000000"
                  source={require("../images/play.png")}

                  onPress={() => this.props.navigation.navigate('Quiz')}




                />


              </View>

            </ProgressStep>
          </ProgressSteps>
        </ImageBackground>
      </View>
    );
  }
}
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
    //padding: 10,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    //color: "white",
    marginTop: 150,
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    //backgroundColor: "#000000a0"
  },
  card: {
    //color: "white",
    borderRadius: 105,
    margin: 10,
    height: 50,
    width: 150,
    //padding: 20,
    //fontSize: 42,
    //fontWeight: "bold",
    textAlign: "center",
    //borderBottomLeftRadius: 8,
    //borderBottomRightRadius: 8,
    justifyContent: 'center',
    //backgroundColor: "#000000a0"
  }
});
