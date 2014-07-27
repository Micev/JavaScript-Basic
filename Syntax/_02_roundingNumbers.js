function roundNumber(value) {
    var round = Math.round(value);
    var floor = Math.floor(value);
    return{ round: round,
        floor: floor
    };
}
var result = roundNumber(22.7);
console.log(result.floor);
console.log(result.round);
result = roundNumber(12.3);
console.log(result.floor);
console.log(result.round);
result = roundNumber(58.7);
console.log(result.floor);
console.log(result.round);