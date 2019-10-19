This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

# React Contact Form Task

Membership site needs a way to handle user questions in better way. Developer created contact form using React.JS so users can now fill the form and send questions to different departments based on question type and their membership option.

---
## Your Task
Your task is to finish the form so it have all following functionalities:

### 1. Form should work (now it doesn`t)
- Initial values should be rendered, even if empty
- User should be able to change values
- Every change should invoke `onChange` function in `ContactForm` properties
- User can submit form using button or pressing ENTER in fields (except `textarea`)
- User submission should invoke `onSubmit` function passed via properties

### 2. User can log in, so name and email are filled-in
- When user presses log-in button, current user info should appear
- When user is logged in his name and email should be filled-in inside form

### 3. After form is sent a Thank You message should appear
- Finish Message component
- It should not display any header by default, unless specified
- It can use text property or just display its children in `.message-body` 

---
For more details please run task inside devskiller and see failing tests.

## Setup
1. Use `npm run test:watch` to see tests failing
2. Fix issues so that tests pass
3. Solve all issues mentioned here
4. Test your code on platform to see if all tests passed

## Good Luck!