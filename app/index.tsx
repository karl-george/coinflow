import { SignedIn, SignedOut, useAuth, useUser } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Index = () => {
  const { user } = useUser();
  const { signOut } = useAuth();
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <SignedIn>
        <TouchableOpacity onPress={() => router.push('/(auth)/(tabs)/')}>
          <Ionicons name='logo-github' size={24} />
          <Text>Continue</Text>
        </TouchableOpacity>
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
