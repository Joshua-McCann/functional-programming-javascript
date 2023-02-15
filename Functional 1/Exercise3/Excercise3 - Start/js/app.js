
const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110];

//Any scores that are below 10 needs to be multiplied by 10 and the new value included.
const modifiedScores = scores.map(val => {
  return (val < 10) ? val * 10 : val;
});

//Remove any scores that are over 100.
const scoresBelow100 = modifiedScores.filter(val => val <= 100);

//Remove any scores that are 0 or below.
const scoresHigherThan0 = scoresBelow100.filter(val => val > 0);

//Sum the scores.
const sum = scoresHigherThan0.reduce((a, b) => a + b, 0);

//Provide a count for the number of scores still remaining.
const scoresRemaining = scoresHigherThan0.length;







