import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface Configuration {
    selectedDeckId: number;
    tags: string[];
    originYX: string;
}

interface ConfigurationStore {
    configuration: Configuration;
    setConfiguration: (configuration: Configuration) => void;
    saveConfiguration: (configuration: Configuration) => Promise<void>;
    loadConfiguration: () => Promise<void>;
}

export const useConfigurationStore = create<ConfigurationStore>((set) => ({
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

            // check if the configuration is saved
            const savedConfiguration = await AsyncStorage.getItem('configuration');
            console.log('\nSaved configuration:', savedConfiguration);
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
