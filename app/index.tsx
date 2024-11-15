import { Colors } from '@/constants/Colors';
import { SignedOut } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Index = () => {
  return (
    <View style={styles.container}>
      <SignedOut>
        <Link href='/signin'>
          <Text>Sign In</Text>
        </Link>
      </SignedOut>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
