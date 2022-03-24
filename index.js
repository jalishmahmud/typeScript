var a = "Hello Jalish";
function getLowerCase(str) {
    return str.toLowerCase();
}
console.log(getLowerCase("Hello"));
console.log(getLowerCase("Hello World"));
console.log(getLowerCase(""));
var b = 34;
function add(number1, number2) {
    return number1 + number2;
}
add(5, 3);
add(45, b);
var substrack = function (number1, number2) {
    return number1 - number2;
};
// Array<T> Generic
var arr = [12, 34, 444, 44];
var arr1 = ["jalish", "danish"];
var id = "34";
var person = {
    name: "Nishat",
    age: 34,
    hobby: "Football"
};
var person1 = {
    name: "Jalish",
    age: 34
};
// Enums
var Colors;
(function (Colors) {
    Colors["color1"] = "f1f1f1";
    Colors["color2"] = "f3f3f3";
    Colors["color3"] = "f3f3f4";
})(Colors || (Colors = {}));
console.log(Colors.color1);
console.log(Colors.color2);
