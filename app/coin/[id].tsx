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
      <Stack.Screen
        options={{
          headerTitle: info?.[id].name,
          headerTitleAlign: 'center',
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
        }}
      />
      <Text>Page</Text>
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
});
