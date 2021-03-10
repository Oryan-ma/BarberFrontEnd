import React, { Component } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    FlatList,
    TouchableOpacity,ImageBackground
} from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import Icon from "@expo/vector-icons/AntDesign";
import { Services, Employees } from "../data/Data";
import {
    Avatar,
    Button,
    Card,
    Title,
    Paragraph,
    Checkbox,
    List,
} from "react-native-paper";
import LottieView from "lottie-react-native";
import { SCLAlert, SCLAlertButton } from "react-native-scl-alert";
import UserAppointments from "./UserAppointments";

export default class UserHome extends Component<{}> {
    static navigationOptions = {
        title: "First Screen",
    };

    constructor(props) {
        super(props);

        this.state = {};
        //alert(this.state.prevScreentor[1].Barber_Email)
    }

    render() {
        const { navigation } = this.props;

        return (
            <View style={styles.container}>
            <ImageBackground source={require("../images/mymind-XUlsF9LYeVk-unsplash.jpg")} style={styles.image}>
            
                <View>
                
               
                
                <Card> 
   
    <Card.Cover source={require("../images/showbook.jpg")} />
    <Card.Actions>
      <Button onPress={() =>
                            navigation.navigate("UserApp")  
                        } >My Next Appointments </Button>
     
    </Card.Actions>
  </Card>
</View>
                <View>
                                    
                <Card> 
   
    <Card.Cover source={require("../images/newapp.jpg")} />
    <Card.Actions>
      <Button onPress={() =>
                            navigation.navigate("MainPage")  
                        } >Book New Appointment</Button>
     
    </Card.Actions>
  </Card>
                </View>
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
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});