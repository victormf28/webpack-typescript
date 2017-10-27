const fs = require("fs")
const recursiveReadSync = require('recursive-readdir-sync')


module.exports = {
    filesToCompile(){
        let files = {}
        recursiveReadSync('./ts/modules')
        .filter(function(file){
            return /View\.ts$/.test(file)
        })
        .map(function(file){
            let nameFile = file.replace(/\/View.ts$/, '')
            files[nameFile] = './' + file
        })
        return files
    }
}
