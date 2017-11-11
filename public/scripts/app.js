'use strict';

console.log('App.js is running');

var visible = false;

var onToggleVisible = function onToggleVisible() {
  visible = !visible;
  render();
};

var render = function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: onToggleVisible },
      visible ? 'Hide details' : 'Show details'
    ),
    visible && React.createElement(
      'p',
      null,
      'Details'
    )
  );

  ReactDOM.render(template, document.getElementById('app'));
};

render();
