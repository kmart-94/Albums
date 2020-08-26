import React, {useEffect, useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import AlbumDetail from './AlbumDetail';

import axios from 'axios';

export default function AlbumList() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function getAlbums() {
      const response = await axios.get('http://rallycoding.herokuapp.com/api/music_albums');
      setAlbums(response.data);
    }
    getAlbums();
  }, []);

  return (
        <FlatList
          data={albums}
          keyExtractor={(album) => album.title}
          renderItem={({item}) => {
            return <AlbumDetail
              title ={item.title}
              artist={item.artist}
              thumbnail={item.thumbnail_image}
              img={item.image}
              vender={item.url}
             />
          }}
        />
  );
}

const styles = StyleSheet.create({

});
