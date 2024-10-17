import CoinCard from '@/components/CoinCard';
import { Colors } from '@/constants/Colors';
import { listings } from '@/data/listings';
import { Currency } from '@/interfaces/crypto';
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

const Home = () => {
  const { top } = useSafeAreaInsets();
  const { state, isActive } = useChartPressState({ x: 0, y: { price: 0 } });

  console.log(listFontFamilies());

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
    <View style={[styles.container, { paddingTop: top + 42 }]}>
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
        <View style={styles.text_row}>
          <Text style={styles.subtitle}>Trending Coins</Text>
          <Text style={styles.seeMore}>See All</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 10 }}
          style={styles.trending_row}
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
        <View style={styles.text_row}>
          <Text style={styles.subtitle}>Latest</Text>
          <Text style={styles.seeMore}>See All</Text>
        </View>
      </View>

      {/* Latest Coins */}
      <View
        style={{
          height: 260,
          backgroundColor: Colors.card_light,
          borderRadius: 12,
          marginTop: 8,
          padding: 12,
        }}
      >
        {ticker && (
          <View>
            <Text
              style={{ fontSize: 30, fontWeight: 'bold', color: Colors.text }}
            >
              Bitcoin
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
    </View>
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
  text_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trending_row: {
    flexDirection: 'row',
  },
  seeMore: {
    color: Colors.accent,
    fontFamily: 'Montserrat_600SemiBold',
  },
  trendingCoins: {
    width: 84,
    height: 84,
    backgroundColor: Colors.card_light,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 8,
  },
});
