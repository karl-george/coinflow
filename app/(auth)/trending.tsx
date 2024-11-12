import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Link, Stack, useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Coin } from '@/interfaces/crypto';
import { useQuery } from '@tanstack/react-query';
import CoinCardLarge from '@/components/CoinCardLarge';

const Trending = () => {
  const router = useRouter();

  const trending = useQuery({
    queryKey: ['trending'],
    queryFn: () => fetch(`/api/trending`).then((res) => res.json()),
  });

  // Sort the data by price
  trending.data?.coins.sort(
    (a: Coin, b: Coin) => b.item.data.price - a.item.data.price
  );

  return (
    <ScrollView style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: 'Trending',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontFamily: 'Montserrat_700Bold' },
          headerTintColor: Colors.text,
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerLeft: () => (
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}
            >
              <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name='chevron-back' size={28} color={Colors.text} />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <View style={{ marginTop: 16 }}>
        {trending.data?.coins?.map((coin: Coin) => (
          <Link
            href={`/coin/${coin.item.coin_id}`}
            key={coin.item.coin_id}
            asChild
          >
            <Pressable>
              <CoinCardLarge coin={coin} />
            </Pressable>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
};

export default Trending;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    paddingHorizontal: 16,
  },
});
