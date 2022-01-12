# contracts
Starter project for html, css, javascript. Uses npm and lite-server. Provides project structure. Thats all, no frameworks, no sass or less, barebones.

To make it go in Visual Studio Code, you must have node installed

Open terminal in root directory

run - `npm install`

run - `npm run start`

to stop the server use ctrl + c

You should see your browser start on port 3000
See directories in bs-config.json (lite-server) configuration
These directories are mapped to the basedir so you do not have to include full path when referencing in html page.

The index.html page has a link to a edit person page.
The edit person page references the following scripts of interest

person.js which is a simple object representing a person

person-edits.js which included code to handle the person-edit.html page


