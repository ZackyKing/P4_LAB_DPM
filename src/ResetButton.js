import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ResetButton = ({ onReset }) => {
  return (
    <View style={styles.resetButtonContainer}>
      <Button title="Reset Scores" onPress={onReset} />
    </View>
  );
};

const styles = StyleSheet.create({
  resetButtonContainer: {
    marginTop: 30,
  },
});

export default ResetButton;
