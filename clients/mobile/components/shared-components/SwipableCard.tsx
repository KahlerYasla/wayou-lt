import React, { useCallback, useRef } from 'react';
import { View, Animated, PanResponder, Dimensions } from 'react-native';

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

export const SwipableCard = <T,>(
    {
        children,
        items,
        setItems,
        renderActionBar,
    }: ISwipableCard<T>) =>
        
)