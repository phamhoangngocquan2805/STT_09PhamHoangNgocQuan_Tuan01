// Challenge 5 
console.log("*****Challenge 5******")
// test data 1:
// var Dolphins = [44,23,71];
// var Koalas = [65,54,49];
// test data 2:
var Dolphins = [85,54,71];
var Koalas = [23,34,27];
// Task 1: tạo function 'calcAvg' tính điểm trung bình
console.log("**Task 1: tạo function 'calcAvg' tính điểm trung bình**")
var calcAvg = (score) => {
    return score.reduce((acc, num) => acc + num) / score.length;
}
// Task 2: dùng function 'calcAvg' để tính trung bình của 2 team
console.log("**Task 2: dùng function 'calcAvg' để tính trung bình của 2 team**")
var scoreAvg_Dolphins = calcAvg(Dolphins);
var scoreAvg_Koalas = calcAvg(Koalas);
console.log("Điểm trung bình của Dolphins: " + scoreAvg_Dolphins)
console.log("Điểm trung bình của Koalas: " +scoreAvg_Koalas)

// Task 3: tạo function 'checkWinner' để lấy điểm trung bình của mỗi team
console.log("**Task 3**")
var checkWinner = scoreAvg_Dolphins > scoreAvg_Koalas ? 
`Dolphins win (${scoreAvg_Dolphins} vs. ${scoreAvg_Koalas})` 
: `Koalas win (${scoreAvg_Koalas} vs. ${scoreAvg_Dolphins})`
console.log(`${checkWinner}`)