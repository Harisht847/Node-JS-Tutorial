const {readFile, writeFile} = require('fs')

console.log('start')


readFile("./something.txt", "utf8", (err, result) => {
    if (err) {
        console.log(err)
    }
    const first = result
    console.log(first)
    readFile("./something1.txt", "utf8", (err, result) => {
        if (err)
        {
            console.log(err)
        }
        const second =  first + result 
        writeFile("./result.txt",result,(err, result) => {
            if (err)
            {
                console.log(err)
            }
            console.log("File writing is done")
        })
    })
})



console.log("DONE")