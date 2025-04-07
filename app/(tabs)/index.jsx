import { ScrollView, View, Text, StyleSheet, SafeAreaView, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as Font from 'expo-font';
import TodoList from '../../components/TodoList.js'

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) {
    return 'Good morning,'
  } else if (hour < 18) {
    return 'Good afternoon,'
  } else {
    return 'Good evening,'
  }
}

function Greeting() {
  const [greeting, setGreeting] = useState(getGreeting())

  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting(getGreeting());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>{greeting} Bel!</Text>
      <Text style={styles.subtitle}>A look at the day ahead...</Text>
    </View>
  );
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      'SFProDisplay-Black': require('../../assets/fonts/SF-Pro-Display-Black.otf'),
      'SFProDisplay-BlackItalic': require('../../assets/fonts/SF-Pro-Display-BlackItalic.otf'),
      'SFProDisplay-Bold': require('../../assets/fonts/SF-Pro-Display-Bold.otf'),
      'SFProDisplay-BoldItalic': require('../../assets/fonts/SF-Pro-Display-BoldItalic.otf'),
      'SFProDisplay-Heavy': require('../../assets/fonts/SF-Pro-Display-Heavy.otf'),
      'SFProDisplay-HeavyItalic': require('../../assets/fonts/SF-Pro-Display-HeavyItalic.otf'),
      'SFProDisplay-Light': require('../../assets/fonts/SF-Pro-Display-Light.otf'),
      'SFProDisplay-LightItalic': require('../../assets/fonts/SF-Pro-Display-LightItalic.otf'),
      'SFProDisplay-Medium': require('../../assets/fonts/SF-Pro-Display-Medium.otf'),
      'SFProDisplay-MediumItalic': require('../../assets/fonts/SF-Pro-Display-MediumItalic.otf'),
      'SFProDisplay-Regular': require('../../assets/fonts/SF-Pro-Display-Regular.otf'),
      'SFProDisplay-RegularItalic': require('../../assets/fonts/SF-Pro-Display-RegularItalic.otf'),
      'SFProDisplay-Semibold': require('../../assets/fonts/SF-Pro-Display-Semibold.otf'),
      'SFProDisplay-SemiboldItalic': require('../../assets/fonts/SF-Pro-Display-SemiboldItalic.otf'),
      'SFProDisplay-Thin': require('../../assets/fonts/SF-Pro-Display-Thin.otf'),
      'SFProDisplay-ThinItalic': require('../../assets/fonts/SF-Pro-Display-ThinItalic.otf'),
      'SFProDisplay-Ultralight': require('../../assets/fonts/SF-Pro-Display-Ultralight.otf'),
      'SFProDisplay-UltralightItalic': require('../../assets/fonts/SF-Pro-Display-UltralightItalic.otf'),
    }).then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Greeting />
        <View style={styles.twoColumnContainer}>
          <View style={styles.twoColumn}>
            <Text>schedule widget</Text>
          </View>
          <View style={styles.twoColumn}>
            <Text>weather widget</Text>
          </View>
        </View>
        <View style={styles.todoContainer}>
          <TodoList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  scrollContainer: {
    padding: 10,
  },
  greeting: {
    fontSize: 48,
    fontFamily: 'SFProDisplay-Heavy',
    color: 'black',
    marginLeft: 20,
    marginBottom: 5,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 24,
    fontFamily: 'SFProDisplay-RegularItalic',
    marginLeft: 20,
    marginBottom: 15,
  },
  twoColumnContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  twoColumn: {
    width: '46%',
    height: 200,
    borderRadius: 20,
    padding: 20,
    margin: '2%',
    borderColor: '#d9d9d9',
    borderWidth: 1,
    marginBottom: 0,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  todoContainer: {
    margin: '1%',
    borderColor: '#d9d9d9',
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  }
});
