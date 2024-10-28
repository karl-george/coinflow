import { Colors } from '@/constants/Colors';
import { info } from '@/data/info';
import { Currency } from '@/interfaces/crypto';
import { Link } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const CoinCardLarge = ({ coin }: { coin: Currency }) => {
  return (
    <Link href={`/coin/${coin.id}`} key={coin.id} asChild>
      <View style={styles.cardLargeBG}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Image
            source={{ uri: info?.[coin.id].logo }}
            style={{ width: 64, height: 64 }}
          />
          <View style={{ flexDirection: 'column' }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'semibold',
                color: Colors.text,
              }}
            >
              {coin.symbol}
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: Colors.text_faded,
              }}
            >
              {coin.name}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 18,
              color: Colors.accent,
            }}
          >
            {coin.quote.EUR.price.toFixed(0)}€
          </Text>
        </View>
      </View>
    </Link>
  );
};

export default CoinCardLarge;

const styles = StyleSheet.create({
  cardLargeBG: {
    backgroundColor: Colors.card_light,
    borderRadius: 12,
    marginBottom: 16,
    padding: 8,
  },
});
