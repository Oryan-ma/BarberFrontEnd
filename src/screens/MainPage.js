
import React from 'react';
import {
  Text, View, Image, TextInput, FlatList, TouchableOpacity,
  StyleSheet
} from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import Icon from '@expo/vector-icons/AntDesign';
import { Services, Employees } from '../data/Data';
import { Avatar, Button, Card, Title, Paragraph, Checkbox } from 'react-native-paper';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import LottieView from "lottie-react-native";
import CCservices from "../components/CCservices";
import EmployeesList from "../components/Employee";
import Cal from "../components/calender";
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

      <View style={{ flex: 1, marginTop: 100 }}>
        <ProgressSteps>
          <ProgressStep label="Select Category">
            <View style={{ alignItems: 'center' }}>
              <Text>Categorys </Text>
              <CCservices />
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
          <ProgressStep label="Choose Brand">
            <View style={{ alignItems: 'center' }}>
              <Text>Choose Brand</Text>
            </View>
            <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'stretch',
              marginTop: 20,
            }}>
              <EmployeesList />
            </View>
          </ProgressStep>
          <ProgressStep label="Third Step">
            <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'stretch',
              marginTop: 20,
            }}>
              <Text>Home Screen</Text>
              <Button
                title="Go to About"
                onPress={() => this.props.navigation.navigate('Quiz')}
              />
            </View>

          </ProgressStep>
        </ProgressSteps>
      </View>
    );
  }
}
