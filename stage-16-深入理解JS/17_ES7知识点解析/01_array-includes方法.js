const names = ["abc", "cba", "nba", "mba", NaN]

if(names.indexOf('cba') !== -1) {
    console.log('包含cba元素-indexOf');
}

// ES7 ES2016
if (names.includes("cba", 2)) {
    console.log("包含abc元素-includes")
}

// indexOf不能查找NaN
if (names.indexOf(NaN) !== -1) {
    console.log("包含NaN-indexOf")
}

if (names.includes(NaN)) {
    console.log("包含NaN-includes")
}
  