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
      <ActivityIndicatorIOS
        animating={isLoading}
        style={styles.spinner} />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 64,
    padding: 3,
    paddingLeft: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBarInput: {
    fontSize: 15,
    flex: 1,
    height: 30,
  },
  spinner: {
    width: 30,
  }
});

export default SearchActivityBar;
