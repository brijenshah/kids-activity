'use strict';

import React, {
  ActivityIndicatorIOS,
  TextInput,
  StyleSheet,
  View
} from 'react-native';

const SearchActivityBar = ({onSearchChange, isLoading, onFocus}) => {
  return (
      <View style={styles.searchBar}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          onChange={onSearchChange}
          placeholder="Search an activity..."
          onFocus={onFocus}
          style={styles.searchBarInput} />
      </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 64,
    flexDirection: 'row',
    backgroundColor: 'grey',
    height: 36
  },
  searchBarInput: {
    fontSize: 14,
    flex: 1,
    height: 20,
    backgroundColor: 'white',
    alignSelf : 'center',
    margin: 6,
    padding: 6
  },
  spinner: {
    width: 30,
  }
});

export default SearchActivityBar;
