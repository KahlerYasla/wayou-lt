import React from 'react';
import { SwipeCard } from '../../modules/ui-modules/SwipeCardModule/SwipeCard';
import { IUser } from '../../modules/logical-modules/RecommendationModule';

const HomeScreen: React.FC = () => {
    return (
        <div>
            <SwipeCard<IUser>
                onSwipeUser={handleSwipeUserMatching}
                items={users}
                setItems={setUsers}
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
        </div>
    );
};

export default HomeScreen;