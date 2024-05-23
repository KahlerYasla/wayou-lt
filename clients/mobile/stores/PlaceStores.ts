import { create } from 'zustand';
import axios from 'axios';
import { API_BASE_URL } from '../constants';

export interface Place {
    id: number;
    name: string;
    description: string;
}

interface PlaceState {
    places: Place[];
    fetchPlacesByThisUser: () => Promise<void>;
    fetchPlacesByRecommendation: () => Promise<void>;
    likePlace: (placeId: number) => Promise<void>;
    dislikePlace: (placeId: number) => Promise<void>;

}