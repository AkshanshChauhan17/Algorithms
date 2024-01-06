const fs = require('fs')

document.getElementById('create-file').addEventListener('click', () => {
    fs.writeFileSync('output.txt', 'this is it', 'utf-8', (err) => {
        if (err) {
            alert(err)
            return
        }
        alert('File has been written successfully')
    })
})