import React, { useEffect } from "react";
import { Text, View, Image, TextInput, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/AntDesign";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({ navigation }) {
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    let User = {};

    const url = `http://proj.ruppin.ac.il/igroup26/test2/tar6/api/`;

    const login = async () => {
        const user = {
            Password: Password,
            Email: Email,
        };

        fetch(url + `customer/login`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            //mode: 'cors', // no-cors, *cors, same-origin
            //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            //redirect: 'follow', // manual, *follow, error
            //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(user), // body data type must match "Content-Type" header
        })
            .then((res) => { return res.json() })
            .then((response) => succses(response))
            .catch((error) => {
                console.log(error);
            });
    };
    const succses = async (user) => {
        console.log("succses user: ", user);
        User = user;
        //await setUser(user);
        getAllQueue();
    };
    const getAllQueue = () => {
        fetch(url + `queue`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            //mode: 'cors', // no-cors, *cors, same-origin
            //cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            //credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            //redirect: 'follow', // manual, *follow, error
            //referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            //body: JSON.stringify() // body data type must match "Content-Type" header
        })
            .then((res) => {
                return res.json();
            })
            .then((response) => succsesQueue(response))
            .catch((error) => {
                console.log(error);
            });
    };
    const succsesQueue = (queue) => {
        storeUser();
        storeQueue(queue);
        console.log("User: ", User);
        console.log("queue: ", queue);
        navigation.navigate("UserHome");
    };

    const storeUser = async () => {
        try {
            await AsyncStorage.setItem('@user', JSON.stringify(User))
        } catch (e) {
            // saving error
        }
    }
    const storeQueue = async (queue) => {
        try {
            await AsyncStorage.setItem('@queue', JSON.stringify(queue))
        } catch (e) {
            // saving error
        }
    }

    return (
        <View style={styles.container}>
            <View
                style={{
                    paddingVertical: 200,
                }}
            >
                <Text
                    style={{
                        fontSize: 25,

                        alignSelf: "center",
                    }}
                >
                    Logging Account MainPage
                </Text>

                <Text
                    style={{
                        marginHorizontal: 55,
                        textAlign: "center",
                        marginTop: 5,
                        opacity: 0.4,
                    }}
                >
                    You now login to app
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
                    <Icon name="mail" color="#00716F" size={26} />
                    <TextInput
                        style={{ paddingHorizontal: 10 }}
                        placeholder="Username"
                        onChangeText={(v) => setEmail(v)}
                        text="Oryan"
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
                    <Icon name="password" color="#00716F" size={26} />
                    <TextInput
                        style={{ paddingHorizontal: 10 }}
                        placeholder="Password"
                        secureTextEntry
                        onChangeText={(v) => setPassword(v)}
                    />
                </View>
                <TouchableOpacity
                    onPress={login}
                //onPress={() => navigate("UserHome")}
                >
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
                                alignSelf: "center",
                                //color: '#00716F',

                                //paddingVertical: 30,
                            }}
                        >
                            Login
                        </Text>
                    </View>
                </TouchableOpacity>
                <Text
                    onPress={() => navigation.navigate("Register")}
                    style={{
                        alignSelf: "center",
                        color: "#00716F",

                        paddingVertical: 70,
                    }}
                >
                    New User
                </Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 4,
        // justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 20,
        margin: 10,
        height: 200,
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
});
