import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Image, TextInput, Text } from "react-native";

export function LogIn({}) {

  function handleLogin(){
    
  }

  return (
    <View style={{ alignItems: 'center' }}>
      <Image
        source={require('../assets/InstaLogo.png')}
        style={styles.logo}
      />
      <TextInput
        style={styles.inputUser}
        placeholder="User"
        placeholderTextColor={'#00000033'} />
      <TextInput
        style={styles.inputPassword}
        placeholder="Password"
        placeholderTextColor={'#00000033'} />
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <View style={styles.lineContainer}>
        <Image
          source={require('../assets/Line.svg')}
          style={styles.line}
        />
        <Text style={{ color: '#00000066', marginHorizontal: 20 }}>OR</Text>
        <Image
          source={require('../assets/Line.svg')}
          style={styles.line}
        />
      </View>
      <View style={styles.containerF}>
        <Text style={{ color: '#00000066' }}>Don’t have an account? </Text>
        <TouchableOpacity>
          <Text style={{ color: '#3797EF', fontWeight: '400' }}>Sign up.</Text>
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
    marginTop: 180
  },
  inputUser: {
    borderWidth: 0.1,
    width: 343,
    height: 50,
    backgroundColor: '#FAFAFA',
    borderRadius: 1,
    marginTop: 40,
    paddingHorizontal: 15,
  },
  inputPassword: {
    borderWidth: 0.1,
    width: 343,
    height: 50,
    backgroundColor: '#FAFAFA',
    borderRadius: 1,
    marginTop: 15,
    paddingHorizontal: 15,
  },
  forgot: {
    fontWeight: '500',
    color: '#3797EF',
    marginLeft: 228,
    marginTop: 15
  },
  button: {
    height: 45,
    width: 325,
    backgroundColor: '#3797EF',
    borderRadius: 6,
    marginTop: 40,
    justifyContent: 'center',
    marginBottom: 50
  },
  buttonText: {
    alignSelf: 'center',
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '600'
  },
  lineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#00000020',
    marginHorizontal: 10,
  },
  containerF: {
    flexDirection: 'row'
  }
})
