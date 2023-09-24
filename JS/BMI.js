// Challenge 1
// task 1:
var Mark = {mass: 78, height: 1.69};
var John = {mass: 92, height: 1.95};

var Mark2 = {mass: 95, height: 1.88};
var John2 = {mass: 85, height: 1.76};

// task 2: Calculate BMI
function calcBMI({mass, height}) {
    return (mass / (height * height)).toFixed(2);
}
 var markBMI = calcBMI(Mark);
 var johnBMI = calcBMI(John);
 var markBMI2 = calcBMI(Mark2);
 var johnBMI2 = calcBMI(John2);

 // task 3: 
var markHigherBMI = markBMI > johnBMI;
var markHigherBMI2 = markBMI2 > johnBMI2;

console.log("*****Challenge 1: test data 1*****")
console.log("Mark's BMI: ", markBMI)
console.log("John's BMI: ", johnBMI)
console.log("Chỉ số BMI của Mark cao hơn John: " + markHigherBMI)

console.log("*****Challenge 1: test data 2*****")
console.log("Mark's BMI: ", markBMI2)
console.log("John's BMI: ", johnBMI2)
console.log("Chỉ số BMI của Mark cao hơn John: " + markHigherBMI2)

// Challenge 2
console.log("****Challenge 2:*****")
if (markHigherBMI)
    console.log(`BMI của Mark(${markBMI}) cao hơn của John(${johnBMI})`)
else 
    console.log(`BMI của Mark(${markBMI}) thấp hơn của John(${johnBMI})`)