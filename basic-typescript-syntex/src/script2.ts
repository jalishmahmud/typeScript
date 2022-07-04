let a: string;

let b: number;

a = "23";
// console.log(a)

let x: (string | number | object)[] = [];
x.push(
    'Jalish',
    {
        name: "jaish mahmud",
        age: 30,
        dob: function () {
            console.log("1200- 1900")
        }
    },
    23,
    function soSomething() {
        console.log("hello");
    }
    
);

// object 
let c: object; // any

let d: {
    name: string,
    age: number,
    adult: boolean
}
d = {
    name: "Jalish",
    age: 23,
    adult: true
}

