let m : any;
m = 20;
console.log(m)


let f: any[] = [];
let p: {
    name: any,
    age: any
}

const myFunc = (a: string, b: string, c?:string, d: string = "Hello") :string => {
    // console.log(d + a, b);
    // return  undefined in JS if nothing return which is a value
    // return  void in TS if nothing return which is nothing
    
    return a + b;
}

myFunc("A", "B");