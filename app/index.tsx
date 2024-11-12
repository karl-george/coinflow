import { Colors } from '@/constants/Colors';
import { SignedOut } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Index = () => {
  return (
    <View
      style={{
        backgroundColor: Colors.background,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <SignedOut>
        <Link href='/signin'>
          <Text>Sign In</Text>
        </Link>
        <Link href='/signup'>
          <Text>Sign Up</Text>
        </Link>
      </SignedOut>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
