# Quiz App
 
## Introduction
This project contains two folders: `app`, which contains a starter Angular frontend app, and `server`, which contains a starter Express backend app. 
 
Follow the instructions below and complete both the apps according to the specification. 
 
Happy coding!
 
## Getting Started
Run `npm install` in both the app and server folders.
 
## Frontend
Write an Angular app to present multiple choice quiz questions to a user. The app should have 3 pages:
1. A splash page where the user selects a category and difficulty for the quiz.
2. A questions page where the user is presented a list of 10 questions and possible answers.
3. A results page showing their correct answers as a percentage of the total, and the correct vs incorrect answers as a chart.
 
You can use the PrimeNG component library for the UI components and chart, documentation is at [https://primefaces.org/primeng](https://primefaces.org/primeng). Feel free to use any components which you think are necessary, but don’t focus too much on the visuals, we just want to see a simple, intuitive UI.
 
We would like to see you use the Observable flow (RXJS) for interacting with the API. In addition, you may use a state management system such as NGRX or NGXS if you choose. 
 
The frontend will utilize an Express backend that you will build to fetch the necessary questions and answers for the UI. We've added an example `GreetingService` that showcases how we're expecting the frontend to call the backend.
 
## Backend
Write an Express backend that will provide the UI with the questions and answers and validate the answers.
 
Inside the starter project in `server` there's a `data` folder that contains a `questions.json` file that you can use to pull the questions and answers.