import React from 'react';
import Home from './app/views/Home';
import Contact from './app/views/Contacts';
import Menu from './app/sections/Menu';
import { createStackNavigator, createAppContainer } from 'react-navigation';


const MyRoutes = createStackNavigator({
  Menu: {
    screen: Menu,
  },
  Contact: {
    screen: Contact,
    navigationOptions: () => ({
      title: "Contact Page",
    })
  },
  Home: {
    screen: Home,
  },

});
 function App() {
  return (
    <MyRoutes />
  );
}
export default createAppContainer(MyRoutes);

