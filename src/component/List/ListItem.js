import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;

function ListItem(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.image}} />
      <Text style={styles.title}>{props.trackName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: deviceWidth / 2,
    backgroundColor: 'rgba(255, 255, 255,1)',
    opacity: 0.62,
    borderRadius: 5,
    borderColor: 'rgba(119,117,117,1)',
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowColor: 'rgba(119,117,117,1)',
    margin: 1,
  },

  image: {
    flex: deviceWidth,
    height: 100,
    justifyContent: 'center',
    margin: 10,
  },

  title: {
    color: '#121212',
    fontSize: 15,
    letterSpacing: 2,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default ListItem;
