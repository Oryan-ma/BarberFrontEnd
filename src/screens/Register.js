/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { Text, View, Image, TextInput } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";

export default class Register extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{ backgroundColor: "#FFF", height: "100%" }}>
                <Image
                    source={require("../images/image.jpg")}
                    style={{ width: "100%", height: "43%" }}
                />
                <Text
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                        fontSize: 30,

                        alignSelf: "center",
                    }}
                >
                    Save the world
                </Text>

                <Text
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                        marginHorizontal: 55,
                        textAlign: "center",
                        marginTop: 5,
                        opacity: 0.4,
                    }}
                >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                </Text>

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginHorizontal: 55,
                        borderWidth: 2,
                        marginTop: 50,
                        paddingHorizontal: 10,
                        borderColor: "#00716F",
                        borderRadius: 23,
                        paddingVertical: 2,
                    }}
                >
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#00716F"
                        style={{ paddingHorizontal: 10 }}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginHorizontal: 55,
                        borderWidth: 2,
                        marginTop: 15,
                        paddingHorizontal: 10,
                        borderColor: "#00716F",
                        borderRadius: 23,
                        paddingVertical: 2,
                    }}
                >
                    <TextInput
                        secureTextEntry
                        placeholder="Password"
                        placeholderTextColor="#00716F"
                        style={{ paddingHorizontal: 10 }}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginHorizontal: 55,
                        borderWidth: 2,
                        marginTop: 15,
                        paddingHorizontal: 10,
                        borderColor: "#00716F",
                        borderRadius: 23,
                        paddingVertical: 2,
                    }}
                >
                    <TextInput
                        secureTextEntry
                        placeholder="Confirm Password"
                        placeholderTextColor="#00716F"
                        style={{ paddingHorizontal: 10 }}
                    />
                </View>

                <View
                    style={{
                        marginHorizontal: 55,
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 30,
                        backgroundColor: "#00716F",
                        paddingVertical: 10,
                        borderRadius: 23,
                    }}
                >
                    <Text
                        style={{
                            color: "white",
                        }}
                    >
                        Register Customer
                    </Text>
                </View>
                <Text
                    onPress={() => navigate("RegisterBarber")}
                    style={{
                        marginHorizontal: 55,
                        textAlign: "center",
                        marginTop: 5,
                        opacity: 0.4,
                        marginHorizontal: 55,
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 30,
                        backgroundColor: "#00716F",
                        paddingVertical: 10,
                        borderRadius: 23,
                    }}
                >
                    You Barber ? Click here !
                </Text>
            </View>
        );
    }
}