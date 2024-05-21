import React from 'react';
import { View, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { FONT } from '../constants';

import CustomText from '../components/shared/CustomText';

const RouteInfo = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <View>
                        <CustomText style={styles.title}>AI Generated Trip</CustomText>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <CustomText style={styles.descriptionText}>
                            Description of the route will be here.
                        </CustomText>
                    </View>
                    <View>
                        <CustomText style={styles.dayTitle}>Day 1:</CustomText>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                            <View style={styles.horizontalContent}>
                                {/* Example content */}
                                <View style={[styles.box, styles.redBox]} />
                                <View style={[styles.box, styles.greenBox]} />
                                <View style={[styles.box, styles.blueBox]} />
                                <View style={[styles.box, styles.yellowBox]} />
                                <View style={[styles.box, styles.purpleBox]} />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.planContainer}>
                        <CustomText style={styles.planText}>
                            Plan of the day will be here.
                        </CustomText>
                    </View>
                </View>

                <View style={styles.container}>
                    <View>
                        <CustomText style={styles.dayTitle}>Day 2:</CustomText>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
                            <View style={styles.horizontalContent}>
                                {/* Example content */}
                                <View style={[styles.box, styles.redBox]} />
                                <View style={[styles.box, styles.greenBox]} />
                                <View style={[styles.box, styles.blueBox]} />
                                <View style={[styles.box, styles.yellowBox]} />
                                <View style={[styles.box, styles.purpleBox]} />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.planContainer}>
                        <CustomText style={styles.planText}>
                            Plan of the day will be here.
                        </CustomText>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: "black",
        width: "100%",
        height: "100%",
    },
    container: {
        margin: 10,
        flex: 1,
        width: "100%",
        height: "100%",
    },
    title: {
        marginTop: 10,
        fontFamily: FONT.regular,
        color: "white",
        alignSelf: "flex-start",
        fontSize: 20,
        textDecorationLine: "underline",
    },
    descriptionContainer: {
        borderBottomWidth: 0.2,
        borderColor: "white",
        width: "90%",
        paddingBottom: 10,
    },
    descriptionText: {
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderColor: "white",
        marginTop: 10,
        fontFamily: FONT.regular,
        color: "white",
        justifyContent: "center",
    },
    dayTitle: {
        marginTop: 10,
        fontFamily: FONT.bold,
        color: "white",
        justifyContent: "center",
    },
    horizontalScroll: {
        marginTop: 10,
    },
    horizontalContent: {
        flexDirection: 'row',
    },
    box: {
        width: 120,
        height: 120,
        marginRight: 10,
    },
    redBox: {
        backgroundColor: 'red',
    },
    greenBox: {
        backgroundColor: 'green',
    },
    blueBox: {
        backgroundColor: 'blue',
    },
    yellowBox: {
        backgroundColor: 'yellow',
    },
    purpleBox: {
        backgroundColor: 'purple',
    },
    planContainer: {
        borderBottomWidth: 0.2,
        borderColor: "white",
        width: "90%",
        paddingBottom: 10,
    },
    planText: {
        borderLeftWidth: 1,
        borderColor: "white",
        marginTop: 10,
        fontFamily: FONT.regular,
        color: "white",
        justifyContent: "center",
    },
});

export default RouteInfo;
