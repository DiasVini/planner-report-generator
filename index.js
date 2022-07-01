require("dotenv").config()
require('isomorphic-fetch')
const auth = require('./auth.js')
const fetch = require('./fetch')
const fs = require("fs")
const pathHandler = require('path')
const mime = require('mime')



function main(){
    if (process.argv.indexOf("--help")){

    } else if(process.argv.indexOf("--groupId")){
        const groupId = process.argv[process.argv.indexOf("--groupId") + 1]
        console.log("Ok", groupId)
    }
}







main()