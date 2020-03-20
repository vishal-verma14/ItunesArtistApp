import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export default class LoadingSpinner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: this.props.loading,
    };
  }
  render() {
    return (
      <Spinner
        visible={this.state.loading}
        textContent={'Loading...'}
        textStyle={styles.spinnerTextStyle}
      />
    );
  }
}

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#000',
  },
});
