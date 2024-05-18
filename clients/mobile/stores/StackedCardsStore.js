import { create } from 'zustand';
import axios from 'axios';
import { API_BASE_URL } from '../constants';

export const useIsModalOpenStore = create((set) => ({
    stackedCardList: [],

    setStackedCardList: (stackedCardList) => {
        set({ stackedCardList });
        console.log('stackedCardList', stackedCardList)
    },

    fetchStackedCardList: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/place/get-place-recommendation`);

        } catch (error) {
            console.error('Error fetching stacked card list:', error);
        }
    },
}));
