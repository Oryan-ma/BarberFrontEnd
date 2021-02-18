
import React from 'react';
import {Text, View, Image, TextInput,FlatList,TouchableOpacity,
    StyleSheet} from 'react-native';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import Icon from '@expo/vector-icons/AntDesign';
import {Services,Employees} from '../data/Data';
import { Avatar, Button, Card, Title, Paragraph,Checkbox } from 'react-native-paper';
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import LottieView from "lottie-react-native";
import CCservices from './CCservices';
import EmployeesList from './Employee';
import Cal from "./calender";
import {
    SCLAlert,
    SCLAlertButton
} from 'react-native-scl-alert';
export default class UserHome extends React.Component {




    render() {
        const {navigate} = this.props.navigation;
        return (

            <View style={{flex: 1, marginTop:100}}>
                <Card>
                   
                    <Card.Content>
                        <Title>My Appointments</Title>
                        <Paragraph>Card content</Paragraph>
                    </Card.Content>
                    <Card.Cover source={ require('../images/showbook.jpg' )} />
                    <Card.Actions>
                       
                        <Button onPress={() => navigate('UserApp')}>Show</Button>
                    </Card.Actions>
                </Card>
                <Card>

                    <Card.Content>
                        <Title>Create New Appointment</Title>
                        <Paragraph>Card content</Paragraph>
                    </Card.Content>
                    <Card.Cover source={ require('../images/newapp.jpg' )} />
                    <Card.Actions>

                        <Button onPress={() => navigate('MainPage')}>Add</Button>
                    </Card.Actions>
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