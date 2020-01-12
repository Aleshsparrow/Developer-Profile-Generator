// Set up dependents (axios, inquirer, fs)
const axios = require("axios")
const inquirer = require("inquirer")
const fs = require("fs")
// Get URl for git hub call
inquirer
  .prompt([
    {
    type: "input",
    message: "what is your favorite color",
    name: "color"
    },
    {
    type: "input",
    message: "What is your GitHub username",
    name: "username"
    },
    {
    type: "input",
    message: "Tell us a little about yourself",
    name: "bio"
    },
    {
    type: "input",
    message: "What is your current location",
    name: "location"
    },


  ])
  .then(function({ color, username, bio, location }) {
    //   const { } = data
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    
 
  console.log(color)
  console.log(username)
    axios
    .get(queryUrl)
    .then(function(res) {
        // if(error){
        //     throw error
        // }
        const userInfo = res.data.map(repo => repo.name)
        console.log(userInfo)
        console.log(userInfo[1])
        // res.data.forEach(function(userInfo){
        //     if(res.data.private === false){
        //         console.log(userInfo)
        //     }
        //     else{
        //         "user info is private"
        //     }
        // })
    // return(res.data);
    // const repoList = res.data.map(repo => repo.name)
    // console.log(repoList)
    // fs.writeFile("repo.txt", repoList.toString(), function(error){
        
    // })
        
    });
    });
// Set up wnquirer prompt 
// Use enquirer and git hub url to build the axios
// Create a var html and template html using template literals to fill in info from axios
// Use fs write file with the variable of templating html to create index.html
// use fs to open() to open file
    //fs.join to connect the current working directory and the file name for the open
        //fs.join(path.cwd(), fileName);
        //.join() concatanates the directory path
        //path.cwd() grabs the paht to the directory this file is located in
        //fileName represents the string name of the file I'm trying to open