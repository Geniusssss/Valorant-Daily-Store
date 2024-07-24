import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import useAuth from '../../hooks/useAuth';
import { Redirect } from 'expo-router';

const InGame = () => {
  const { user } = useAuth();

  if (!user) {
    return <Redirect href="/" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>In Game</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default InGame;
