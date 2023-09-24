// Challenge 3:
console.log("*****Challenge 3******")
// test data 1:
// var Dolphins = [96, 108, 89]
// var Koalas = [88, 91, 110]

// test data bonus 1
var Dolphins = [97, 112, 101]
var Koalas = [109, 95, 123]

// test data bonus 2
// var Dolphins = [97, 112, 101]
// var Koalas = [109, 95, 106]

// task 1: tính điểm trung bình của mỗi đội
var scoreAvg_Dolphins = Dolphins.reduce((acc, score) => acc + score) / Dolphins.length
var scoreAvg_Koalas = Koalas.reduce((acc, score) => acc + score) / Koalas.length
console.log("**Task 1: tính điểm trung bình của mỗi đội**")
console.log (`---Điểm trung bình đội Dolphins: ${scoreAvg_Dolphins.toFixed(3)}`)
console.log (`---Điểm trung bình đội Koalas: ${scoreAvg_Koalas.toFixed(3)}`)

// task 2: so sánh điểm tb của 2 đội để quyết định đội chiến thắng
console.log("**Task 2: so sánh điểm tb của 2 đội để quyết định đội chiến thắng**")
var teamWin = scoreAvg_Dolphins == scoreAvg_Koalas ? 'Cả 2 đội hòa điểm nhau. Draw!' :
 (scoreAvg_Dolphins > scoreAvg_Koalas ? 'Dolphins là đội chiến thắng' : 'Koalas là đội chiến thắng');
console.log(`---${teamWin}`);

// task 3&4: Team win phải có số điểm cao hơn team khác và đạt ít nhất 100 điểm
//           Đồng thời, trận hòa chỉ xảy ra khi 2 team bằng điểm và đạt ít nhất 100 điểm
console.log("**Task 3&4: Team win phải có số điểm cao hơn team khác và đạt ít nhất 100 điểm. "
            +"Đồng thời, trận hòa chỉ xảy ra khi 2 team bằng điểm và đạt ít nhất 100 điểm**")
if (Math.max(scoreAvg_Dolphins, scoreAvg_Koalas) >= 100) {
    if (scoreAvg_Dolphins == scoreAvg_Koalas) 
        console.log(`Cả 2 đội hòa điểm nhau, số điểm là ${scoreAvg_Dolphins}`)
    else if (scoreAvg_Dolphins > scoreAvg_Koalas)
        console.log(`---${teamWin} với số điểm là ${scoreAvg_Dolphins}`); 
    else 
        console.log(`---${teamWin} với số điểm là ${scoreAvg_Koalas}`);
} else 
    console.log("---không có đội chiến thắng!")
