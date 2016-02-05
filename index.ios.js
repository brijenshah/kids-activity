'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS
} from 'react-native';
import Main from './app/views/Main';

const KidsActivity = () => {
  return (
    <NavigatorIOS
      style={styles.container}
      initialRoute={{
        title: 'Search Activities',
        component: Main
      }}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('KidsActivity', () => KidsActivity);
