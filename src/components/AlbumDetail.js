import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text} from 'react-native-elements';
import Card from './Card';
import CardSection from './CardSection';

import { MaterialIcons } from '@expo/vector-icons';

export default function AlbumDetail({title, artist, img, thumbnail, vender}) {
  return (
        <Card>
          <CardSection>
            <View style={styles.thumbnail}>
              <MaterialIcons name="album" size={80} color="black" />
            </View>
            <View style={styles.textContainer}>
              <Text h3>{title}</Text>
              <Text h3>{artist}</Text>
            </View>
          </CardSection>
        </Card>
  );
}

const styles = StyleSheet.create({
  thumbnail: {
    marginRight: 20
  },
  textContainer: {
    justifyContent: 'space-around'
  }
});
