/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { Text, View, Image, TextInput, ScrollView } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
import { useState } from "react";

export default function Register(props) {

    const [Name, setName] = useState("");
    const [Last_Name, setLast_Name] = useState("");
    const [Gender, setGender] = useState("");
    const [Password, setPassword] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");

    const { navigate } = props.navigation;

    const url = `http://proj.ruppin.ac.il/igroup26/test2/tar6/api/`;

    const register = async () => {
        const user = {
            Name: Name,
            Last_Name: Last_Name,
            Gender: Gender,
            Password: Password,
            Email: Email,
            Phone: Phone
        }

        fetch(url + `customer`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            //mode: 'cors', // no-cors, *cors, same-origin
            //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            //redirect: 'follow', // manual, *follow, error
            //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(user) // body data type must match "Content-Type" header
        })
            .then(res => res.json())
            .then((response) => succses(response))
            .catch(error => { console.log(error); });
    }
    const succses = (user) => {
        console.log("User: ", user);
        navigate("Login");
    }

    return (
        <View style={{ backgroundColor: "#FFF", height: "100%" }} >
            <View>

                <Image
                    source={require("../images/image.jpg")}
                    style={{ width: "100%", height: "43%" }}
                />
                <Text
                    // eslint-disable-next-line react-native/no-inline-styles
                    style={{
                        fontSize: 25,

                        alignSelf: "center",
                    }}
                >
                    Register now to my barber shop
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
                    All customers of the barbershop are allowed to register for
                    a Maman number
                </Text>
            </View>
            <ScrollView>


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
                        onChangeText={(text) => setEmail(text)}
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
                        onChangeText={(text) => setPassword(text)}
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
                        placeholder="Name"
                        placeholderTextColor="#00716F"
                        style={{ paddingHorizontal: 10 }}
                        onChangeText={(text) => setName(text)}
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
                        placeholder="Last_name"
                        placeholderTextColor="#00716F"
                        style={{ paddingHorizontal: 10 }}
                        onChangeText={(text) => setLast_Name(text)}
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
                        placeholder="Phone"
                        placeholderTextColor="#00716F"
                        style={{ paddingHorizontal: 10 }}
                        onChangeText={(text) => setPhone(text)}
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
                        placeholder="Gender"
                        placeholderTextColor="#00716F"
                        style={{ paddingHorizontal: 10 }}
                        onChangeText={(text) => setGender(text)}
                    />
                </View>
            </ScrollView>
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
                    onPress={register}
                    style={{
                        color: "white",
                    }}
                >
                    Register
                    </Text>
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
                    onPress={() => navigate("RegisterBarber")}
                    style={{
                        color: "white",
                    }}
                >
                    Register for barbaer
                    </Text>
            </View>
        </View>
    );
}
