import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';

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
    <View style={styles.coinCardSmall}>
      <Image source={{ uri: coin.thumb }} style={{ width: 64, height: 64 }} />
    </View>
  );
};

export default CoinCardSmall;

const styles = StyleSheet.create({
  coinCardSmall: {
    width: 84,
    height: 84,
    backgroundColor: Colors.card_light,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
});
