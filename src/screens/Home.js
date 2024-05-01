// HomeScreen.js
import React from 'react';
import { View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'  }}>
            <Button
                style={{ marginBottom: '20px'}}
                title="Перейти к плееру"
                onPress={() => navigation.navigate('MusicPlayer')}
            />
            <Button
                style={{ marginBottom: '20px'}}
                title="Перейти ко всем трекам"
                onPress={() => navigation.navigate('AllTracks')}
            />
            <Button
                style={{ marginBottom: '20px'}}
                title="Перейти ко всем плейлистам"
                onPress={() => navigation.navigate('AllPlaylists')}
            />
        </View>
    );
};

export default HomeScreen;
