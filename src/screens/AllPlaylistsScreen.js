import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const AllPlaylistsScreen = () => {
    // Замоканный массив плейлистов
    const playlists = [
        {
            id: '1',
            title: 'Плейлист 1',
            trackIds: ['1', '2', '3', '4', '5']
        },
        {
            id: '2',
            title: 'Плейлист 2',
            trackIds: ['3', '4', '5']
        },
        // Добавьте здесь другие плейлисты при необходимости
    ];

    // Функция получения названий треков по их ID
    const getTrackNames = (trackIds) => {
        return trackIds.map(trackId => `Track ${trackId}`).join(', ');
    };

    // Функция рендеринга элемента списка плейлистов
    const renderItem = ({ item }) => (
        <View style={styles.playlistItem}>
            <Text style={styles.playlistTitle}>{item.title}</Text>
            <Text style={styles.playlistTracks}>{getTrackNames(item.trackIds)}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={playlists}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.playlistList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    playlistList: {
        width: '100%',
    },
    playlistItem: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    playlistTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    playlistTracks: {
        fontSize: 16,
        color: '#666',
    },
});

export default AllPlaylistsScreen;
