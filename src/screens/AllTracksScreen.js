import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchTracks} from "../api/api";

Parse.setAsyncStorage(AsyncStorage)

Parse.initialize('66JzfZIymjjfqzPy5c085f7XGedqhNmdTxB1JrOY', 'KqUYEIvqhdoxVuPzizgYyUfcZ5sUhvdb5lAr17Us');
Parse.serverURL = 'https://parseapi.back4app.com/';

const AllTracksScreen = () => {
    const [tracks, setTracks] = useState([]);

    useEffect(() => {
        fetchTracks().then(setTracks)
    }, []);

    return (
        <View>
            {tracks.map((item, index) => {
                return (
                    <View key={index} style={styles.trackList}>
                        <View style={styles.trackItem}>
                            <Text style={styles.trackTitle}>{item.name}</Text>
                            <Text style={styles.trackArtist}>{item.duration}</Text>
                        </View>
                    </View>
                )
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    trackList: {
        width: '100%',
    },
    trackItem: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    trackTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    trackArtist: {
        fontSize: 16,
        color: '#666',
    },
});

export default AllTracksScreen;
