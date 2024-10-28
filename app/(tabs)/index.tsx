import Chart from '@/components/Chart';
import CoinCard from '@/components/CoinCard';
import CoinCardLarge from '@/components/CoinCardLarge';
import { Colors } from '@/constants/Colors';
import { listings } from '@/data/listings';
import { Currency } from '@/interfaces/crypto';
import { Link } from 'expo-router';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useChartPressState } from 'victory-native';

const Home = () => {
  const { top, bottom } = useSafeAreaInsets();
  const { state, isActive } = useChartPressState({ x: 0, y: { price: 0 } });

  // useEffect(() => {
  //   const getCoins = async () => {
  //     try {
  //       const res = await fetch('/api/listings');
  //       const data = await res.json();
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getCoins();
  // }, []);

  return (
    <ScrollView style={[styles.container, { paddingTop: top + 42 }]}>
      {/* Welcome */}
      <View style={styles.welcomeWrapper}>
        {/* Image */}
        {/* //Todo: Fix image source when Clerk is in  */}
        <Image
          source={require('@/assets/images/react-logo.png')}
          resizeMode='contain'
          style={{ width: 80, height: 80 }}
        />
        <View>
          <Text style={styles.name}>Hello Karl</Text>
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
          {listings.map((currency: Currency) => (
            <Link href={`/coin/${currency.id}`} key={currency.id}>
              <CoinCard currency={currency} />
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

      <Chart />

      {/* Latest Coins */}
      <View style={{ marginTop: 16, marginBottom: 128 }}>
        {listings.slice(1).map((coin, i) => (
          <View key={coin.id}>
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
