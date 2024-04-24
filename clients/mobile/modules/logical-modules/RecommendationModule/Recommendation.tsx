import React, { Fragment, useCallback } from 'react';
import { Animated } from 'react-native';
import { SwipeCard } from '../../ui-modules/SwipeCardModule/SwipeCard';
import { SwipeCardChildren } from '../../ui-modules/SwipeCardModule/SwipeCardChildrenModule/SwipeCardChildren';
import { DiscoverStyleSheet } from '../../ui-modules/SwipeCardModule/SwipeCardChildrenModule/styles';
import Choice from './ChoiseModule/Choice';
import { UserActions } from './UserActionsModule/UserActions';
import { IUser } from './types/IUser';

export interface IRecommendation {
  peopleToDiscover: IUser[];
  refetch: () => void;
}
export const Recommendation = ({ peopleToDiscover, refetch }: IRecommendation) => {

  const likeOpacity = (swipe: any) =>
    swipe.x.interpolate({
      inputRange: [25, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

  const nopeOpacity = (swipe: any) =>
    swipe.x.interpolate({
      inputRange: [-100, -25],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

  const renderChoice = useCallback(
    (swipe: any) => (
      <Fragment>
        <Animated.View
          style={[
            DiscoverStyleSheet.choiceContainer,
            DiscoverStyleSheet.likeContainer,
            { opacity: likeOpacity(swipe) },
          ]}>
          <Choice type="like" />
        </Animated.View>
        <Animated.View
          style={[
            DiscoverStyleSheet.choiceContainer,
            DiscoverStyleSheet.nopeContainer,
            { opacity: nopeOpacity(swipe) },
          ]}>
          <Choice type="nope" />
        </Animated.View>
      </Fragment>
    ),
    [],
  );

  const handleSwipeUserMatching = (
    swipe: Animated.ValueXY,
    prevState: IUser[],
  ) => {
    const isLike = Number(JSON.stringify(swipe.x)) > 0;
    const userIdReceiver = prevState?.[0]?.id;

  };

  return (
    <SwipeCard<IUser>
      onSwipeUser={handleSwipeUserMatching}
      renderActionBar={handleChoice => (
        <UserActions
          onLike={() => handleChoice(1)}
          onReject={() => handleChoice(-1)}
        />
      )}>
      {(item, swipe, isFirst) => (
        <SwipeCardChildren
          item={item}
          swipe={swipe}
          isFirst={isFirst}
          renderChoice={renderChoice}
        />
      )}
    </SwipeCard>
  );
};