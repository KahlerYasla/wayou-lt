import { create } from 'zustand';

interface IsModalOpenState {
    isModalOpen: boolean;
    setIsModalOpen: (isModalOpen: boolean) => void;
}

export const useIsModalOpen = create<IsModalOpenState>((set) => ({
    isModalOpen: false,

    setIsModalOpen: (isModalOpen: boolean) => { set({ isModalOpen }); console.log('isModalOpen', isModalOpen) },
}));
