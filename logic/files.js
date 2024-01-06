const fs = require('fs')

document.getElementById('file-create').addEventListener('click', () => {
    fs.writeFileSync('output.txt', 'this is it', 'utf-8', (err) => {
        if (err) {
            alert(err)
            return
        }
        alert('File has been written successfully')
    })
})