import { create } from 'zustand';
import axios, { AxiosError } from 'axios';
import { API_BASE_URL } from "../constants";
import { Place } from './PlaceStores';

export interface Deck {
    id: number;
    name: string;
    places: Place[];
}

interface DeckState {
    decks: Deck[];
    fetchDecks: () => Promise<void>;
    createDeck: (deckName: string) => Promise<void>;
    deleteDeck: (deckId: string) => Promise<void>;
}

export const useDeckStore = create<DeckState>((set) => ({
    decks: [],

    fetchDecks: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/deck`);
            set({ decks: response.data });
        } catch (error) {
            console.error('Error fetching decks:', error);
        }
    },

    createDeck: async (deckName) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/deck`, { name: deckName });
            set({ decks: [...response.data] });
        } catch (error) {
            console.error('Error creating deck:', error);
        }
    },

    deleteDeck: async (deckId) => {
        try {
            await axios.delete(`${API_BASE_URL}/deck/${deckId}`);
            set({ decks: [] });
        } catch (error) {
            console.error('Error deleting deck:', error);
        }
    },
}));