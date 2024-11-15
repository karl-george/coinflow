import { Colors } from '@/constants/Colors';
import { useAuth, useOAuth } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
    <View style={styles.container}>
      <LinearGradient
        colors={['#111015', '#151D1F']}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.gradient}
      />
      <View style={{ gap: 16 }}>
        <TouchableOpacity
          onPress={() => onSelectAuth(Strategy.Google)}
          style={styles.button}
        >
          <Ionicons name='logo-google' size={24} />
          <Text style={styles.buttonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onSelectAuth(Strategy.Github)}
          style={styles.button}
        >
          <Ionicons name='logo-github' size={24} />
          <Text style={styles.buttonText}>Continue with Github</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backText}>Go back</Text>
        </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  button: {
    backgroundColor: Colors.accent,
    padding: 16,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  buttonText: {
    fontFamily: 'Montserrat_600SemiBold',
  },
  backText: {
    color: Colors.accent,
    fontFamily: 'Montserrat_400Regular',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
