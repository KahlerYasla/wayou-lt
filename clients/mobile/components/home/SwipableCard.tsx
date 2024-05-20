import React, { useCallback, useRef } from 'react';
import { View, Animated, PanResponder, Dimensions, StyleSheet } from 'react-native';

type TPrevStateAct = (state: any) => any;
export interface ISwipableCard<T> {
    children: (
        item: T,
        swipe: Animated.ValueXY,
        isFirst: boolean,
    ) => React.ReactNode;
    items: T[];
    setItems: (fun: TPrevStateAct) => void;
    renderActionBar: (
        handleChoice: (direction: number) => void,
    ) => React.ReactNode;
    onSwipeUser: (swipe: Animated.ValueXY, prevState: T[]) => void;
}

export const SwipableCard = <T,>({
    children,
    items,
    setItems,
    renderActionBar,
    onSwipeUser,
}: ISwipableCard<T>) => {
    const { height } = Dimensions.get('screen');

    const swipe = useRef(new Animated.ValueXY()).current;
    const titlSign = useRef(new Animated.Value(1)).current;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (_, { dx, dy, y0 }) => {
                swipe.setValue({ x: dx, y: dy });
                titlSign.setValue(y0 > (height * 0.9) / 2 ? 1 : -1);
            },
            onPanResponderRelease: (_, { dx, dy }) => {
            },
        }),
    ).current;

    const removeTopCard = useCallback(() => {
        setItems(prevState => {
            onSwipeUser(swipe, prevState);
            return prevState.slice(1);
        });
        swipe.setValue({ x: 0, y: 0 });
    }, [swipe, setItems]);

    const rotate = Animated.multiply(swipe.x, titlSign).interpolate({
        inputRange: [-100, 0, 100],
        outputRange: ['8deg', '0deg', '-8deg'],
    });

    const animatedCardStyle = {
        transform: [...swipe.getTranslateTransform(), { rotate }],
    };

    const handleChoice = useCallback(
        (direction: number) => {
            Animated.timing(swipe.x, {
                toValue: direction * 500,
                duration: 400,
                useNativeDriver: true,
            }).start(removeTopCard);
        },
        [removeTopCard, swipe.x],
    );

    return (
        <View>
            <View style={styles.container}>
                {items
                    .map((item, index) => (
                        <Animated.View
                            key={index}
                            style={[index === 0 ? animatedCardStyle : {}]}
                            {...(index === 0 ? panResponder.panHandlers : {})}>
                            {children(item, swipe, index === 0)}
                        </Animated.View>
                    ))
                    .reverse()}
            </View>

            {renderActionBar(handleChoice)}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', top: -300 },
});

export default SwipableCard;