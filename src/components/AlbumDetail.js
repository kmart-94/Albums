import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text, Button } from 'react-native-elements';
import Card from './Card';
import CardSection from './CardSection';
import * as Linking from 'expo-linking';

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
              <Text h4>{artist}</Text>
            </View>
          </CardSection>
          <CardSection>
            <View>
              <Image source={{uri: img}} style={styles.albumCover}/>
            </View>
          </CardSection>
          <CardSection>
            <View style={styles.buttonSection}>
              <Button
                title="Buy Now"
                buttonStyle={styles.button}
                onPress={() => {
                  Linking.openURL(vender);
                }}
              />
            </View>
          </CardSection>
        </Card>
  );
}

const styles = StyleSheet.create({
  thumbnail: {
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContainer: {
    justifyContent: 'space-around'
  },
  albumCover: {
    width: '100%',
    aspectRatio: 1
  },
  buttonSection: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: 150,
    height: 50
  }
});
