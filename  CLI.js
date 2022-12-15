var input = require('readline-sync')
var points = 0

var name = input.question("Enter your name-:")
console.log("Hello",name)
function CLIquiz(question,answer) {
    console.log(i+1+"."+question)
    let ans = input.question("")
    if (answer == ans){
        console.log("Right");
        points++
    }
    else{
        console.log("Wrong");
    }
    console.log("-----------$$-----------");
}

let data = [{
    question:"how many friends do you have?",
    answer:"4"
},{
    question:"What's your dream job?",
    answer:"fullstack developer" 
},{
    question:"What's your favorite color?",
    answer:"Gray"
},{
    question:"Who is your hero?",
    answer:"dad"
},{
    question:"would you ever date anyone who is elder then you?",
    answer:"yes"   
}]

console.log("How much do you know me");
for (var i = 0;i<data.length;i++){
    CLIquiz(data[i].question,data[i].answer)
}
console.log("You have scored",points,"points",name);