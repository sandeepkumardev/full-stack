create a new folder. > mkdir <folder_name>
navigate to new folder. > cd <folder_name>

init npm > npm init -y
install parcel > npm i -D parcel
install react and raect-dom > npm i react react-dom
add a script in pacakge.json > "start": "parcel src/index.html"

create a src folder > mkdir src
create a three files > index.html index.js App.js App.css

create a basic template of html and a single div with id "root" & add script tag with type="module"
import React & ReactDOM and create a root using ReactDOM.

now create a basic function in App.js and export App component
import App into index.js file and render it in root variable.

import App.css file in App.js > import "./App.css"
create a components directory in src folder.

// git commands
in root path > git add .
git commit -m ""
git push origin <branch_name>

// in new git project
git init

> create a new repo in github
> git remote add origin <cloud repo link>

// create branch
git branch -> list all branch
git checkout -b "new branch name"
git branch

// move around branch
git checkout <branch name>

// check repo remote
git remote show origin
