// Import necessary libraries
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Title from './src/Title';
import TeamScore from './src/TeamScore';
import ResetButton from './src/ResetButton';
import Celebration from './src/Celebration';

const FutsalScoreApp = () => {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);
  const [winner, setWinner] = useState(null);

  // Function to handle score update
  const updateScore = (team, operation) => {
    if (team === 'A') {
      if (operation === '+' && teamAScore < 10) {
        const newScore = teamAScore + 1;
        setTeamAScore(newScore);
        if (newScore === 10) {
          setWinner('Team A');
        }
      } else if (operation === '-' && teamAScore > 0) {
        setTeamAScore(teamAScore - 1);
      }
    } else if (team === 'B') {
      if (operation === '+' && teamBScore < 10) {
        const newScore = teamBScore + 1;
        setTeamBScore(newScore);
        if (newScore === 10) {
          setWinner('Team B');
        }
      } else if (operation === '-' && teamBScore > 0) {
        setTeamBScore(teamBScore - 1);
      }
    }
  };

  // Function to reset scores
  const resetScores = () => {
    setTeamAScore(0);
    setTeamBScore(0);
    setWinner(null);
  };

  return (
    <View style={styles.container}>
      <Title />
      {winner && <Celebration winner={winner} />}
      <TeamScore
        teamName="Team A"
        score={teamAScore}
        onIncrement={() => updateScore('A', '+')}
        onDecrement={() => updateScore('A', '-')}
      />
      <TeamScore
        teamName="Team B"
        score={teamBScore}
        onIncrement={() => updateScore('B', '+')}
        onDecrement={() => updateScore('B', '-')}
      />
      <ResetButton onReset={resetScores} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
});

export default FutsalScoreApp;
