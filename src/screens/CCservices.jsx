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
export default class MainPageService extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Servicescode: 2,
        };
    }

    componentDidMount() {
        /* get services from database */
    }
    btnClicked = (key) => {
        var servicescode = Services[0].ServiceId;
        this.props.sendServices(key);
        alert(Services[0].ServiceId);
    };

    render() {
        return (
            <TouchableOpacity
                key={Services[0].ServiceId}
                style={{ flex: 1 }}
                onPress={this.btnClicked(parseInt(Services[0].ServiceId))}
            >
                <Card style={{ flex: 1, padding: 20, margin: 20 }}>
                    <Card.Title
                        title={Services[0].ServiceName}
                        subtitle={
                            "Duration: " +
                            Services[0].ServiceTime +
                            " Minutesss"
                        }
                    />
                    <Card.Content>
                        <Title> </Title>
                        <Paragraph>
                            Price: {Services[0].ServicePrice} Nis
                        </Paragraph>
                    </Card.Content>
                    <Card.Cover source={{ uri: Services[0].ServiceImg }} />
                    <Card.Actions></Card.Actions>
                </Card>

                <Card style={{ flex: 1, padding: 20, margin: 20 }}>
                    <Card.Title
                        title={Services[1].ServiceName}
                        subtitle={
                            "Duration: " +
                            Services[1].ServiceTime +
                            " Minutesss"
                        }
                    />
                    <Card.Content>
                        <Title> </Title>
                        <Paragraph>
                            Price: {Services[1].ServicePrice} Nis
                        </Paragraph>
                    </Card.Content>
                    <Card.Cover source={{ uri: Services[1].ServiceImg }} />
                    <Card.Actions></Card.Actions>
                </Card>

                <Card style={{ flex: 1, padding: 20, margin: 20 }}>
                    <Card.Title
                        title={Services[2].ServiceName}
                        subtitle={
                            "Duration: " +
                            Services[2].ServiceTime +
                            " Minutesss"
                        }
                    />
                    <Card.Content>
                        <Title> </Title>
                        <Paragraph>
                            Price: {Services[2].ServicePrice} Nis
                        </Paragraph>
                    </Card.Content>
                    <Card.Cover source={{ uri: Services[2].ServiceImg }} />
                    <Card.Actions></Card.Actions>
                </Card>
            </TouchableOpacity>
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
