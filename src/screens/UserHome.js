import React, { Component } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    FlatList,
    TouchableOpacity,
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
                <View>
                    <Text
                        onPress={() =>
                            navigation.navigate("UserApp")   /* ################################# Show User Apointment */
                        } 
                        style={{
                            alignSelf: "center",
                            color: "#00716F",
                            paddingVertical: 30,
                        }}
                    >
                        My Appointments
                    </Text>
                </View>

                <View>
                    <Text
                        onPress={() => navigation.navigate("MainPage")}  /* #################################  User New Apointment */
                        style={{
                            alignSelf: "center",
                            color: "#00716F",
                            paddingVertical: 30,
                        }}
                    >
                        Book New Appointments
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        //alignItems: 'center',
        backgroundColor: "#F5FCFF",
    },
});
