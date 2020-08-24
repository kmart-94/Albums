import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text} from 'react-native-elements';

export default function AlbumDetail({title, artist, img, thumbnail, vender}) {
  return (
      <View style={styles.container}>
        <View>
          <Image style={styles.thumbnail}/>
          <Text h3>{title}</Text>
          <Text h3>{artist}</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },
  thumbnail: {
    height: 80
  }
});
