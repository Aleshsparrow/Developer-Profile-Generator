// Set up dependents (axios, inquirer, fs)
const axios = require("axios")
const inquirer = require("inquirer")
const fs = require("fs"), 
convertFactory = require('electron-html-to');
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
    message: "What is your GitHub username",
    name: "username"
    },
   
  ])
  .then(function({ color, username}) {
      //   const { } = data
      const queryUrl = `https://api.github.com/users/${username}`;
    //   const gitHubLink = `https://github.com/${username}`
      
      console.log(color)
      console.log(username)
      axios
      .get(queryUrl)
      .then(function(res) {
        const data = res.data
        // console.log(data)
        // const data = res.data
        // for (var i = 0; i < data.length; i++){
        //   console.log(data[i])
        // }
        // for (const element of data) {
        //     console.log(element);}
        // data.forEach(element => console.log(element));
        // const repoList = res.data.map(repo => repo.name)
        // console.log(repoList)
        // console.log(repoList.length)

        
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
                <img style="border-radius: 300px;" src="${data.avatar_url}" class="rounded" alt="Profile pic">
              </div>
              <h1 style="text-align: center;" class="display-4">Hello</h1>
              <p style="text-align: center;" class="lead">My name is ${data.name}</p>
              <hr class="my-4">
              <p style="color: ${color}; text-align: center; margin: 15px;"><a style="color: ${color};" href="">${data.location}</a> <a style="color: ${color};" href="https://github.com/${username}">Github</a></p>
              <br>
              <h4 style="text-align: center;">${data.bio}</h4>
              <div style="text-align: center; color: white; " class="row">
                <h5 style="padding: 15px; background-color: ${color};" class="col-sm-5">Public Repositories ${data.public_repos}</h5>
                <div class="col-sm-2"></div>
                <h5 style="padding: 15px; background-color: ${color};" class="col-sm-5">Followers: ${data.followers}</h5>
              </div>
        
              <div style="text-align: center; color: white;" class="row">
                <h5 style="padding: 15px; background-color: ${color};" class="col-sm-5">Stars:</h5>
                <div class="col-sm-2"></div>
                <h5 style="padding: 15px; background-color: ${color};" class="col-sm-5">Following: ${data.following}</h5>
              </div>
              <h3 style="text-align: center;">
                <a style="text-align: center; color: ${color}" href="${data.blog}">User Blog</a>
              </h3>
            </div>   
          </div>
          
        </body>
        </html>`
        writeFileAsync("index.html", html)
        
    });
    
    
   
    })
    .then(html => {
      const conversion = convertFactory({
        converterPath: convertFactory.converters.PDF
      });
      conversion({ html }, function(err, result) {
        if (err) {
          return console.error(err);
        }
        result.stream.pipe(
          fs.createWriteStream(path.join(__dirname, "resume.pdf")),
          
        );
        conversion.kill();
      });
      open(path.join(process.cwd(), "resume.pdf"));
    });


          
      
            
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