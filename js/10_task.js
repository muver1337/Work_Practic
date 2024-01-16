let arr10 = [[1,4,5],[1,3,4],[2,6]];

let merge = [].concat( ...arr10 );

merge.sort(function (a, b) {
    return a - b;
});

console.log("Task 10: ", merge)