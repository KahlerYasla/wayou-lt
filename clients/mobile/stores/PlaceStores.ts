import { create } from 'zustand';
import axios from 'axios';
import { API_BASE_URL } from '../constants';
import { useAuthCredentials } from './AuthStores';

export interface Place {
    id: number;
    name: string;
    description: string;
    phone: string;
    website: string;
    placeYX: string;
    rating: number;
}

interface PlaceState {
    places: Place[];
    placeIndex: number;
    likedPlaces: Place[];
    dislikedPlaces: Place[];
    setPlaceIndex: (index: number) => void;
    fetchPlacesByThisUser: () => Promise<void>;
    fetchPlacesByRecommendation: () => Promise<void>;
    fetchTenRandomPlaces: () => Promise<void>;
    likePlace: (placeId: number) => Promise<void>;
    dislikePlace: (placeId: number) => Promise<void>;
}

export const usePlaceStore = create<PlaceState>((set) => ({

    places: [],
    placeIndex: 0,
    likedPlaces: [],
    dislikedPlaces: [],

    //----------------------------------------------

    setPlaceIndex: (index: number) => {
        set({ placeIndex: index });
    },

    //----------------------------------------------

    fetchPlacesByThisUser: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/places/this-user`);
            set({ places: response.data });
        } catch (error) {
            console.error(error);
        }
    },

    //----------------------------------------------

    fetchPlacesByRecommendation: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/place/recommendation`);
            set({ places: response.data });
        } catch (error) {
            console.error(error);
        }
    },

    //----------------------------------------------

    fetchTenRandomPlaces: async () => {
        try {
            const response = await axios.post(`${API_BASE_URL}/place/get-ten-random-places`);

            set({ places: response.data.data.placeList });

            console.log(response.data);
            console.log(response.data.data.placeList.length);
            // log all place names
            response.data.data.placeList.forEach((place: Place) => {
                console.log(place.name);
            });
            console.log('====================================');

        } catch (error) {
            console.error(error);
            console.log('====================================');
        }
    },

    //----------------------------------------------

    likePlace: async (placeId: number) => {
        try {
            const userId = useAuthCredentials.getState().auth?.userId;

            console.log('Liked place ID: ' + placeId);
            console.log('User ID: ' + userId);
            console.log('====================================');

            const response = await axios.post(`${API_BASE_URL}/user-interaction/interact`,
                { placeId: placeId, userId: userId, isLikedNorPassed: true }
            );

            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    },

    //----------------------------------------------

    dislikePlace: async (placeId: number) => {
        try {
            const userId = useAuthCredentials.getState().auth?.userId;

            console.log('Disliked place ID: ' + placeId);
            console.log('User ID: ' + userId);
            console.log('====================================');

            const response = await axios.post(`${API_BASE_URL}/user-interaction/interact`,
                { placeId: placeId, userId: userId, isLikedNorPassed: false }
            );

            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    },
}));