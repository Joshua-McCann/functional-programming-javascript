
const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110];

const boostSingleScores = arr => arr.map(val => (val < 10) ? val * 10 : val);

const rmvOverScores = arr => arr.filter(val => val <= 100);

const rmvZeroScores = arr => arr.filter(val => val > 0);

const scoresSum = arr => arr.reduce((sum, val) => sum + val, 0);

const scoresCnt = arr => arr.reduce((cnt, val) => cnt + 1, 0);

//Convert each statement to a function that can accept and act on any array.

//Compose a function that will remove both zero or lower scores and scores over 100. Test it using the scores array.
const rmvScoresBetween0And100 = pipe(rmvOverScores, rmvZeroScores);
const scoresBetween0And100 = rmvScoresBetween0And100(scores);

//Compose a function that will do all the modifications to an array. Test it using the scores array.
const allFunctions = pipe(boostSingleScores, rmvScoresBetween0And100)
const allModifcaionts = allFunctions(scores);

//Create a function that will accept an array and return the average. Use the function that sums scores and the function that counts scores or the length property.
const scoresAvg = arr => scoresSum(arr) / scoresCnt(arr);

//Compose a function that will do all the modifications on an array and return an average.  
const filterAndAverage = pipe(boostSingleScores, rmvOverScores, rmvZeroScores, scoresAvg);
const scoreAverage = filterAndAverage(scores);