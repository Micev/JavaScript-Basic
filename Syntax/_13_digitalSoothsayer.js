function soothsayer(input) {
    var year = input[0][Math.floor(Math.random() * 5)];
    var language = input[1][Math.floor(Math.random() * 5)];
    var city = input[2][Math.floor(Math.random() * 5)];
    var car = input[3][Math.floor(Math.random() * 5)];
    console.log("You will work "+year+" years on "+language+".\nYou will live in "+city+" and drive "+car+".")
}
soothsayer([[3, 5, 2, 7, 9], ['Java', 'Python', 'C#', 'JavaScript', 'Ruby'], ['Silicon Valley', 'London', 'Las Vegas', 'Paris', 'Sofia'], ['BMW', 'Audi', 'Lada', 'Skoda', 'Opel']]);