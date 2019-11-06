import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import TouchID from 'react-native-touch-id';

export default function App() {
  function onAuthTouchId() {
    TouchID.authenticate(
      'to demo this react-native component',
      optionalConfigObject,
    )
      .then(success => {
        alert('Authenticated Successfully');
      })
      .catch(error => {
        alert(error);
      });
  }

  const optionalConfigObject = {
    title: 'Authentication Required', // Android
    imageColor: '#808080', // Android
    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel', // Android
    fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
    unifiedErrors: false, // use unified error messages (default false)
    passcodeFallback: true, // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
  };

  function supported() {
    TouchID.isSupported(optionalConfigObject)
      .then(biometryType => {
        if (biometryType === 'FaceID') {
          alert('FaceID is supported.');
        } else {
          alert('TouchID is supported.');
        }
      })
      .catch(error => {
        alert(error);
      });
  }

  return (
    <View style={styles.container}>
      {supported()}
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
