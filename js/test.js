// Loadash
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr ကို က္ငင်းထဲက သတ်မှတ်ထားတဲ့ အရေအတွက် အလျောက် 3Dimensional Array များခွဲပေးခြင်း
console.log(_.chunk(arr, 3));

const myName = "Thet Zaw Hein";

console.log(_.camelCase(myName));


// Moment
const m = moment();
m.add(45, "days");

console.log(m.format("Y M D"));
console.log(m.format("Y MM D"));
console.log(m.format("Y MMM D"));

m.subtract(3, "years");
m.subtract(25, "days");

console.log(m.format("Y MMM D"));