import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useConfigurationStore = create((set) => ({
    configuration: {
        selectedDeckId: 0,
        tags: [],
        originYX: '41.0423,29.0137',
    },

    setConfiguration: (configuration) => set({ configuration }),

    saveConfiguration: async (configuration) => {
        set({ configuration });
        try {
            await AsyncStorage.setItem('configuration', JSON.stringify(configuration));
        } catch (error) {
            console.error('Failed to save configuration:', error);
        }
    },

    loadConfiguration: async () => {
        try {
            const configuration = await AsyncStorage.getItem('configuration');
            if (configuration) {
                set({ configuration: JSON.parse(configuration) });
            }
        } catch (error) {
            console.error('Failed to load configuration:', error);
        }
    },
}));
