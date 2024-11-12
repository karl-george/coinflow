import Chart from '@/components/Chart';
import { Colors } from '@/constants/Colors';
import { useStore } from '@/store/savedStore';
import { shortenNumber } from '@/utils/shortenNumber';
import { Ionicons } from '@expo/vector-icons';
import { useQuery } from '@tanstack/react-query';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Page = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const { data } = useQuery({
    queryKey: ['info', id],
    queryFn: () => fetch(`/api/info?id=${id}`).then((res) => res.json()),
    enabled: !!id,
  });

  const toggleSaveCoin = useStore((state: any) => state.toggleSaveCoin);
  const savedCoins = useStore((state: any) => state.savedCoins);

  return (
    <View style={styles.container}>
      {/* Header */}
      <Stack.Screen
        options={{
          headerTitle: data?.name,
          headerTitleAlign: 'center',
          headerTitleStyle: { fontFamily: 'Montserrat_700Bold' },
          headerTintColor: Colors.text,
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerLeft: () => (
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}
            >
              <TouchableOpacity onPress={() => router.back()}>
                <Ionicons name='chevron-back' size={28} color={Colors.text} />
              </TouchableOpacity>
              <Image
                source={{ uri: data?.image.small }}
                style={{ width: 28, height: 28 }}
              />
            </View>
          ),
          headerRight: () => (
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}
            >
              <TouchableOpacity onPress={() => toggleSaveCoin(data?.id)}>
                {savedCoins.includes(data?.id) ? (
                  <Ionicons
                    name='bookmark-outline'
                    size={28}
                    color={Colors.text_faded}
                  />
                ) : (
                  <Ionicons name='bookmark' size={28} color={Colors.text} />
                )}
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      {/* Chart */}
      <View style={{ marginTop: 16 }}>{/* <Chart height={460} /> */}</View>
      {/* Info Card */}
      <View style={styles.infoContainer}>
        <View style={styles.infoCard}>
          <View style={styles.textInfoRow}>
            <Text style={styles.textInfo}>Price</Text>
            <Text style={styles.textInfo}>
              €{data?.market_data.current_price.eur}
            </Text>
          </View>
          <View style={styles.textInfoRow}>
            <Text style={styles.textInfo}>Cap</Text>
            <Text style={styles.textInfo}>
              €{data && shortenNumber(data?.market_data.market_cap.eur)}
            </Text>
          </View>
        </View>
        <View style={styles.infoCard}>
          <View style={styles.textInfoRow}>
            <Text style={styles.textInfo}>High</Text>
            <Text style={styles.textInfo}>
              €{data?.market_data.high_24h.eur}
            </Text>
          </View>
          <View style={styles.textInfoRow}>
            <Text style={styles.textInfo}>Low</Text>
            <Text style={styles.textInfo}>
              €{data?.market_data.low_24h.eur}
            </Text>
          </View>
        </View>
      </View>
      {/* Details */}
      <View style={{ marginTop: 24, gap: 16 }}>
        <View style={styles.textInfoRow}>
          <Text style={styles.textInfo}>Daily Change</Text>
          <Text
            style={[
              styles.textInfo,
              parseFloat(
                data?.market_data.price_change_percentage_24h.toFixed(2)
              ) < 0
                ? { color: '#D21F3C' }
                : { color: Colors.accent },
            ]}
          >
            {data?.market_data.price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
        <View style={styles.textInfoRow}>
          <Text style={styles.textInfo}>Monthly Change</Text>
          <Text
            style={[
              styles.textInfo,
              parseFloat(
                data?.market_data.price_change_percentage_30d.toFixed(2)
              ) < 0
                ? { color: '#D21F3C' }
                : { color: Colors.accent },
            ]}
          >
            {data?.market_data.price_change_percentage_30d.toFixed(2)}%
          </Text>
        </View>
        <View style={styles.textInfoRow}>
          <Text style={styles.textInfo}>All Time High</Text>
          <Text style={[styles.textInfo]}>€{data?.market_data.ath.eur}</Text>
        </View>
        <View style={styles.textInfoRow}>
          <Text style={styles.textInfo}>All Time Low</Text>
          <Text style={[styles.textInfo]}>€{data?.market_data.atl.eur}</Text>
        </View>
      </View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    paddingHorizontal: 16,
  },
  infoContainer: {
    marginTop: 16,
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoCard: {
    backgroundColor: Colors.card_light,
    borderRadius: 12,
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 20,
    gap: 12,
  },
  textInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInfo: {
    fontSize: 16,
    color: Colors.text,
    fontFamily: 'Montserrat_400Regular',
  },
});
