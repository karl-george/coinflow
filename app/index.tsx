import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Index = () => {
  const { user } = useUser();

  return (
    <View>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
      </SignedIn>
      <SignedOut>
        <Link href='/sign-in'>
          <Text>Sign In</Text>
        </Link>
        <Link href='/sign-up'>
          <Text>Sign Up</Text>
        </Link>
      </SignedOut>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
