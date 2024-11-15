import CoinCardSmall from '@/components/CoinCardSmall';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Search = () => {
  const { top, bottom } = useSafeAreaInsets();
  const [searchTerm, setSearchTerm] = useState('');
  const [query, setQuery] = useState('');

  const { data } = useQuery({
    queryKey: ['search', query],
    queryFn: () =>
      fetch(`/api/search?query=${query}`).then((res) => res.json()),
  });

  return (
    <ScrollView style={[styles.container, { marginBottom: bottom + 48 }]}>
      {/* Search Input */}
      <View style={[{ marginTop: top + 42 }, styles.inputContainer]}>
        <TouchableOpacity
          onPress={() => {
            setQuery(searchTerm);
          }}
        >
          <Ionicons name='search' size={24} color={Colors.text_faded} />
        </TouchableOpacity>
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
        <Text style={[styles.searchTitle, { marginBottom: 18, marginTop: 22 }]}>
          Search results for: {query}
        </Text>
      </View>
      {/* Coin Thumbs */}
      <View style={styles.coinRow}>
        {data?.coins.map((coin) => (
          <CoinCardSmall
            key={coin.id}
            image={coin.large}
            name={coin.name}
            id={coin.id}
          />
        ))}
      </View>
    </ScrollView>
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
  coinRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
  },
});
