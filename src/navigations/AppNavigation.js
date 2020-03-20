import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import {
  BaseScreen,
  SearchScreen,
  DetailScreen,
  ImageAssignment,
} from '../screens';

const navigationOptions = title => {
  if (!!title) {
    return {
      title,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  }
  return {header: null};
};

const MainNavigator = createStackNavigator(
  {
    BaseScreen: {
      screen: BaseScreen,
    },
    SearchScreen: {
      screen: SearchScreen,
      navigationOptions: navigationOptions(),
    },
    DetailScreen: {
      screen: DetailScreen,
    },
    ImageAssignment: {
      screen: ImageAssignment,
      navigationOptions: navigationOptions(),
    },
  },
  {
    initialRouteName: 'SearchScreen',
    // headerMode: 'float',
    defaulfNavigationOptions: ({navigation}) => ({
      headerTitleStyle: {
        fontWeight: 'bold',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1,
        fontFamily: 'FallingSkyCond',
      },
    }),
  },
);

export default AppContainer = createAppContainer(MainNavigator);

console.disableYellowBox = true;
