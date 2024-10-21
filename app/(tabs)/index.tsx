import CoinCard from '@/components/CoinCard';
import { Colors } from '@/constants/Colors';
import { listings } from '@/data/listings';
import { Coin, Currency } from '@/interfaces/crypto';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CartesianChart, Line, useChartPressState } from 'victory-native';
import { ticker } from '@/data/ticker';
import { format } from 'date-fns';
import {
  listFontFamilies,
  matchFont,
  useFont,
} from '@shopify/react-native-skia';
import { info } from '@/data/info';
import CoinCardLarge from '@/components/CoinCardLarge';

const Home = () => {
  const { top, bottom } = useSafeAreaInsets();
  const { state, isActive } = useChartPressState({ x: 0, y: { price: 0 } });

  const fontFamily = Platform.select({ ios: 'Helvetica', default: 'serif' });
  const fontStyle = {
    fontFamily,
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: 'bold',
  };
  const font = matchFont(fontStyle);

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
            <View key={currency.id}>
              <CoinCard currency={currency} />
            </View>
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

      <View style={styles.trendingChart}>
        {ticker && (
          <View>
            <Text
              style={{ fontSize: 30, fontWeight: 'bold', color: Colors.text }}
            >
              Bitcoin{' '}
              <Text style={{ color: Colors.accent, fontSize: 24 }}>BTC</Text>
            </Text>
          </View>
        )}
        <CartesianChart
          axisOptions={{
            font,
            tickCount: 5,
            labelOffset: { x: -2, y: 0 },
            labelColor: Colors.text,
            formatYLabel: (v) => `${v} €`,
            formatXLabel: (ms) => format(new Date(ms), 'MM/yy'),
          }}
          data={ticker!}
          xKey='timestamp'
          yKeys={['price']}
        >
          {({ points }) => (
            <>
              <Line
                points={points.price}
                color={Colors.accent}
                strokeWidth={3}
              />
            </>
          )}
        </CartesianChart>
      </View>

      {/* Latest Coins */}
      <View style={{ marginTop: 16, marginBottom: 128 }}>
        {listings.slice(1).map((coin, i) => (
          <CoinCardLarge coin={coin} />
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
  },
  seeMore: {
    color: Colors.accent,
    fontFamily: 'Montserrat_600SemiBold',
  },
  trendingChart: {
    height: 260,
    backgroundColor: Colors.card_light,
    borderRadius: 12,
    marginTop: 8,
    padding: 12,
  },
});
