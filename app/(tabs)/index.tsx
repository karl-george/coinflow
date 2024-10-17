import { Colors } from '@/constants/Colors';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { info } from '@/data/info';
import { listings } from '@/data/listings';

const Home = () => {
  const { top } = useSafeAreaInsets();

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
        {/* Text */}
        <View>
          <Text style={styles.name}>Hello Karl</Text>
        </View>
      </View>

      {/* Trending */}
      <View style={{ marginVertical: 48 }}>
        <Text style={styles.subtitle}>Trending Coins</Text>
        <View style={styles.trending_row}>
          {listings.map((coin) => (
            <View>
              <Image
                source={{ uri: info?.[coin.id].logo }}
                style={{ width: 32, height: 32 }}
              />
              <Text style={styles.subtitle}>{coin.name}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Latest Chart */}

      {/* Latest Coins */}
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
  trending_row: {
    flexDirection: 'row',
    gap: 6,
  },
});
