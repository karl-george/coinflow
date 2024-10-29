import Chart from '@/components/Chart';
import { Colors } from '@/constants/Colors';
import { info } from '@/data/info';
import { Ionicons } from '@expo/vector-icons';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Page = () => {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  console.log(id);

  return (
    <View style={styles.container}>
      {/* Header */}
      <Stack.Screen
        options={{
          headerTitle: info?.[id].name,
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
                source={{ uri: info?.[id].logo }}
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
        <Chart />
      </View>
      {/* Info */}
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
    fontFamily: 'Montserrat_600SemiBold',
  },
});
