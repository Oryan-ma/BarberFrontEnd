import React from "react";
import {
    Text,
    View,
    Image,
    TextInput,
    FlatList,
    TouchableOpacity,
    StyleSheet,
} from "react-native";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import Icon from "@expo/vector-icons/AntDesign";
import { Services, Employees } from "../data/Data";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";
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
import { SCLAlert, SCLAlertButton } from "react-native-scl-alert";

export default class MainPage extends React.Component {
    state = {
        show: false,
        id: 0,
    };

    handleOpen = () => {
        this.setState({ show: true });
    };

    handleClose = () => {
        this.setState({ show: false });
    };
    render() {
        var ServicesList = [];
        for (let i = 0; i < Services.length; i++) {
            ServicesList.push(
                <TouchableOpacity
                    key={Services[i].ServiceId}
                    style={{ flex: 1 }}
                    onPress={this.handleOpen}
                >
                    <Card style={{ flex: 1, padding: 20, margin: 20 }}>
                        <Card.Title
                            title={Services[i].ServiceName}
                            subtitle={
                                "Duration: " +
                                Services[i].ServiceTime +
                                "Minutes"
                            }
                        />
                        <Card.Content>
                            <Title> </Title>
                            <Paragraph>
                                Price: {Services[i].ServicePrice} Nis
                            </Paragraph>
                        </Card.Content>
                        <Card.Cover source={{ uri: Services[i].ServiceImg }} />
                        <Card.Actions>
                            <Button title="Show" onPress={this.handleOpen} />
                            <SCLAlert
                                theme="success"
                                show={this.state.show}
                                title="Great!"
                                subtitle="You Can Go Next.."
                            >
                                <SCLAlertButton
                                    theme="info"
                                    onPress={this.handleClose}
                                >
                                    <Text onPress={() => navigate("Register")}>
                                        Done
                                    </Text>
                                </SCLAlertButton>
                            </SCLAlert>
                        </Card.Actions>
                    </Card>
                </TouchableOpacity>
            );
        }

        var EmployeesList = [];
        for (let i = 0; i < Employees.length; i++) {
            EmployeesList.push(
                <View key={Employees[i].EmployeeId}>
                    <Card>
                        <Card.Title
                            title={Employees[i].EmployeeName}
                            subtitle={Employees[i].EmployeeLastName}
                        />
                        <Card.Content>
                            <Title> </Title>
                        </Card.Content>
                        <Card.Cover
                            source={{ uri: Employees[i].EmployeeImg }}
                        />
                    </Card>
                </View>
            );
        }
        return (
            <View style={{ flex: 1, marginTop: 100 }}>
                <ProgressSteps>
                    <ProgressStep label="First Step">
                        <View style={{ alignItems: "center" }}>
                            <Text>Services </Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "stretch",
                                marginTop: 20,
                            }}
                        >
                            {ServicesList}
                        </View>
                    </ProgressStep>
                    <ProgressStep label="Second Step">
                        <View style={{ alignItems: "center" }}>
                            <Text>Choose Barber</Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "stretch",
                                marginTop: 20,
                            }}
                        >
                            {EmployeesList}
                        </View>
                    </ProgressStep>
                    <ProgressStep label="Third Step">
                        <View style={{ alignItems: "center" }}>
                            <Text>Book a Date</Text>
                        </View>
                        <Text></Text>
                        <Calendar
                            markedDates={this.state._markedDates}
                            onDayPress={this.onDaySelect}
                            hideArrows={false}
                            markedDates={{
                                selected: true,
                            }}
                            style={[
                                styles.calendar,
                                { height: 350, flex: 1, arrowColor: "orange" },
                            ]}
                            dayComponent={({ date, state }) => {
                                return (
                                    <View>
                                        <Text
                                            style={{
                                                textMonthFontWeight: "bold",
                                                arrowColor: "orange",
                                                textDayFontSize: 26,
                                                textAlign: "center",
                                                color:
                                                    state === "enable"
                                                        ? "gray"
                                                        : "black",
                                            }}
                                        >
                                            {date.day}
                                        </Text>
                                    </View>
                                );
                            }}
                        />
                    </ProgressStep>
                </ProgressSteps>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
