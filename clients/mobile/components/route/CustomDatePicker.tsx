import React from "react";
import { View, Text } from "react-native";
import { Button } from 'react-native-paper';
import { DatePickerModal } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";

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
            <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                <Button onPress={() => setOpen(true)} mode="outlined" textColor="white" color="white" style={{ borderColor: "white", borderWidth: 0.1 }}>
                    Pick a date range
                </Button>
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
