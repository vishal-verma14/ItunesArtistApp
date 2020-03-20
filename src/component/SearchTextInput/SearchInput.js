import React, {Component} from 'react';
import {StyleSheet, TextInput, Text} from 'react-native';

import {colors} from '../../utils/common/colors';
import constant from '../../utils/common/constant';

export default class SearchInput extends Component {
  render() {
    const {inputType, errorStyle, onChangeText, error} = this.props;
    return (
      <>
        <TextInput
          placeholder="Artist Name"
          style={styles.textInput}
          onChangeText={value => {
            this.props.onChangeValue({
              value,
            });
          }}></TextInput>
        <Text style={errorStyle}>{error}</Text>
      </>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 15,
    letterSpacing: 2,
    borderWidth: 1,
    margin: 10,
  },
});
