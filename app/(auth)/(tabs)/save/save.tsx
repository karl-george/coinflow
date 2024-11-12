import CoinCardSmall from '@/components/CoinCardSmall';
import { Colors } from '@/constants/Colors';
import { useStore } from '@/store/savedStore';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Save = () => {
  const { top, bottom } = useSafeAreaInsets();

  const savedCoins = useStore((state: any) => state.savedCoins);
  // const ids = savedCoins.join(',');

  const ids = ['bitcoin', 'ethereum'];

  const { data } = useQuery({
    queryKey: ['savedcoins', ids],
    queryFn: () => fetch(`/api/savedcoins?id=${ids}`).then((res) => res.json()),
    enabled: !!ids,
  });

  return (
    <ScrollView style={[styles.container]}>
      <View style={{ marginTop: top + 42 }}>
        <Text style={styles.title}>Saved Coins</Text>
      </View>

      {/* Coins */}
      <View
        style={{
          marginTop: 16,
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        {data?.map((coin: any) => (
          <Link href={`/coin/${coin.id}`}>
            <View style={styles.coinCardSmall}>
              <Image
                source={{ uri: coin.image }}
                style={{ width: 64, height: 64, borderRadius: 100 }}
              />
              <Text style={styles.coinCardText} numberOfLines={2}>
                {coin.name}
              </Text>
            </View>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
};

export default Save;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    marginTop: 16,
    fontWeight: 'semibold',
    fontSize: 20,
    color: Colors.text,
    fontFamily: 'Montserrat_600SemiBold',
  },
  coinCardSmall: {
    width: 84,
    height: 120,
    backgroundColor: Colors.card_light,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    gap: 8,
    paddingHorizontal: 2,
  },
  coinCardText: {
    color: Colors.text,
    textAlign: 'center',
    overflow: 'hidden',
    flexWrap: 'wrap',
  },
});
