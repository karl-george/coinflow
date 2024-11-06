import { Colors } from '@/constants/Colors';
import { Link } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type Props = {
  coin: {
    id: string;
    name: string;
    api_symbol: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
    large: string;
  };
};

const CoinCardSmall = ({ coin }: Props) => {
  return (
    <Link href={`/coin/${coin.id}`}>
      <View style={styles.coinCardSmall}>
        <Image
          source={{ uri: coin.thumb }}
          style={{ width: 64, height: 64, borderRadius: 100 }}
        />
        <Text style={styles.coinCardText} numberOfLines={2}>
          {coin.name}
        </Text>
      </View>
    </Link>
  );
};

export default CoinCardSmall;

const styles = StyleSheet.create({
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
