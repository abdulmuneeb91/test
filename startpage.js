import React, {Component} from 'react';
import {ActivityIndicator, StatusBar, StyleSheet, Text, View} from 'react-native';
import firebase from '../database/firebaseDb';

import CustomButton from './button/custom-button/CustomButton';


export default class StartPage extends Component {

  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        if (user.emailVerified) {
          this.props.navigation.navigate('Dashboard');
        }
      }
      this.setState({
        isLoading: false,
      });
    });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.preloader}>
          <StatusBar backgroundColor='#455a64'/>
          <ActivityIndicator size="large" color="#8000ff"/>
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#8000ff'/>
        <CustomButton
          styleBG={styles.buttonBG}
          styleTxt={styles.buttonTxt}
          title="SIGN-IN"
          click={() => {
            this.props.navigation.navigate('Login');
          }}
        />
        <Text/>
        <CustomButton
          styleBG={styles.buttonBG}
          styleTxt={styles.buttonTxt}
          title="SIGN-UP"
          click={() => {
            this.props.navigation.navigate('Signup');
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 35,
    backgroundColor: '#ffffff',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  buttonBG: {
    marginTop: 20,
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#455a64',
    borderRadius: 30,
  },
  buttonTxt: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 18,
  },
});