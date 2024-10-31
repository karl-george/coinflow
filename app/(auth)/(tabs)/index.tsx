import Chart from '@/components/Chart';
import CoinCard from '@/components/CoinCard';
import CoinCardLarge from '@/components/CoinCardLarge';
import { Colors } from '@/constants/Colors';
import { Coin } from '@/interfaces/crypto';
import { useUser } from '@clerk/clerk-expo';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useChartPressState } from 'victory-native';

const Home = () => {
  const { user } = useUser();
  const { top, bottom } = useSafeAreaInsets();
  const { state, isActive } = useChartPressState({ x: 0, y: { price: 0 } });

  const trending = useQuery({
    queryKey: ['trending'],
    queryFn: () => fetch(`/api/trending`).then((res) => res.json()),
  });

  // Sort the data by price
  trending.data?.coins.sort(
    (a: Coin, b: Coin) => b.item.data.price - a.item.data.price
  );

  return (
    <ScrollView style={[styles.container, { paddingTop: top + 42 }]}>
      {/* Welcome */}
      <View style={styles.welcomeWrapper}>
        {/* Image */}
        <Image
          source={{ uri: user?.imageUrl }}
          resizeMode='contain'
          style={{ width: 70, height: 70, borderRadius: 100 }}
        />
        <View>
          <Text style={styles.name}>{user?.firstName}</Text>
        </View>
      </View>

      {/* Trending Chart */}
      <View>
        <View style={{ marginTop: 36 }}>
          <View style={styles.textRow}>
            <Text style={styles.subtitle}>Trending</Text>
            <Text style={styles.seeMore}>See All</Text>
          </View>
        </View>
        {/* <Chart height={320} /> */}
      </View>

      {/* Trending Coins */}
      <View style={{ marginTop: 16, marginBottom: 128 }}>
        {trending.data?.coins?.map((coin: Coin) => (
          <View key={coin.item.coin_id}>
            <CoinCardLarge coin={coin} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    paddingHorizontal: 16,
  },
  welcomeWrapper: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,
    color: Colors.text,
    fontFamily: 'Montserrat_700Bold',
  },
  subtitle: {
    fontWeight: 'semibold',
    fontSize: 20,
    color: Colors.text,
    fontFamily: 'Montserrat_600SemiBold',
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trendingRow: {
    flexDirection: 'row',
    marginTop: 8,
  },
  seeMore: {
    color: Colors.accent,
    fontFamily: 'Montserrat_600SemiBold',
  },
});
