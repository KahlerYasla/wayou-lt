import { create } from 'zustand';
import axios from 'axios';
import { API_BASE_URL } from '../constants';

// stores
import { Place } from './PlaceStores';
import { useAuthCredentials } from './AuthStores';

export interface Route {
    id: number,
    tripDescription: string,
    sortedPlaceList: Place[] | null,
    placeSeparatorsByDay: number[] | null,
}

interface RouteState {
    routes: Route[],
    generateRoute: (howManyDays: number) => Promise<void>,
}

export const useRouteStore = create<RouteState>((set) => ({

    routes: [],

    //----------------------------------------------

    generateRoute: async (howManyDays: number) => {
        try {
            const userId = useAuthCredentials.getState().auth?.userId;

            const response = await axios.post(`${API_BASE_URL}/trip/generate-trip`, { userId, howManyDays });

            console.log(response.data);
            console.log(response.data.data.tripDescription);
            console.log(response.data.data.sortedPlaceList[0].name);

            const newRoute: Route = {
                id: -1,
                tripDescription: response.data.data.tripDescription,
                sortedPlaceList: response.data.data.sortedPlaceList,
                placeSeparatorsByDay: null
            }

            // add generated route to the store
            set({ routes: [...useRouteStore.getState().routes, newRoute] });

            console.log('====================================');
        } catch (error) {
            console.error(error);
            console.log('====================================');
        }
    },

}));