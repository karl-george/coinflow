import { Colors } from '@/constants/Colors';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Home = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: top + 42 }]}>
      {/* Welcome */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 12,
        }}
      >
        {/* Image */}
        {/* //Todo: Fix image source when Clerk is in  */}
        <Image
          source={require('@/assets/images/react-logo.png')}
          resizeMode='contain'
          style={{ width: 80, height: 80 }}
        />
        {/* Text */}
        <View>
          <Text style={styles.name}>Hello Karl</Text>
          <Text>Everything Crypto</Text>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    paddingHorizontal: 16,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 24,
    color: Colors.text,
  },
});
