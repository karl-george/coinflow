import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Search = () => {
  const { top } = useSafeAreaInsets();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <View style={styles.container}>
      {/* Search Input */}
      <View style={[{ marginTop: top + 42 }, styles.inputContainer]}>
        <Ionicons name='search' size={24} color={Colors.text_faded} />
        <TextInput
          placeholder='Search for coins...'
          placeholderTextColor={Colors.text_faded}
          style={styles.inputText}
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>
      {/* Search Title */}
      <View>
        <Text style={styles.searchTitle}>{searchTerm}</Text>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    paddingHorizontal: 16,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: Colors.card_light,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: Colors.card_dark,
    borderRadius: 8,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  inputText: {
    color: Colors.text,
    fontSize: 16,
  },
  searchTitle: {
    marginTop: 16,
    fontWeight: 'semibold',
    fontSize: 20,
    color: Colors.text,
    fontFamily: 'Montserrat_600SemiBold',
  },
});
