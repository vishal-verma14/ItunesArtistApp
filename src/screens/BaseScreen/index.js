import React, {Component} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import Item from '../../component/List/ListItem';
import Loading from '../../component/Spinner/LoadingSpinner';

class index extends Component {
  render() {
    console.log('Loading', this.props.loading);

    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {this.props.loading ? (
          <Loading loading={false} />
        ) : (
          <FlatList
            data={this.props.data}
            numColumns={2}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate('DetailScreen', {item})
                  }>
                  <Item
                    title={item.artistName}
                    image={item.artworkUrl100}
                    cName={item.collectionName}
                    price={item.collectionPrice}
                    trackName={item.trackName}
                  />
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item, index) => index.toString()}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  data: state.apiReducer.data,
  loading: state.apiReducer.loading,
  error: state.apiReducer.error,
});

export default connect(mapStateToProps, null)(index);
