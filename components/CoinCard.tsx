import { Colors } from '@/constants/Colors';
import { info } from '@/data/info';
import { Currency } from '@/interfaces/crypto';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface Props {
  currency: Currency;
}

const CoinCard = ({ currency }: Props) => {
  return (
    <View key={currency.id} style={styles.coinCard}>
      <Image
        source={{ uri: info?.[currency.id].logo }}
        style={{ width: 64, height: 64 }}
      />
    </View>
  );
};

export default CoinCard;

const styles = StyleSheet.create({
  coinCard: {
    width: 84,
    height: 84,
    backgroundColor: Colors.card_light,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
});
