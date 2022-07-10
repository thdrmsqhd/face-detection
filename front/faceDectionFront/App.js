import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import axios from 'axios';

const App = () => {
  return (
    <View style={styles.layout}>
      <Text>main page</Text>
      <TouchableOpacity
        style={styles.captureButton}
        onPress={() => {
          alert('작동중');
        }}>
        <Text>Capture</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureButton: {
    marginTop: 50,
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 50,
  },
});

export default App;
