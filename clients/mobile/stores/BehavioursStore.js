import { create } from 'zustand';

export const useIsModalOpenStore = create((set) => ({
    isModalOpen: false,

    setIsModalOpen: (isModalOpen) => { set({ isModalOpen }); console.log('isModalOpen', isModalOpen) },
}));
