/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

export default class Login extends React.Component {
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{backgroundColor: '#FFF', height: '100%'}}>
                <Image
                    source={require('../images/image.jpg')}
                    style={{width: '100%', height: '43%'}}
                />
                <Text
                    style={{
                        fontSize: 30,
                       
                        alignSelf: 'center',
                    }}>
                    Fast Booking
                </Text>

                <Text
                    style={{
                        
                        marginHorizontal: 55,
                        textAlign: 'center',
                        marginTop: 5,
                        opacity: 0.4,
                    }}>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                </Text>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginHorizontal: 55,
                        borderWidth: 2,
                        marginTop: 50,
                        paddingHorizontal: 10,
                        borderColor: '#00716F',
                        borderRadius: 23,
                        paddingVertical: 2,
                    }}>
                    <Icon name="mail" color="#00716F" size={24} />
                    <TextInput style={{paddingHorizontal: 10}} placeholder='Username' />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginHorizontal: 55,
                        borderWidth: 2,
                        marginTop: 15,
                        paddingHorizontal: 10,
                        borderColor: '#00716F',
                        borderRadius: 23,
                        paddingVertical: 2,
                    }}>
                    <Icon name="mail" color="#00716F" size={24} />
                    <TextInput style={{paddingHorizontal: 10}} placeholder='Password'/>
                </View>

                <View
                    style={{
                        marginHorizontal: 55,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: 30,
                        backgroundColor: '#00716F',
                        paddingVertical: 10,
                        borderRadius: 23,
                    }}>
                    <Text
                         onPress={() => navigate('MainPage')}
                    style={{
                        alignSelf: 'center',
                        //color: '#00716F',
                       
                        //paddingVertical: 30,
                    }}>
                        Login
                    </Text>
                </View>
                <Text
                    onPress={() => navigate('Register')}
                    style={{
                        alignSelf: 'center',
                        color: '#00716F',
                      
                        paddingVertical: 30,
                    }}>
                    New User
                </Text>
            </View>
        );
    }
}
