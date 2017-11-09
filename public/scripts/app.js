"use strict";

console.log('App.js is running');

var app = {
  title: "Indecision App",
  subtitle: "This is an app to help you to decide what to do",
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();

  var option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    render();
  }
};

var onRemoveAll = function onRemoveAll() {
  app.options = [];
  render();
};

var onMakeDecision = function onMakeDecision() {
  var randNum = Math.floor(Math.random() * app.options.length);
  var selectedOption = app.options[randNum];
  console.log(selectedOption);
};

var appRoot = document.getElementById('app');

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      "p",
      null,
      app.subtitle
    ),
    app.options && app.options.length > 0 ? React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "Here are your options:"
      ),
      React.createElement(
        "button",
        { onClick: onMakeDecision },
        "What should I do?"
      ),
      React.createElement(
        "button",
        { onClick: onRemoveAll },
        "Remove all"
      ),
      React.createElement(
        "ol",
        null,
        app.options.map(function (option, index) {
          return React.createElement(
            "li",
            { key: index },
            option
          );
        })
      )
    ) : React.createElement(
      "p",
      null,
      "No options"
    ),
    React.createElement(
      "form",
      { onSubmit: onFormSubmit },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
