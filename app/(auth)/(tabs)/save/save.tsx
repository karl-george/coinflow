import CoinCardSmall from '@/components/CoinCardSmall';
import { Colors } from '@/constants/Colors';
import { useStore } from '@/store/savedStore';
import { useQuery } from '@tanstack/react-query';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Save = () => {
  const { top, bottom } = useSafeAreaInsets();

  const savedCoins = useStore((state: any) => state.savedCoins);
  // const ids = savedCoins.join(',');

  const ids = ['bitcoin', 'ethereum'];

  const { data } = useQuery({
    queryKey: ['savedcoins', ids],
    queryFn: () => fetch(`/api/savedcoins?id=${ids}`).then((res) => res.json()),
    enabled: !!ids,
  });

  return (
    <ScrollView style={[styles.container]}>
      <View style={{ marginTop: top + 42 }}>
        <Text style={styles.title}>Saved Coins</Text>
      </View>

      {/* Coins */}
      <View
        style={{
          marginTop: 16,
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        {data?.map((coin: any) => (
          <CoinCardSmall
            key={coin.id}
            image={coin.image}
            name={coin.name}
            id={coin.id}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default Save;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    marginTop: 16,
    fontWeight: 'semibold',
    fontSize: 20,
    color: Colors.text,
    fontFamily: 'Montserrat_600SemiBold',
  },
});
