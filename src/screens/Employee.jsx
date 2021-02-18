
import React from 'react';
import {Text, View, Image, TextInput,FlatList,TouchableOpacity,
  StyleSheet} from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import Icon from '@expo/vector-icons/AntDesign';
import {Services,Employees} from '../data/Data';
import { Avatar, Button, Card, Title, Paragraph,Checkbox } from 'react-native-paper';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import LottieView from "lottie-react-native";
import {
  SCLAlert,
  SCLAlertButton
} from 'react-native-scl-alert';
export default class MainPageEmployee extends React.Component {

  state = {
    show: false,
    id:0,
  }

  handleOpen = () => {
    this.setState({ show: true })
   
  }

  handleClose = () => {
    this.setState({ show: false })
  }
    render() {
    return (    
    

		
			<View key = {Employees[0].EmployeeId}>
				<Card>
    <Card.Title title={Employees[0].EmployeeName} subtitle={ Employees[0].EmployeeLastName } />
    <Card.Content>
      <Title> </Title>
     
    </Card.Content>
    <Card.Cover source={{ uri: Employees[0].EmployeeImg}} />
   
  </Card>
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