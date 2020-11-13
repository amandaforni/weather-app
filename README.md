# weather-app
Node.js and API practice

1. Created GIT Repo and cloned it into local repo
2. NPM init to create a package.json
3. Installed dependencies (handlebars, nodemon, fetch, express) and pushed them to the main branch of project
4. Created outline of file structure in local repo
[Created app structure along with class
5. Created index.js file, main.css file in public, and a getWeather file in the library
6. Created pages with handlebars to set up content/html
    -main.hbs creates container for page- in layouts as can be reused for later projects/basic layout for a node webpage
    -index.hbs page includes the default location's conditions and a button to allow user to access other locations
    -weather.hbs 
7. Updated CSS with slide information to create basic styling
8. Created pages in index.js which are later moved into routers
    -used app.get to create an async/await function structure in order to direct specified page
    -for the index get it brings you to the main page when / is typed into the url (index.hbs)
    -for the weather router it brings you to the user-friendly input form when /weather is typed in (weather.hbs)
    -when /[anything else] is typed in it brings you to a 404 page to declare the index doesnt exist. (404.hbs)
9. Used app.engine to pull together pieces from file- joining the paths of layouts/partials with views
10. app.use with (__dirname, 'public') imports any CSS files
11. weather.hbs uses post method which is then drawn into the .post function in weatherRouter.js, and body parser is added to index.js to interpret this
]

12. Added extra features from openweather to index.js and weather.js (humidity, clouds, etc)
13. Installed Moment to convert times from Unix/implemented into files
14. Pulled CSS into HBS documents using #each
15. Added CSS styling for weather and index pages, edited styling of Navbar
16. Changed #each and @key structure to accommodate captions for each condition,using #with instead

