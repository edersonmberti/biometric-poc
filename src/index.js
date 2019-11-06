import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import TouchID from 'react-native-touch-id';

export default function App() {
  function onAuthTouchId() {
    TouchID.authenticate('to demo this react-native component')
      .then(success => {
        alert('Authenticated Successfully');
      })
      .catch(error => {
        alert(error);
      });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onAuthTouchId}>
        <Text>Auth with Touch ID</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
