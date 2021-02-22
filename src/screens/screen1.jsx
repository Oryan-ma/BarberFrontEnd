import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
    View,
    Image,
    TextInput,
    FlatList,
    TouchableOpacity,
    
} from 'react-native';
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
} from "react-native-paper";
//import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import LottieView from "lottie-react-native";
import CCservices from "./CCservices";
import EmployeesList from "./Employee";
import Cal from "./calender";
import { SCLAlert, SCLAlertButton } from "react-native-scl-alert";

export default class Screen1 extends Component<{}> {
  static navigationOptions = {
    title: 'First Screen',
  };

  constructor(props) {
    super(props)

    this.state = {
      prevScreentor: this.props.navigation.state.params.queue
      
    };
    console.log("keynan",this.state.prevScreentor[1].Barber_Email);
    //alert(this.state.prevScreentor[1].Barber_Email)
  }
  

  render() {
    return (
         <View style={styles.container}>
              <View style={{ backgroundColor: "#FFF", height: "100%" }}>
            <Image
                source={require("../images/image.jpg")}
                style={{ width: "100%", height: "30%" }}
            />

            <Card>
                <Card.Content>
                    <Title style={{ textAlign: "center" }}>
                      Your Appointments
                    </Title>
                    <Text></Text>
                    <Paragraph></Paragraph>
                </Card.Content>
                <Card.Cover source={require("../images/showbook.jpg")} />
                <Card.Actions>
                    <Button
                        onPress={() => navigate("UserApp")}
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                        }}
                    >
                        Show
                        </Button>

                </Card.Actions>
            </Card>
            <Card>
                <Card.Content>
                    <Title>{'asd'} New Appointment</Title>
                    <Paragraph>Card content</Paragraph>
                </Card.Content>
                <Card.Cover source={require("../images/newapp.jpg")} />
                <Card.Actions>
                    <Button onPress={() => navigation.navigate("MainPage")}>
                        Add
                        </Button>
                </Card.Actions>
            </Card>
        </View>
         </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
