'use strict';
import React, {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} from 'react-native';
import SearchActivityView from './app/views/SearchActivityView';

const KidsActivity = () => {
  return (
    <NavigatorIOS
      style={styles.container}
      initialRoute={{
        title: 'Search Activities',
        component: SearchActivityView
      }}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }
});

AppRegistry.registerComponent('KidsActivity', () => KidsActivity);
