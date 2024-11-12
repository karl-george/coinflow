import CoinCardSmall from '@/components/CoinCardSmall';
import { Colors } from '@/constants/Colors';
import { useStore } from '@/store/savedStore';
import { useUser } from '@clerk/clerk-expo';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Profile = () => {
  const { top, bottom } = useSafeAreaInsets();
  const { user } = useUser();

  const savedCoins = useStore((state: any) => state.savedCoins);
  // const ids = savedCoins.join(',');

  const ids = ['bitcoin', 'ethereum'];

  const { data } = useQuery({
    queryKey: ['savedcoins', ids],
    queryFn: () => fetch(`/api/savedcoins?id=${ids}`).then((res) => res.json()),
    enabled: !!ids,
  });

  return (
    <ScrollView style={styles.container}>
      <View style={{ marginTop: top + 42 }}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={{ uri: user?.imageUrl }}
            resizeMode='contain'
            style={{ width: 120, height: 120, borderRadius: 100 }}
          />
          <View>
            <Text style={styles.name}>
              {user?.firstName} {user?.lastName}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 28 }}>
          <Text style={styles.subTitle}>Saved Coins</Text>
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
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    paddingHorizontal: 16,
  },
  name: {
    marginTop: 16,
    fontWeight: 'semibold',
    fontSize: 24,
    color: Colors.text,
    fontFamily: 'Montserrat_600SemiBold',
  },
  subTitle: {
    marginTop: 16,
    fontWeight: 'semibold',
    fontSize: 20,
    color: Colors.text,
    fontFamily: 'Montserrat_600SemiBold',
  },
});
