import React from 'react';
import Routes from './routes';
import './config/StatusBarConfig';
import { YellowBox } from 'react-native';
// import { StyleSheet, View, Text, } from 'react-native';

YellowBox.ignoreWarnings([
    'componentWillReceiveProps'
]);

const App = () => <Routes />

// const App = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>React Native</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 20
//   }
// });

export default App;
