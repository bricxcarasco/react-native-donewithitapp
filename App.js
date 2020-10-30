import React from 'react';
import { StyleSheet, Button, Alert, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button 
        color="orange"
        title="Click me!" 
        onPress={() => 
          Alert.prompt("My title", "My Message", text => console.log(text))
        } />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
