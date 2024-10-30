import Chart from '@/components/Chart';
import { Colors } from '@/constants/Colors';
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

  return (
    <View style={styles.container}>
      {/* Header */}
      <Stack.Screen
        options={{
          headerTitle: data?.[id].name,
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
                source={{ uri: data?.[id].logo }}
                style={{ width: 28, height: 28 }}
              />
            </View>
          ),
          headerRight: () => (
            <View
              style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}
            >
              <TouchableOpacity onPress={() => {}}>
                <Ionicons
                  name='bookmark-outline'
                  size={28}
                  color={Colors.text_faded}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      {/* Chart */}
      <View style={{ marginTop: 16 }}>
        <Chart height={460} />
      </View>
      {/* Info Card */}
      <View style={styles.infoContainer}>
        <View style={styles.infoCard}>
          <View style={styles.textInfoRow}>
            <Text style={styles.textInfo}>Open</Text>
            <Text style={styles.textInfo}>123456</Text>
          </View>
          <View style={styles.textInfoRow}>
            <Text style={styles.textInfo}>Close</Text>
            <Text style={styles.textInfo}>123456</Text>
          </View>
        </View>
        <View style={styles.infoCard}>
          <View style={styles.textInfoRow}>
            <Text style={styles.textInfo}>High</Text>
            <Text style={styles.textInfo}>123456</Text>
          </View>
          <View style={styles.textInfoRow}>
            <Text style={styles.textInfo}>Low</Text>
            <Text style={styles.textInfo}>123456</Text>
          </View>
        </View>
      </View>
      {/* Details */}
      <View style={{ marginTop: 24, gap: 16 }}>
        <View style={styles.textInfoRow}>
          <Text style={styles.textInfo}>Daily Change</Text>
          <Text style={[styles.textInfo, { color: Colors.accent }]}>5.09%</Text>
        </View>
        <View style={styles.textInfoRow}>
          <Text style={styles.textInfo}>Market Capital</Text>
          <Text style={[styles.textInfo]}>$5325252</Text>
        </View>
        <View style={styles.textInfoRow}>
          <Text style={styles.textInfo}>3M Drawdown</Text>
          <Text style={[styles.textInfo, { color: 'red' }]}>-12</Text>
        </View>
        <View style={styles.textInfoRow}>
          <Text style={styles.textInfo}>Enterprise Value</Text>
          <Text style={[styles.textInfo]}>$5544</Text>
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
