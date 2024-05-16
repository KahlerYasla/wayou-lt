import { useState } from "react";
import { SafeAreaView, ScrollView, View, Text, Button, TouchableOpacity } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, SIZES } from "../../constants";

const Explorer = () => {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium,
                    }}
                >
                    <Text>
                    Explorer Screen
                    </Text>
                    <TouchableOpacity
                        onPress={() => { router.push("/login"); }}
                    >
                        <Text>
                            click to route login screen
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Explorer;