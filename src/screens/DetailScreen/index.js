import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions, Image} from 'react-native';
import {connect} from 'react-redux';

const deviceWidth = Dimensions.get('window').width;

function index(props) {
  const {
    longDescription,
    artworkUrl100,
    artistName,
  } = props.navigation.state.params.item;
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Image style={styles.image} source={{uri: artworkUrl100}} />
        <Text style={styles.title}>{artistName}</Text>
      </View>
      <View style={styles.rect2}>
        <Text style={styles.loremIpsum}>{longDescription}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rect: {
    flex: 0.47,
    backgroundColor: 'rgba(236, 236, 236,1)',
    margin: 10,
  },
  rect2: {
    flex: 0.56,
    backgroundColor: 'rgba(254, 254, 254,1)',
  },

  loremIpsum: {
    color: '#121212',
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

const mapStateToProps = state => ({
  data: state.apiReducer.data,
  loading: state.apiReducer.loading,
  error: state.apiReducer.error,
});

export default connect(mapStateToProps, null)(index);
