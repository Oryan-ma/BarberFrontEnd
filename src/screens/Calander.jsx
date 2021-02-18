import React from "react";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import {
    Text,
    View,
    Image,
    TextInput,
    FlatList,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

export default function Calandar() {
    return (
        <Calendar
            hideArrows={false}
            markedDates={{
                selected: true,
            }}
            style={[
                // styles.calendar,
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
                                color: state === "enable" ? "gray" : "black",
                            }}
                        >
                            {date.day}
                        </Text>
                    </View>
                );
            }}
        />
    );
}
