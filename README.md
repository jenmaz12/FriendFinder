# FriendFinder
FriendFinder is an application which, using Node.js and Express, returns a friend match based on the user's answers to a survey.

Visit the deployed site on Heroku [here](https://sleepy-springs-62403.herokuapp.com/).

This application uses an API route to POST the user's survey results to a data JavaScript file and return a friend from that data set with the least amount of total difference between their scores on the questions.

The application also allows the user to view all of friends in the data set by using a GET API route.

The HTML files are displayed using GET routes to the HTML file.

![FriendFinder Home](/images/home.png =800x "FriendFinder Home")
![FriendFinder Survey](/images/survey.png "FriendFinder Survey")
![FriendFinder Result](/images/result.png "FriendFinder Result")