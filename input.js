const readline = require('node:readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// rl.question(`What's your name?`, name => {
//   console.log(`Hi ${name}!`);
//   rl.close();
// });

// rl.question(`enter a number?`, Number=>{
//     console.log(``)
// })

function input(q){
    let rl=readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    })
    return new Promise((resolve, reject) => {
        rl.question(q,num=>{
            rl.close()
            resolve(parseInt(num))
        })
    })
}

async function add(){
    try{
        let a=await input("enter num1\n")
        let b=await input("enter num2\n")
        console.log(`sum of ${a},${b} is ${a+b}`)
    }
    catch(e){
        console.log(e)
    }
}
add()