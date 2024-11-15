import { Colors } from '@/constants/Colors';
import { Link } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

type Props = {
  id: string;
  image: string;
  name: string;
};

const CoinCardSmall = ({ image, name, id }: Props) => {
  return (
    <Link href={`/coin/${id}`}>
      <View style={styles.coinCardSmall}>
        <Image
          source={{ uri: image }}
          style={{ width: 64, height: 64, borderRadius: 100 }}
        />
        <Text style={styles.coinCardText} numberOfLines={2}>
          {name}
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
    backgroundColor: Colors.card_dark,
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
    fontFamily: 'Montserrat_500SemiBold',
  },
});
