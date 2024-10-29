import { SignedIn, SignedOut, useAuth, useUser } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Index = () => {
  const { user } = useUser();
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SignedIn>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <TouchableOpacity onPress={() => signOut()}>
          <Ionicons name='logo-github' size={24} />
          <Text>Sign out</Text>
        </TouchableOpacity>
      </SignedIn>
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
