import React from "react";
import { View, Text } from "react-native";
import { Button } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
import CustomButton from "../shared/CustomButton";

interface Range {
    startDate: Date | undefined;
    endDate: Date | undefined;
}

export default function CustomDatePicker() {
    const [range, setRange] = React.useState<Range>({ startDate: undefined, endDate: undefined });
    const [open, setOpen] = React.useState(false);

    const onDismiss = React.useCallback(() => {
        setOpen(false);
    }, [setOpen]);

    const onConfirm = React.useCallback(
        ({ startDate, endDate }: { startDate: any, endDate: any }) => {
            // Assuming startDate and endDate are objects with a 'date' property representing Date objects
            const startDateAsDate = startDate.date instanceof Date ? startDate.date : undefined;
            const endDateAsDate = endDate.date instanceof Date ? endDate.date : undefined;

            setOpen(false);
            setRange({ startDate: startDateAsDate, endDate: endDateAsDate });
        },
        [setOpen, setRange]
    );

    return (
        <SafeAreaProvider>
            <View style={{ justifyContent: 'flex-start', flex: 1, alignItems: 'flex-start' }}>

                <CustomButton
                    onPress={() => setOpen(true)}
                    title="Press to Pick a date range"
                    style={{
                        marginTop: 10,
                        backgroundColor: 'black',
                        borderRadius: 10,
                        borderWidth: .3,
                        borderColor: 'white',
                    }}
                />

                <DatePickerModal
                    locale="en"
                    mode="range"
                    visible={open}
                    onDismiss={onDismiss}
                    startDate={range.startDate}
                    endDate={range.endDate}
                    onConfirm={onConfirm}
                />
            </View>
        </SafeAreaProvider>
    )
}
