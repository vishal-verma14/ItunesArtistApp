import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {colors} from '../../utils/common/colors';
import constant from '../../utils/common/constant';

function SearchButton(props) {
  return (
    <View style={styles.btn}>
      <Text style={styles.submit}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'rgba(230, 230, 230,1)',
    borderRadius: 20,
    borderColor: colors.searchBorder,
    borderWidth: 0.3,
  },
  submit: {
    color: colors.searchBtnTitle,
    fontSize: 30,
    letterSpacing: 4,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});

export default SearchButton;
