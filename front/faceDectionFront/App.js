import React, {useState, Platfrom} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';

const App = () => {
  const [photo, setPhoto] = useState();

  const createFormData = () => {
    console.log(photo);
    const formData = new FormData();

    formData.append('photo', {
      name: photo.fileName,
      type: photo.type,
      uri: photo.uri,
    });
    return formData;
  };

  const handleUploadPhoto = () => {
    const fileData = createFormData();
    console.log(fileData);
    axios
      .post('http://192.168.35.91:8080/', {body: JSON.stringify(fileData)})
      .then(() => {
        console.log('success');
      })
      .catch(e => console.log(e));
  };

  const runCamera = async () => {
    const result = await launchCamera({cameraType: 'front'});
    setPhoto(result.assets[0]);

    handleUploadPhoto();
  };

  return (
    <View style={styles.layout}>
      <Text>main page2233</Text>
      <TouchableOpacity
        style={styles.captureButton}
        onPress={() => {
          runCamera();
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
    borderWidth: 3,
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 50,
  },
});

export default App;
