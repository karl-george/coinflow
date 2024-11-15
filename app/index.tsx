import { Colors } from '@/constants/Colors';
import { SignedIn, SignedOut } from '@clerk/clerk-expo';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Index = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#111015', '#151D1F']}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.gradient}
      />
      <Image
        source={require('../assets/images/coinflow-logo.png')}
        resizeMode='contain'
        style={{ width: '100%', flex: 1, marginTop: 24 }}
      />

      <SignedOut>
        <TouchableOpacity
          onPress={() => router.push('/signin')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </SignedOut>
      <SignedIn>
        <TouchableOpacity
          onPress={() => router.push('/(auth)/(tabs)')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </SignedIn>
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
    paddingBottom: 24,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  mainText: {
    color: Colors.text,
    fontSize: 42,
    fontWeight: 'bold',
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: Colors.accent,
    paddingVertical: 16,
    width: '90%',
    borderRadius: 8,
    alignItems: 'center',
    gap: 8,
  },
  buttonText: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 18,
  },
});
