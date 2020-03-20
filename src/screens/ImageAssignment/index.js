import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filepath: {
        data: '',
        uri: '',
      },
      fileData: '',
      fileUri: '',
    };
  }

  launchImageLibrary = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
        maxWidth: 500,
        maxHeight: 500,
      },
    };
    ImagePicker.launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response.uri};
        console.log('response', JSON.stringify(response));
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri,
        });
      }
    });
  };
  renderFileUri() {
    if (this.state.fileUri) {
      return <Image source={{uri: this.state.fileUri}} style={styles.images} />;
    } else {
      return (
        <View style={styles.images}>
          <Text>Please Select Image</Text>
        </View>
      );
    }
  }
  render() {
    return (
      <View style={{flexDirection: 'column'}}>
        <TouchableOpacity
          onPress={this.launchImageLibrary}
          style={styles.btnSection}>
          <Text style={styles.btnText}>Choose File</Text>
        </TouchableOpacity>

        {this.renderFileUri()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  images: {
    width: 500,
    height: 500,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 3,
  },
  btnSection: {
    width: 225,
    height: 50,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    marginBottom: 10,
  },
});
