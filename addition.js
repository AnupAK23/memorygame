const { Readline } = require("readline/promises");

function input(q){
    let rl=Readline.createInterface({
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