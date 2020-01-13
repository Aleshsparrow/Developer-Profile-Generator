// Set up dependents (axios, inquirer, fs)
const axios = require("axios")
const inquirer = require("inquirer")
const fs = require("fs")
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
// Get URl for git hub call

inquirer
  .prompt([
    {
    type: "list",
    message: "what is your favorite color",
    choices: ["green", "blue", "pink", "red"],
    name: "color"
    },
    {
    type: "input",
    message: "What is your name",
    name: "name"
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
  .then(function({ color, name, username, bio, location }) {
      //   const { } = data
      const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    //   const gitHubLink = `https://github.com/${username}`
      
      console.log(color)
      console.log(username)
      axios
      .get(queryUrl)
      .then(function(res) {
        const data = res.data
        // for (const element of data) {
        //     console.log(element);}
        data.forEach(element => console.log(element));
        // const repoList = res.data.map(repo => repo.name)
        // console.log(repoList.length)

        const colors = {
          green: {
            wrapperBackground: "#E6E1C3",
            headerBackground: "#C1C72C",
            headerColor: "black",
            photoBorderColor: "#black"
          },
          blue: {
            wrapperBackground: "#5F64D3",
            headerBackground: "#26175A",
            headerColor: "white",
            photoBorderColor: "#73448C"
          },
          pink: {
            wrapperBackground: "#879CDF",
            headerBackground: "#FF8374",
            headerColor: "white",
            photoBorderColor: "#FEE24C"
          },
          red: {
            wrapperBackground: "#DE9967",
            headerBackground: "#870603",
            headerColor: "white",
            photoBorderColor: "white"
          }
        };

        const html = `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>Document</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        </head>
        <body>
        
          <div style="background-color: ${color}; color: ${color};" class="container">
            
            <div  style="background-color: white;" class="jumbotron">
              <div class="text-center">
                <img style="border-radius: 300px;" src="https://picsum.photos/300/300" class="rounded" alt="...">
              </div>
              <h1 style="text-align: center;" class="display-4">Hello</h1>
              <p style="text-align: center;" class="lead">My name is ${name}</p>
              <hr class="my-4">
              <p style="color: ${color}; text-align: center; margin: 15px;"><a href="">Location</a> <a href="https://github.com/${username}">Github</a></p>
              
              <div style="text-align: center; color: white; " class="row">
                <h5 style="padding: 15px; background-color: ${color};" class="col-sm-5">Learn more</h5>
                <div class="col-sm-2"></div>
                <h5 style="padding: 15px; background-color: ${color};" class="col-sm-5">Learn more</h5>
              </div>
        
              <div style="text-align: center;" class="row">
                <h5 style="padding: 15px; background-color: ${color};" class="col-sm-5">Learn more</h5>
                <div class="col-sm-2"></div>
                <h5 style="padding: 15px; background-color: ${color};" class="col-sm-5">Learn more</h5>
              </div>
            </div>   
          </div>
          
        </body>
        </html>`
        writeFileAsync("index.html", html)
    });
    
   
    })

          
      
            
        // for (const i = 0; i < res.length; i++){
        //     console.log(res[1])
        // }
        // throw error
        // console.log(res)
        // const userInfo = res.data.map(repo => repo.private)
        // console.log(userInfo)
        
        // console.log(res.data)
        // for (var i = 0; i < res.length; i++){
        //     console.log(res[i])
        // }

        // console.log(userInfo[1])
        // const info = res.data
        // info.forEach(function(userInfo){
        //     if(info.private === false){
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