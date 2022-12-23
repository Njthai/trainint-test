const sayHello = () => "Hello World";

const suma = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both arguments must be numbers");
  }
  return a + b;
};
const generateRandInt = (max, min) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const mockData = (bottomLimit,min,max,topLimit,iterations)=>{
    let data = new Array()
    for (let index = 0; index < iterations; index++) {
       data.push(Array.of(bottomLimit,min,max,topLimit))        
    }
    // console.log(data);
    return data;
}
mockData(1,2,3,4,100)
module.exports = { sayHello, suma, generateRandInt,mockData };