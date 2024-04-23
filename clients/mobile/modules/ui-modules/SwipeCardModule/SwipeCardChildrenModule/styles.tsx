import { StyleSheet } from 'react-native';

export const DiscoverStyleSheet = StyleSheet.create({
    wrapper: {},
    choiceContainer: {
        position: 'absolute',
        top: -100,
    },
    likeContainer: {
        left: 0,
        transform: [{ rotate: '-30deg' }],
    },
    nopeContainer: {
        right: 0,
        transform: [{ rotate: '30deg' }],
    },
    discoverWrapper: {
        paddingHorizontal: 30,
        paddingVertical: 15,
        flexDirection: 'column',
        justifyContent: 'space-around',
        height: '95%',
    },
    discoverTitle: {},
    userInfo: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
});