import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import InputText from '../../component/SearchTextInput/SearchInput';
import Loading from '../../component/Spinner/LoadingSpinner';

import SearchButton from '../../component/Button/SearchButton';
import {connect} from 'react-redux';
import getRequest from '../../utils/actions/ActionCreator';
import {isRequired} from '../../utils/common/validaton';
import {BASE_URL} from '../../utils/common/Api';
import {colors} from '../../utils/common/colors';
import constant from '../../utils/common/constant';

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      value: '',
      loading: false,
      isRequired: {
        text: '',
        message: '',
        isValid: false,
      },
    };

    this.isRequired = isRequired.bind(this);
  }

  renderSearchScreen() {
    if (this.state.isRequired.isValid) {
      this.setState({
        loading: true,
      });
      this.callServer();
    } else {
      alert('Please fill credentials');
    }
  }

  callServer() {
    const api = `${BASE_URL}` + this.state.isRequired.text;
    this.props
      .getRequest(api)
      .then(() => {
        const data = this.props.data;
        this.setState({
          data,
        });
      })
      .catch(error => {
        console.log(error);
      });

    this.props.navigation.navigate('BaseScreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.seachTitle}>{constant.search}</Text>
        <InputText
          onChangeValue={this.isRequired}
          inputType={constant.isRequired}
          errorStyle={styles.error}
          error={this.state.isRequired.message}
        />
        <Loading loading={this.state.loading} />

        <TouchableOpacity onPress={() => this.renderSearchScreen()}>
          <SearchButton title={constant.Submit} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  seachTitle: {
    justifyContent: 'center',
    fontSize: 30,
    alignSelf: 'center',
    color: colors.searchTitle,
  },
  error: {
    alignSelf: 'flex-end',
    marginTop: 2,
    color: colors.errorColor,
  },
  spinnerTextStyle: {
    color: '#000',
  },
});

const mapDispatchToProps = dispatch => ({
  getRequest: url => dispatch(getRequest(url)),
});

export default connect(null, mapDispatchToProps)(index);
