import React, { Component } from "react";
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    FlatList,
    TouchableOpacity, ImageBackground
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
import MyNavigator from '../navigations/Navigator';
import CircularCard from "../lib/src/CircularCard";
import ImagedCard from "react-native-imaged-card";

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
                        <Text style={styles.text}> Hello, Keynan</Text>
                    </View>
                    <View>

                        <CircularCard style={styles.card}
                            title="Marketing"
                            backgroundColor="#417C7B"
                            source={require("../images/marketing1.jpg")}

                            onPress={() =>
                                navigation.navigate("MainPage")
                            }




                        />


                    </View>
                    <View>


                    </View>
                    <CircularCard style={styles.card}
                        title="Play"
                        backgroundColor="#417C7B"
                        source={require("../images/game.jpg")}

                        onPress={() =>
                            navigation.navigate("Quiz")
                        }




                    />
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
        //justifyContent: "center",
        // borderRadius: 20,

        //borderBottomLeftRadius: 20,
        //borderBottomRightRadius: 20,
    },
    imagecard: {
        resizeMode: "cover",
        //borderRadius: 80,
        margin: 10,
        padding: 10,
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
        margin: 20,
        //padding: 20,
        //fontSize: 42,
        //fontWeight: "bold",
        //textAlign: "center",
        //borderBottomLeftRadius: 8,
        //borderBottomRightRadius: 8,
        // justifyContent: 'center',
        //backgroundColor: "#000000a0"
        borderWidth: 4,
        borderColor: "#181613",
    }
});