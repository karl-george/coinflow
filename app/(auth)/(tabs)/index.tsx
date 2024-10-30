import Chart from '@/components/Chart';
import CoinCard from '@/components/CoinCard';
import CoinCardLarge from '@/components/CoinCardLarge';
import { Colors } from '@/constants/Colors';
import { Currency } from '@/interfaces/crypto';
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

  const currencies = useQuery({
    queryKey: ['currencies'],
    queryFn: () => fetch('/api/listings').then((res) => res.json()),
  });

  const ids = currencies.data
    ?.map((currency: Currency) => currency.id)
    .join(',');

  const coin = useQuery({
    queryKey: ['info', ids],
    queryFn: () => fetch(`/api/info?ids=${ids}`).then((res) => res.json()),
    enabled: !!ids,
  });

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

      {/* Trending */}
      <View style={{ marginTop: 48 }}>
        <View style={styles.textRow}>
          <Text style={styles.subtitle}>Trending Coins</Text>
          <Text style={styles.seeMore}>See All</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 10 }}
          style={styles.trendingRow}
        >
          {currencies.data?.map((currency: Currency) => (
            <Link href={`/coin/${currency.id}`} key={currency.id}>
              <CoinCard currency={currency} coin={coin.data} />
            </Link>
          ))}
        </ScrollView>
      </View>

      {/* Latest Chart */}
      <View style={{ marginTop: 36 }}>
        <View style={styles.textRow}>
          <Text style={styles.subtitle}>Latest</Text>
          <Text style={styles.seeMore}>See All</Text>
        </View>
      </View>

      <Chart height={320} />

      {/* Latest Coins */}
      <View style={{ marginTop: 16, marginBottom: 128 }}>
        {currencies.data.slice(1).map((currency: Currency) => (
          <View key={currency.id}>
            <CoinCardLarge currency={currency} coin={coin.data} />
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
