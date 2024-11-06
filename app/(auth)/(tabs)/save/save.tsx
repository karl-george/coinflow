import { Colors } from '@/constants/Colors';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Save = () => {
  const { top, bottom } = useSafeAreaInsets();

  return (
    <ScrollView style={[styles.container]}>
      <View style={{ marginTop: top + 42 }}>
        <Text style={styles.title}>Saved Coins</Text>
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
