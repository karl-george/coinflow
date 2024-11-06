import { Colors } from '@/constants/Colors';
import { useUser } from '@clerk/clerk-expo';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Profile = () => {
  const { top, bottom } = useSafeAreaInsets();
  const { user } = useUser();

  return (
    <ScrollView style={styles.container}>
      <View style={{ marginTop: top + 42 }}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={{ uri: user?.imageUrl }}
            resizeMode='contain'
            style={{ width: 120, height: 120, borderRadius: 100 }}
          />
          <View>
            <Text style={styles.name}>
              {user?.firstName} {user?.lastName}
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 28 }}>
          <Text style={styles.subTitle}>Saved Coins</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    paddingHorizontal: 16,
  },
  name: {
    marginTop: 16,
    fontWeight: 'semibold',
    fontSize: 24,
    color: Colors.text,
    fontFamily: 'Montserrat_600SemiBold',
  },
  subTitle: {
    marginTop: 16,
    fontWeight: 'semibold',
    fontSize: 20,
    color: Colors.text,
    fontFamily: 'Montserrat_600SemiBold',
  },
});
