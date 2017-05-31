


'use strict';

process.env.DEBUG = 'actions-on-google:*';
const App = require('actions-on-google').ApiAiApp;

//import kotlin module
var module = require('./node/module_out');

const REPEAT_NUMBER_ACTION = 'repeat_number';
const NUMBER_ARGUMENT = 'number';

// the name of this function is important
exports.numberRepeater = (request, response) => {
  const app = new App({request, response});
  console.log('Request headers: ' + JSON.stringify(request.headers));
  console.log('Request body: ' + JSON.stringify(request.body));

  // Just repeat the number
  function repeatNumberFun (app) {
    let number = app.getArgument(NUMBER_ARGUMENT);
    app.tell('Awesome! Your number is ' + module.repeat(number) +
      '! I hope I can do more next time! See you!');
  }

  let actionMap = new Map();
  actionMap.set(REPEAT_NUMBER_ACTION, repeatNumberFun);

  app.handleRequest(actionMap);
};