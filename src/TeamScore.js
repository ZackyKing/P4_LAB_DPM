import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TeamScore = ({ teamName, score, onIncrement, onDecrement }) => {
  return (
    <View style={styles.teamContainer}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>{score}</Text>
      <View style={styles.buttonContainer}>
        <Button title="+" onPress={onIncrement} />
        <Button title="-" onPress={onDecrement} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  teamContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  teamName: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
  },
  score: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 120,
  },
});

export default TeamScore;
