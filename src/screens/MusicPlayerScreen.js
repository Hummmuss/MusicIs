import React, {useEffect, useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { Audio } from 'expo-av';

const MusicPlayerScreen = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundObject, setSoundObject] = useState(null);

  useEffect(() => {
    const loadSound = async () => {
      const audioObject = new Audio.Sound();
      try {
        await audioObject.loadAsync(require('../../assets/plenka - Wrong Way.mp3'));
        setSoundObject(audioObject);
      } catch (error) {
        console.error('Ошибка при загрузке аудиофайла:', error);
      }
    };
    loadSound();
    return () => {
      if (soundObject) {
        soundObject.unloadAsync();
      }
    };
  }, []);

  const togglePlay = async () => {
    try {
      if (isPlaying) {
        await soundObject.pauseAsync();
      } else {
        await soundObject.playAsync();
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error('Ошибка в togglePlay:', error);
      Alert.alert('Ошибка', 'Что-то сломалось((');
    }
  };

  return (
      <View style={styles.container}>
        <Image source={require('../../assets/CheHigh.jpg')} style={styles.cover} />
        <Text style={styles.trackTitle}>Wrong Way</Text>
        <Text style={styles.artist}>Plenka</Text>
        <TouchableOpacity onPress={togglePlay} style={styles.button}>
          <Text style={styles.buttonText}>{isPlaying ? '||' : '|>'}</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cover: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  trackTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  artist: {
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ff8000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default MusicPlayerScreen;
