
var users = [{name: "James",score: 30,tries: 1}, {name: "Mary", score: 110,tries: 4}, {name: "Henry",score: 80,tries: 3}];

var newScore = function(arr, name, amt) {
    const newArr = [];
    arr.forEach(function(val) {
        newArr.push({
            ...val,
            score: val.name.toLowerCase() === name.toLowerCase() ? val.score + amt : val.score
        });
    });
    return newArr;
};

var newTries = function(arr, name) {
    const newArr = [];
    arr.forEach(function(val) {
        newArr.push({
            ...val,
            tries: val.tries + (val.name.toLowerCase() === name.toLowerCase())
        });
    });
    return newArr;
};


var newArray1 = newScore(users, "Henry", 30);
var newArray2 = newTries(users, "Henry");



