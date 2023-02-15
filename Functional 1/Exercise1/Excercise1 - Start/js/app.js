
var users = [{name: "James",score: 30,tries: 1}, {name: "Mary", score: 110,tries: 4}, {name: "Henry",score: 80,tries: 3}];

var updateScore = function(arr, name, newAmt) {
    const user = arr.find(u => u.name === name);
    const updatedUser = {...user, score: user.score + newAmt};
    return updateUser(arr, updatedUser);
};

var updateTries = function(arr, name) {
    const user = arr.find(u => u.name === name);
    const updatedUser = {...user, tries: user.tries + 1};
    return updateUser(arr, updatedUser);
};

var updateUser = function(arr, newUser) {
    const updatedUsers = [...arr.filter(u => u.name !== newUser.name), newUser];
    return updatedUsers;
};


users1 = updateScore(users, 'James', 30);
users2 = updateTries(users1,'James');
users = users2;