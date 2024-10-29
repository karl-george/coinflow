import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { useAuth, useOAuth } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';

enum Strategy {
  Google = 'oauth_google',
  Github = 'oauth_github',
}

const Page = () => {
  const router = useRouter();
  const { signOut } = useAuth();

  const { startOAuthFlow: googleAuth } = useOAuth({
    strategy: Strategy.Google,
  });
  const { startOAuthFlow: githubAuth } = useOAuth({
    strategy: Strategy.Github,
  });

  const onSelectAuth = async (strategy: Strategy) => {
    const selectedAuth = {
      [Strategy.Google]: googleAuth,
      [Strategy.Github]: githubAuth,
    }[strategy];

    try {
      const { createdSessionId, setActive } = await selectedAuth();

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
        router.replace('/(auth)/(tabs)/');
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => onSelectAuth(Strategy.Google)}>
        <Ionicons name='logo-google' size={24} />
        <Text>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onSelectAuth(Strategy.Github)}>
        <Ionicons name='logo-github' size={24} />
        <Text>Continue with Github</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => signOut()}>
        <Ionicons name='logo-github' size={24} />
        <Text>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({});
