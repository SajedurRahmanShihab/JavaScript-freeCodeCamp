// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-getters-and-setters-to-control-access-to-an-object

// Only change code below this line
class Thermostat{
    constructor(fahrenheit) {
       this.fahrenheit = fahrenheit;
     }
     
     get temperature() {
       return (5 / 9) * (this.fahrenheit - 32);
     }
     
     set temperature(celsius) {
       this.fahrenheit = (celsius * 9.0) / 5 + 32;
     }
   
   }
   
   // Only change code above this line
   
   const thermos = new Thermostat(76); // Setting in Fahrenheit scale
   let temp = thermos.temperature; // 24.44 in Celsius
   thermos.temperature = 26;
   temp = thermos.temperature; // 26 in Celsius