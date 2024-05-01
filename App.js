import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MusicPlayerScreen from './src/screens/MusicPlayerScreen';
import AllTracksScreen from './src/screens/AllTracksScreen';
import AllPlaylistsScreen from './src/screens/AllPlaylistsScreen';
import Home from "./src/screens/Home";

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ title: 'Домашняя страница' }} />
                <Stack.Screen name="MusicPlayer" component={MusicPlayerScreen} options={{ title: 'Музыкальный плеер' }} />
                <Stack.Screen name="AllTracks" component={AllTracksScreen} options={{ title: 'Все треки' }} />
                <Stack.Screen name="AllPlaylists" component={AllPlaylistsScreen} options={{ title: 'Все плейлисты' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
