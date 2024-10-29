import { TokenCache } from '@clerk/clerk-expo/dist/cache/types';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

const createTokenCache = (): TokenCache => {
  return {
    getToken: async (key: string) => {
      try {
        const item = await SecureStore.getItemAsync(key);
        return item;
      } catch (error) {
        await SecureStore.deleteItemAsync(key);
        return null;
      }
    },
    saveToken: (key: string, value: string) => {
      return SecureStore.setItemAsync(key, value);
    },
  };
};

export const tokenCache =
  Platform.OS !== 'web' ? createTokenCache() : undefined;
