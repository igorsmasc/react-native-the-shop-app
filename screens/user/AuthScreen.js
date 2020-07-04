import React from 'react';
import {
  ScrollView,
  View,
  KeyboardAvoidingView,
  StyleSheet,
  Button,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Input from '../../components/UI/Input';
import Card from '../../components/UI/Card';
import Colors from '../../constants/Colors';

const AuthScreen = ({}) => {
  return (
    <View style={styles.screen}>
      <LinearGradient colors={['#ffedff', '#ffe3ff']} style={styles.gradient}>
        <Card style={styles.authContainer}>
          <ScrollView>
            <Input
              id="email"
              label="E-mail"
              keyboadType="email-address"
              required
              email
              autoCapitalize="none"
              errorMessage="Please enter a valid email address"
              onInputChange={() => {}}
              initialValue=""
            />
            <Input
              id="password"
              label="Password"
              keyboadType="default"
              secureTextEntry
              required
              minLength={5}
              email
              autoCapitalize="none"
              errorMessage="Please enter a valid password"
              onInputChange={() => {}}
              initialValue=""
            />
            <View style={styles.buttonContainer}>
              <Button title="Login" color={Colors.primary} onPress={() => {}} />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                title="Sign up"
                color={Colors.accent}
                onPress={() => {}}
              />
            </View>
          </ScrollView>
        </Card>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
  authContainer: {
    width: '85%',
    maxWidth: 400,
    height: '60%',
    maxHeight: 400,
    padding: 20,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 10,
  },
});

export default AuthScreen;
