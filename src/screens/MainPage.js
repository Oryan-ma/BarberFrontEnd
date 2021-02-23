
import React from 'react';
import {Text, View, Image, TextInput,FlatList,TouchableOpacity,
  StyleSheet} from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import Icon from '@expo/vector-icons/AntDesign';
import {Services,Employees} from '../data/Data';
import { Avatar, Button, Card, Title, Paragraph,Checkbox } from 'react-native-paper';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import LottieView from "lottie-react-native";
import CCservices from "../components/CCservices";
import EmployeesList from "../components/Employee";
import Cal from "../components/calender";
import {
  SCLAlert,
  SCLAlertButton
} from 'react-native-scl-alert';
export default class MainPage extends React.Component {

 constructor(props) {
super(props);
var serviceId = null;
  this.state = {
   barberId:0,
   appointmentdate:null
  }
}

getServices = (data)=>{
    this.serviceId=data;
    //alert(this.serviceId);

}
  componentDidMount(){ 
/* get services from database */
  }

    render() {
        return (
            
            <View style={{flex: 1, marginTop:100}}>
    <ProgressSteps>
        <ProgressStep label="First Step">
            <View style={{ alignItems: 'center' }}>
                <Text>Services </Text>
            </View>
    <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginTop:20,
      }}>
        <CCservices sendServices={this.getServices}/>
      </View>
        </ProgressStep>
        <ProgressStep label="Second Step">
            <View style={{ alignItems: 'center' }}>
                <Text>Choose Barber</Text>
            </View>
             <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        marginTop:20,
      }}>
        <EmployeesList/>
      </View>
        </ProgressStep>
        <ProgressStep label="Third Step">
            <View style={{ alignItems: 'center' }}>
                <Text>Book a Date</Text>
            </View>
            <Cal/>
        </ProgressStep>
    </ProgressSteps>
</View>
        );
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})