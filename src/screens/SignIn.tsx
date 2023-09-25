import React from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native";


export function SignIn() {
  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={require('../assets/InstaLogo.png')}
        style={styles.logo}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
      <View style={styles.containerF}>
        <Text style={{ color: '#00000066' }}>Don’t have an account? </Text>
        <TouchableOpacity>
          <Text style={{ color: '#262626', fontWeight: '600' }}>Sign up.</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: 182,
    height: 49,
    resizeMode: 'contain',
    marginTop: 240
  },
  button: {
    height: 45,
    width: 325,
    backgroundColor: '#3797EF',
    borderRadius: 6,
    marginTop: 40,
    justifyContent: 'center'
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600'
  },
  containerF: {
    marginTop: 350,
    flexDirection: 'row'
  }
})
