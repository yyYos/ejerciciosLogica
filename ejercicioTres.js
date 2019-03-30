var people = [{
                id: 1,
                name: "John",
                age: 28
            }, {
                id: 2,
                name: "Jane",
                age: 31
            }, {
                id: 3,
                name: "Peter",
                age: 55 
            }];

let mayores = people.filter(people => people.age >= 11);

console.log(mayores);