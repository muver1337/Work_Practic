let year = 2022;
if (( year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Task 7:",year,"Год высокосный")
} else{
    console.log("Task 7:",year, "Этот год не высокосный")
}

let month = Math.floor(Math.random() * 12) + 1;
if (month >= 1 && month <=2 || month === 12){
    console.log("Task 7:","Зима")
} else if (month >= 3 && month <= 5){
    console.log("Task 7:","Весна")
} else if (month >= 6 && month <= 8) {
    console.log("Task 7:","Лето")
} else if(month >= 9 && month <=11){
    console.log("Task 7:", 'Осень');
}