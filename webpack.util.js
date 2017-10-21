const fs = require("fs")
const recursiveReadSync = require('recursive-readdir-sync')


module.exports = {
    filesToCompile(){
        let files = {}
        recursiveReadSync('./js/modules')
        .filter(function(file){
            return /View\.js$/.test(file)
        })
        .map(function(file){
            let nameFile = file.replace(/\/View.js$/, '')
            files[nameFile] = './' + file
        })
        return files
    }
}