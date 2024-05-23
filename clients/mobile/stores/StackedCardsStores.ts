import { create } from 'zustand';
import axios from 'axios';
import { API_BASE_URL } from '../constants';

interface StackedCard {
    // Define the shape of your stacked card object here
    // Example:
    id: number;
    name: string;
    description: string;
    // Add more fields as necessary
}

interface IsModalOpenStore {
    stackedCardList: StackedCard[];
    setStackedCardList: (stackedCardList: StackedCard[]) => void;
    fetchStackedCardList: () => Promise<void>;
}

export const useIsModalOpenStore = create<IsModalOpenStore>((set) => ({
    stackedCardList: [],

    setStackedCardList: (stackedCardList) => {
        set({ stackedCardList });
        console.log('stackedCardList', stackedCardList);
    },

    fetchStackedCardList: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/place/get-place-recommendation`);
            // Assuming response.data is an array of stacked cards
            set({ stackedCardList: response.data });
        } catch (error) {
            console.error('Error fetching stacked card list:', error);
        }
    },
}));
