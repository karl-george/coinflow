import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useStore = create(
  persist(
    (set) => ({
      savedCoins: [],
      toggleSaveCoin: (coin) =>
        set((state) => ({
          savedCoins: state.savedCoins.includes(coin)
            ? state.savedCoins.filter((item) => item !== coin)
            : [...state.savedCoins, coin],
        })),
    }),
    {
      name: 'saved-coins',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
