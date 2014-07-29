function findYoungestPerson(persons) {
    var youngest=Math.min();
    var position = 0;
    for (var i = 0; i < persons.length; i++) {
        if(persons[i].age < youngest){
            youngest = persons[i].age;
            position= i;
        }
    }
    console.log("The youngest person is "+persons[position].firstname+" "+persons[position].lastname);
}
var persons = [
    { firstname : 'George', lastname: 'Kolev', age: 32},
    { firstname : 'Bay', lastname: 'Ivan', age: 81},
    { firstname : 'Baba', lastname: 'Ginka', age: 40}]
findYoungestPerson(persons);
