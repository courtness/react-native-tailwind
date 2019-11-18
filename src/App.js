import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import IndexView from "~views/IndexView";
import WelcomeView from "~views/WelcomeView";

import Header from "~components/Header";

const RootStack = createStackNavigator(
  {
    Index: IndexView,
    Welcome: WelcomeView
  },
  {
    initialRouteName: `Index`,
    defaultNavigationOptions: {
      header: <Header />,
      headerStyle: {
        backgroundColor: `transparent`
      }
    }
  }
);

const AppContainer = createAppContainer(RootStack);

const App = () => <AppContainer />;

export default App;
