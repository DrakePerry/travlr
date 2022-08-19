Architecture

This application utilizes HTML CSS and Javascript via express and angular as our front end architecture.  For client side, we are using html and css pages generated using javascript and handlebars in order to serve customers pages as they request them.  By contrast, we also have an administrator application utilizing Angular, which loads a single page application in which the components are programatically loaded into the document as needed.  This process preloads all of the available components, allowing them to be shuffled around and used in the application much more quickly for the administrators.
Our backend is a MongoDB database using NodeJS.  This NoSQL database scales easily and integrates quickly, and also allowed us to stick to javascript as the only programming language necessary for this project.

Functionality


In our application, JSON (or Javascript Object Notation) was used as the primary way in order to store and display data.  JSON objects are written using Javascript syntax, but is primarily used to describe objects.  All of the calls and received messages from the server to the front end were made using JSON, and all of our objects were structured using JSON as well.  In this way, we are able to integrate Handlebars into our front end in order to proceedurally generate our HTML pages in order to adapt to our changing JSON objects.  JSON’s primary goal in this case was the bridge the front end and back end services together.
The primary refactoring that we did involved making our code more functional and reusable, particularly when we first implemented handlebars and express.  Angular also allows easy reusing of components, making it much easier to chance code in many places at once as well as keep from rewriting the same code multiple times.  Writing reusable code is not only more efficient up front, but is also easier to maintain in the long term as well.  Now, we’ll never have to write the header for our website in each html page, we won’t have to hardcode a list of travel destinations, and we can add additional components to our SPA without having to reconfigure the entire page!

Testing


By hashing our passwords for our users, as well as not saving the data in plain text at any point.  We also do not send raw passwords at any point in the chain, and have to use our secret value in order to validate our users.  Another important point is to make sure that our secret hash file is NOT included in our github repository.  By requiring validation from our users before accessing our API, we are able to prevent many common types of cyber attacks.

Reflection

This course has helped me to further my professional goals in a variety of ways.  This is well and truly my first time building an application with a front end and back end architecture, security, testing, and SPA, this was even my first time touching javascript at all.  While some points were certainly overwhelming, and I didn’t even manage to get the application 100% functional, this massive undertaking has a been a huge learning opportunity into what a full stack developer does on a daily basis, and I feel much more confident going forward and doing a project like this again.
