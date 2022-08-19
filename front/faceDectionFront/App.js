/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import _ from 'lodash';

const EMOTIONS = {
  ANGRY: 'angry',
  DISGUST: 'disgust',
  SCARED: 'scared',
  HAPPY: 'happy',
  SAD: 'sad',
  SUPRISED: 'surprised',
  NEUTRAL: 'neutral',
};

const App = () => {
  const [takePic, setTakePic] = useState(null);
  const [predictResult, setPredictResult] = useState(null);
  const [youtubeLink, setYoutubeLink] = useState('');

  const createFormData = photo => {
    const formData = new FormData();

    formData.append('photo', {
      name: photo.fileName,
      type: photo.type,
      uri: photo.uri,
    });
    return formData;
  };

  const handleUploadPhoto = photo => {
    const fileData = createFormData(photo);
    fetch('http://192.168.35.164:8080', {
      method: 'POST',
      body: fileData,
      headers: {'content-type': 'multipart/form-data'},
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPredictResult(data);
      })
      .catch(e => {
        console.error(e);
      });
  };
  const runCamera = async () => {
    const result = await launchCamera({cameraType: 'front'});
    handleUploadPhoto(result.assets[0]);
    setTakePic(result.assets[0].uri);
  };

  useEffect(() => {
    if (predictResult !== null) {
      if (predictResult.emotion === EMOTIONS.ANGRY) {
        setYoutubeLink('https://youtu.be/JBe0yHNEURo');
      } else if (predictResult.emotion === EMOTIONS.DISGUST) {
        setYoutubeLink('https://youtu.be/cJU6_8SRdM8');
      } else if (predictResult.emotion === EMOTIONS.HAPPY) {
        setYoutubeLink('https://youtu.be/ZbZSe6N_BXs');
      } else if (predictResult.emotion === EMOTIONS.NEUTRAL) {
        setYoutubeLink('https://youtu.be/5ysdHjaeGGU');
      } else if (predictResult.emotion === EMOTIONS.SAD) {
        setYoutubeLink('https://youtu.be/aZP41h5e7wE');
      } else if (predictResult.emotion === EMOTIONS.SCARED) {
        setYoutubeLink('https://youtu.be/B61nm9OHt5A');
      } else if (predictResult.emotion === EMOTIONS.SUPRISED) {
        setYoutubeLink('https://youtu.be/OjLVAFuyia4');
      }
    }
  }, [predictResult]);

  const redirectUrl = link => {
    Linking.openURL(link.youtubeLink);
  };

  return (
    <View style={styles.layout}>
      {predictResult && youtubeLink ? (
        <ResultView
          takePic={takePic}
          predictResult={predictResult}
          youtubeLink={youtubeLink}
          redirectUrl={redirectUrl}
        />
      ) : (
        <MainView runCamera={runCamera} />
      )}
    </View>
  );
};

const MainView = ({runCamera}) => {
  return (
    <TouchableOpacity
      style={styles.captureButton}
      onPress={() => {
        runCamera();
      }}>
      <Text style={{fontSize: 55, color: 'black', paddingBottom: 15}}>📷</Text>
      <Text style={{fontSize: 25}}>Catch Your</Text>
      <Text style={{fontSize: 25}}>Emotion</Text>
    </TouchableOpacity>
  );
};

const ResultView = ({takePic, predictResult, youtubeLink, redirectUrl}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={{width: 100, height: 100, borderRadius: 15, marginBottom: 25}}
        source={{uri: takePic}}
      />
      <Text style={{paddingBottom: 15, fontSize: 20}}>
        {predictResult.emotion} : {predictResult.per}
      </Text>
      <Text style={{paddingBottom: 15, fontSize: 20}}>
        <Text style={{fontSize: 25, color: 'black'}}>
          {predictResult.emotion}
        </Text>{' '}
        상태시군요!
      </Text>
      <Text style={{paddingBottom: 15, fontSize: 20, color: 'black'}}>
        음악을 추천드려요 <Text style={{fontSize: 25}}>🤟</Text>
      </Text>
      <TouchableOpacity
        onPress={() => {
          redirectUrl({youtubeLink});
        }}>
        <Text
          style={{
            fontSize: 20,
            borderWidth: 1,
            backgroundColor: '#443cf4',
            color: '#b9bbce',
            borderRadius: 15,
            marginTop: 105,
            padding: 20,
            paddingHorizontal: 100,
          }}>
          Start Music
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  captureButton: {
    marginTop: 50,
    borderWidth: 3,
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
